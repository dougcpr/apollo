<template lang="pug">
  v-container(fluid).proficiencies-container.pr-0.ma-0 KNOWLEDGE
    v-layout(v-for="data of proficiencies", :key="data.name", column).py-2
        v-flex(row, wrap).proficiency-name
            v-layout
                v-icon(color="blue-grey darken-3") trending_flat
                div.pt-1.pl-3 {{ data.name }}
</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { db } from '@/services/firebase'
  let ProficienciesRef = db.ref('Proficiencies')

  @Component({
    firebase: {
      proficiencies: ProficienciesRef
    }
  })
  export default class Proficiencies extends Vue {
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
    .proficiencies-container{
        background-color: #ECEFF1;
        color: #0288D1;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 600;
    }
    .proficiency-name {
        text-transform: uppercase;
        font-size: 12px;
        color: black;
        font-weight: 300;
    }
</style>
