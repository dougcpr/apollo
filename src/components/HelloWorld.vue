<template lang="pug">
  v-container(fluid) {{ firebase.skills }}
</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  // import the db connection
  import { db } from '../services/firebase'

  @Component({})
  export default class App extends Vue {
    // ***************** Variable Declaration Block *****************

    // ***************** Property Block *****************************

    // ***************** Computed Properties Block ******************

    // ***************** Methods Block ******************************
    firebase = {
      skills: db.ref('Skills')
    }
    // ***************** Lifecycle Hook Block ***********************

    // ***************** Watchers Block *****************************
  }
</script>