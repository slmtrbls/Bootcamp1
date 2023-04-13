<template>
  <h1>My Quasar Project</h1>
  <div v-for="techno in technos" :key="techno.id">
    <CardComponent :label="techno.label" :text="techno.text" />
  </div>
</template>

<script lang="ts">

import CardComponent from 'src/components/CardComponent.vue'
import * as techno from 'src/assets/data.json'

export default {
  name: 'MainLayout',
  components: {
    CardComponent
  } ,
  data() {
    return {
     technos: techno.techno
    }  
  }
} 



</script>

<style>
h1 {
  font-size: 40px;
  text-align: center;
}
</style>
