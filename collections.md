Collections This list below contains pointers to official and
community-contributed Dev Container assets, including Features and Templates.
Collections on this list are continuously crawled for liveness, and can be
presented in UX of Dev Container-supporting tools (i.e. it will be presented in
the GitHub Codespaces and VS Code Dev Containers UX).

To add your own collection to this list, just open a new Issue using [this
form].

<script setup>
import { ref } from "vue"
import * as YAML from "yaml"

const collections = ref([]);
(async () => {
  const response = await fetch("https://devcontainers.org/collections/collections.yml")
  const text = await response.text()
  const yaml = YAML.parse(text)
  collections.value = yaml;
})()
</script>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Maintainer</th>
      <th>OCI Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="collection of collections">
      <td><a :href="collection.repository">{{ collection.name }}</a></td>
      <td><a :href="collection.contact">{{ collection.maintainer }}</a></td>
      <td>{{ collection.ociReference }}</td>
    </tr>
  </tbody>
</table>

🙌 Have your own Dev Container feature or template? [Fill out this form!]

<!-- prettier-ignore-start -->

[Fill out this form!]: #
