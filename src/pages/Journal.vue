<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">a wise person once said...</h1>
      </div>
    </div>
    <g-link
      class="journal-post"
      :to="'/post/' + edge.node.id"
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ edge.node.title }}</h2>
        <p class="journal-excerpt">
          {{ edge.node.excerpt }}
        </p>
      </div>
    </g-link>
  </Layout>
</template>



<script>
export default {
  name: "journal",
  data() {
    return {};
  },
  methods: {},
  components: {},
//   <page-query>
// query{
//   posts: allPost {
//     edges {
//       node {
//         id
//         title
//         excerpt
//       }
//     }
//   }
// }
// </page-query>
};
</script>

<style>
</style>
