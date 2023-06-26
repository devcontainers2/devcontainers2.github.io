Collections This list below contains pointers to official and
community-contributed Dev Container assets, including Features and Templates.
Collections on this list are continuously crawled for liveness, and can be
presented in UX of Dev Container-supporting tools (i.e. it will be presented in
the GitHub Codespaces and VS Code Dev Containers UX).

To add your own collection to this list, just open a new Issue using [this
form].

<script setup>
// https://vitepress.dev/guide/data-loading
// Array of { name, maintainer, contact, repository, ociReference } objects
import { data as CollectionIndex } from "./collection-index.data.ts";
// console.debug(CollectionIndex);
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
    <tr v-for="collection of CollectionIndex">
      <td><a :href="collection.repository">{{ collection.name }}</a></td>
      <td><a :href="collection.contact">{{ collection.maintainer }}</a></td>
      <td>{{ collection.ociReference }}</td>
    </tr>
  </tbody>
</table>

🙌 Have your own Dev Container feature or template? [Fill out this form!]

<!-- prettier-ignore-start -->
[Fill out this form!]: 
