import { defineLoader } from "vitepress";
import fsPromises from "node:fs/promises";
import { parse } from "csv-parse/sync";

// https://vitepress.dev/guide/data-loading
export default defineLoader({
  watch: ["./collection-index.csv"],
  async load(watchedFiles) {
    // watchedFiles will be an array of absolute paths of the matched files.
    // generate an array of blog post metadata that can be used to render
    // a list in the theme layout

    const text = await fsPromises.readFile("collection-index.csv", "utf8");
    return parse(text, { columns: true, skip_empty_lines: true });
  },
});
