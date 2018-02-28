<template lang="pug">
  v-container(fluid).pr-0.ma-0.profile-container
    v-layout(v-for="data of profile", :key="data.name", column).py-2
      v-flex(xs12) 
        v-layout.pl-3.pt-2
          div.py-2.ml-2(style="font-size: 18px") {{ data.name }}
        v-layout.pl-4
          v-icon(color="blue-grey darken-3").pt-1 account_circle
          div.pt-2.ml-3 {{ data.title }}
      v-flex(xs12).pt-4
        v-layout.pl-4
          v-icon(color="blue-grey darken-3") email
          div.pt-1.ml-3 {{ data.email }}
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
  export default class Profile extends Vue {
    // ***************** Variable Declaration Block *****************

    // ***************** Property Block *****************************

    // ***************** Computed Properties Block ******************

    // ***************** Methods Block ******************************

    // ***************** Lifecycle Hook Block ***********************

    // ***************** Watchers Block *****************************
  }
</script>
<style scoped>
  .profile-container {
    background-color: #0288D1;
    color: white;
    text-transform: uppercase;
    font-weight: 400;
  }
</style>
