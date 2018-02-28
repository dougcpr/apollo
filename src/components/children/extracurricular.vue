<template lang="pug">
  v-container(fluid).pr-0.ma-0.experience-container 2 YEARS EXPERIENCE
    v-layout(v-for="data of experience", :key="data.role", column).py-2
      v-flex(xs12) 
        v-layout
          v-card(raised).experience-card
            v-card-title
              v-flex(xs3).pr-5.experience-date
                div.py-2 {{ data.startYear }} - {{ data.endYear }}
              v-flex(row, wrap)
                div.py-2(style="font-size: 18px") {{ data.name }} 
                div.py-2.experience-role {{ data.role }}

</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { db } from '@/services/firebase'
  let experienceRef = db.ref('experience')

  @Component({
    firebase: {
      experience: experienceRef
    }
  })
  export default class Experience extends Vue {
    // ***************** Variable Declaration Block *****************

    // ***************** Property Block *****************************

    // ***************** Computed Properties Block ******************

    // ***************** Methods Block ******************************

    // ***************** Lifecycle Hook Block ***********************

    // ***************** Watchers Block *****************************
  }
</script>
<style scoped>
  .experience-card{
    width: 95%;
  }
  .experience-container {
    background-color: #ECEFF1;
    color: #0288D1;
    text-transform: uppercase;
    font-size: 20px;
  }
  .experience-date {
    color: #0288D1;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
  }
  .experience-role {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
  }
</style>
