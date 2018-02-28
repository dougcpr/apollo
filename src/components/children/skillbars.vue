<template lang="pug">
  v-container(fluid)
    v-layout(v-for="skill of skills", :key="skill.name", column).py-2
      v-flex(xs12) 
        div.skill-title {{ skill.name }} 
          img(:src="skill.image").icon
      v-flex(xs12)
        v-progress-linear(color="blue-grey darken-3", :height=10, :value="skill.value").ma-0
</template>
<script>
  // Vue Imports
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { db } from '@/services/firebase'
  let skillsRef = db.ref('Skills')

  @Component({
    firebase: {
      skills: skillsRef
    }
  })
  export default class SkillBars extends Vue {
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
