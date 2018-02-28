<template lang="pug">
  v-container(fluid)
    //- First Row 
    v-layout(row, wrap)
      v-flex(d-flex, xs12, sm6, md2, xlg4)
      v-flex(d-flex xs12, sm6, md3)
        v-card(color="black", height="200")
      v-flex(d-flex xs12, sm6, md5)
        v-card(height="200") 
        profile
      v-flex(d-flex, xs12, sm6, md2)
    //- Second Row 
    v-layout(row, wrap)
      v-flex(d-flex, xs12, sm6, md2)
      v-flex(d-flex xs12, sm6, md3)
        v-card(color="blue", height="200")
        proficiencies
      v-flex(d-flex xs12, sm6, md5)
        v-card(height="200") 
        experience
      v-flex(d-flex, xs12, sm6, md2)
    //- Third Row
    v-layout(row, wrap)
      v-flex(d-flex, xs12, sm6, md2)
      v-flex(d-flex xs12, sm6, md3)
        v-card(height="200")
        skill-bars
      v-flex(d-flex xs12, sm6, md5)
        v-card 
        education
      v-flex(d-flex, xs12, sm6, md2)
    //- Fourth Row
    v-layout(row, wrap)
      v-flex(d-flex, xs12, sm6, md2)
      v-flex(d-flex xs12, sm6, md3)
        v-card(color="red", height="200")
      v-flex(d-flex xs12, sm6, md5)
        v-card(color="black", height="200") 
      v-flex(d-flex, xs12, sm6, md2, xlg4)
</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import skillBars from './children/skillbars'
  import profile from './children/profile'
  import experience from './children/experience'
  import education from './children/education'
  import proficiencies from './children/proficiencies'

  @Component({
    components: {
      skillBars,
      profile,
      experience,
      education,
      proficiencies
    }
  })
  export default class App extends Vue {
    // ***************** Variable Declaration Block *****************

    // ***************** Property Block *****************************

    // ***************** Computed Properties Block ******************

    // ***************** Methods Block ******************************

    // ***************** Lifecycle Hook Block ***********************
    created () {
    }
    // ***************** Watchers Block *****************************
  }
</script>
<style scoped>
</style>
