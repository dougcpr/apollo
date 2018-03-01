<template lang="pug">
  v-container(fluid).pr-0.ma-0.education-container EDUCATION
    v-layout(v-for="data of education", :key="data.role", column).py-2
      v-flex(xs12) 
        v-layout
          v-card(raised,hover).education-card
            v-card-title
              v-flex(xs3).education-date
                div.py-2 {{ data.startYear }} - {{ data.endYear }}
              v-flex
                div.py-2(style="font-size: 18px").education-role {{ data.degree }} 
                div.py-2.education-role {{ data.school }}

</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { db } from '@/services/firebase'
  let educationRef = db.ref('education')

  @Component({
    firebase: {
      education: educationRef
    }
  })
  export default class Education extends Vue {
    // ***************** Variable Declaration Block *****************

    // ***************** Property Block *****************************

    // ***************** Computed Properties Block ******************

    // ***************** Methods Block ******************************

    // ***************** Lifecycle Hook Block ***********************

    // ***************** Watchers Block *****************************
  }
</script>
<style scoped>
  .education-card{
    width: 95%;
  }
  .education-container {
    background-color: #ECEFF1;
    color: #0288D1;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
  }
  .education-date {
    color: #0288D1;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
  }
  .education-role {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
  }
</style>
