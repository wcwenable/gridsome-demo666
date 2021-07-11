<template>
  <Layout v-slot="{ theme }">
    <div class="container">
      <Hero :theme="theme"/>
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
  query Posts {
    projects:  allStrapiPost(order: ASC) {
      edges {
        node {
          id
          date (format: "YYYY")
          title
          categories {
            title
          }
          thumbnail {
            url (quality: 90)
          }
          path
        }
      }
    }    
    journals: allStrapiJournal{
      edges {
        node {
          id
          path
          title
        }
      }
    }
  }
</page-query>


<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
