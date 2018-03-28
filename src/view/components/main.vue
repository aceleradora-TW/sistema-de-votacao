<template>
  <div>
      <h1>Projetos</h1>
      <ul>
          <li v-for="project in projects">{{project.name}}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: [
                    {
                        name: 'Projeto 01'
                    }
                ]
            }
        }
    }
</script>