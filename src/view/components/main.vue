<template>
  <div>
    <h1>Projetos</h1>
    <ul>
      <li v-for="project in projects" v-bind:key="project">{{project.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    }
  },

  created() {
    this.$http.get('/projects')
      .then(response => {
        this.projects = JSON.parse(response.bodyText)
      })
      .catch(console.log)
  }
}
</script>

