<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" :style="{backgroundImage: `url(${GRIDSOME_API_URL + general.cover.url})`}">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="edges in $page.posts.edges"
            :key="edges.node.id"
          >
            <g-link :to="'/post/' + edges.node.id">
              <h2 class="post-title">
                {{ edges.node.title }}
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on {{ edges.node.created_at }}
            </p>
            <span v-for="tag in edges.node.tags" :key="tag.id">
              <a href="">{{ tag.title }}</a>
              &nbsp;&nbsp;
            </span>
            <hr />
          </div>

          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            >
          </div> -->
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int){
  posts: allStrapiPost(perPage: 2, page: $page) @paginate{
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        content
        created_at
        tags{
          id
          title
        }
      }
    }
  }
  allStrapiGeneral {
    edges {
      node {
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    general() {
      console.log(this.$page)
      return this.$page.allStrapiGeneral.edges[0].node
    }
  },
  components: { Pager },
};
</script>

<style>
</style>
