<template lang="pug">
  v-container(fluid).pr-0.ma-0.profile-container
    v-layout(v-for="data of profile", :key="data.name", column).py-2
      v-flex(xs12) 
        v-layout.pl-4.pt-2
          v-icon(color="blue-grey darken-3") face
          div.py-2.ml-2 {{ data.name }}
        v-layout.pl-4
          v-icon(color="blue-grey darken-3") developer_board
          div.py-2.ml-2 {{ data.title }}
      v-flex(xs12).pt-4
        v-layout.pl-4
          v-icon(color="blue-grey darken-3") email
          div.pt-1.ml-2 {{ data.email }}
</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { db } from '@/services/firebase'
  let profileRef = db.ref('header')

  @Component({
    firebase: {
      profile: profileRef
    }
  })
  export default class Header extends Vue {
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
  .profile-container {
    background-color: #64B5F6;
    color: #37474F;
    text-transform: uppercase;
  }
</style>
