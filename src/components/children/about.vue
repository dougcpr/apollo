<template lang="pug">
  v-container(fluid).about-container.pr-0.ma-0 ABOUT ME
    v-layout(v-for="data of about", :key="data.description", column).py-2
        v-flex(row, wrap).about-name
            v-layout
                v-icon(color="blue-grey darken-3") cloud_queue
                div.pt-1.pl-3 {{ data.description }}
</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { db } from '@/services/firebase'
  let aboutRef = db.ref('about')

  @Component({
    firebase: {
      about: aboutRef
    }
  })
  export default class Proficiencies extends Vue {
    // ***************** Variable Declaration Block *****************

    // ***************** Property Block *****************************

    // ***************** Computed Properties Block ******************

    // ***************** Methods Block ******************************

    // ***************** Lifecycle Hook Block ***********************

    // ***************** Watchers Block *****************************
  }
</script>
<style scoped>
    .about-container{
        background-color: #ECEFF1;
        color: #0288D1;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 600;
    }
    .about-name {
        text-transform: uppercase;
        font-size: 12px;
        color: black;
        font-weight: 300;
    }
</style>
