<template lang="pug">
  v-container(fluid).pr-0.ma-0.example-container SOCIAL MEDIA
    v-layout.py-2
      v-flex(xs12) 
        v-layout
          v-card(raised, height="125").example-card
            v-card-title.pt-4
              v-flex(v-for="data of media", :key="data.name", row).pl-5
                div {{ data.name }}
                img.icon(:src="data.image", v-on:click="redirectToSource(data.source)").pl-4

</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { db } from '@/services/firebase'
  let mediaRef = db.ref('media')

  @Component({
    firebase: {
      media: mediaRef
    }
  })
  export default class Experience extends Vue {
    // ***************** Variable Declaration Block *****************

    // ***************** Property Block *****************************

    // ***************** Computed Properties Block ******************

    // ***************** Methods Block ******************************
    redirectToSource (source) {
      window.location.href = source
    }
    // ***************** Lifecycle Hook Block ***********************

    // ***************** Watchers Block *****************************
  }
</script>
<style scoped>
  .example-card{
    width: 95%;
    font-weight: 400;
    text-transform: none;
  }
  .example-container {
    background-color: #ECEFF1;
    color: #0288D1;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
  }
  img.icon {
    cursor: pointer;
    height: 20px;
    margin-bottom: 3px;
  }
</style>
