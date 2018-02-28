<template lang="pug">
  v-container(fluid)
    //- First Row 
    v-layout(row, wrap)
      v-flex(d-flex, xs12, sm6, md2)
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
      v-flex(d-flex xs12, sm6, md5)
        v-card(color="grey", height="200") 
      v-flex(d-flex, xs12, sm6, md2)
    //- Third Row
    v-layout(row, wrap)
      v-flex(d-flex, xs12, sm6, md2)
      v-flex(d-flex xs12, sm6, md3)
        v-card(height="200")
        skill-bars
      v-flex(d-flex xs12, sm6, md5)
        v-card(color="orange", height="335") 
      v-flex(d-flex, xs12, sm6, md2)
    //- Fourth Row
    v-layout(row, wrap)
      v-flex(d-flex, xs12, sm6, md2)
      v-flex(d-flex xs12, sm6, md3)
        v-card(color="green", height="200")
      v-flex(d-flex xs12, sm6, md5)
        v-card(color="black", height="200") 
      v-flex(d-flex, xs12, sm6, md2)
</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import skillBars from './children/skillbars'
  import profile from './children/header'

  @Component({
    components: {
      skillBars,
      profile
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
  img.icon {
    height: 20px;
    margin-bottom: 3px;
  }
  div.skill-title {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
  }
</style>
