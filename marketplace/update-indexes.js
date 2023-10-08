#!/usr/bin/env -S deno run -A
import * as CSV from "npm:csv/sync"
import {  readFile, rm, writeFile } from "node:fs/promises"
import { $ } from "npm:execa"

const $json = (...a) => $(...a).then(r => JSON.parse(r.stdout))

const text = await readFile("./_data/things.csv", "utf8")
const things = CSV.parse(text, {
  columns: true,
  skip_empty_lines: true,
  cast: true,
});
console.log(things)

const features = []
const templates = []
for (const thing of things) {
  let manifest
  if (/^https?:/.test(thing.specifier)) {
    console.warn(`Don't know how to handle ${thing.specifier}`)
  } else if (manifest = await $json`oras manifest fetch ${thing.specifier}:latest`.catch(() => {})) {
    if (manifest.annotations["com.github.package.type"] === "devcontainer_collection") {
      await $`oras pull ${thing.specifier}:latest -o /tmp/marketplace`
      const collection = JSON.parse(await readFile("/tmp/marketplace/devcontainer-collection.json"))
      await rm("/tmp/marketplace", { force: true, recursive: true })
      for (const feature of collection.features || []) {
        let downloads
        if (thing.specifier.startsWith("ghcr.io/")) {
          downloads = undefined
        }
        features.push({
          specifier: `${thing.specifier}/${feature.id}`,
          documentationURL: feature.documentationURL,
          source: "",
          stars: "",
          downloads: downloads || "",
          name: feature.name || "",
          description: feature.description,
          version: feature.version,
        })
      }
      for (const template of collection.templates || []) {
        let downloads
        if (thing.specifier.startsWith("ghcr.io/")) {
          downloads = undefined
        }
        templates.push({
          specifier: `${thing.specifier}/${template.id}`,
          documentationURL: template.documentationURL,
          source: "",
          stars: "",
          downloads: downloads || "",
          name: template.name || "",
          description: template.description,
          version: template.version,
        })
      }
    } else if (manifest.annotations["com.github.package.type"] === "devcontainer_feature") {
      const feature = JSON.parse(manifest.annotations["dev.containers.metadata"])
      features.push({
        specifier: thing.specifier,
        documentationURL: feature.documentationURL,
        source: "",
        stars: "",
        downloads: downloads || "",
        name: feature.name || "",
        description: feature.description,
        version: feature.version,
      })
    } else if (manifest.annotations["com.github.package.type"] === "devcontainer_template") {
      const template = JSON.parse(manifest.annotations["dev.containers.metadata"])
      templates.push({
        specifier: thing.specifier,
        documentationURL: template.documentationURL,
        source: "",
        stars: "",
        downloads: downloads || "",
        name: template.name || "",
        description: template.description,
        version: template.version,
      })
    }
  }
}

{
  const text = CSV.stringify(features, {
    header: true,
  })
  await writeFile("_data/features.csv", text)
}
{
  const text = CSV.stringify(templates, {
    header: true,
  })
  await writeFile("_data/templates.csv", text)
}
