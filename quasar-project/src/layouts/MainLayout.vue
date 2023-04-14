<template>
  <h1>My Quasar Project</h1>
  <div id="SiteWrapper">
    <div id="CardContainer">
      <div v-for="techno in technos" :key="techno.id">
        <CardComponent :label="techno.label" :text="techno.text" />
      </div>
    </div>
    <div id="FormContainer">
      <FormComponent />
    </div>
  </div>
</template>

<script lang="ts">

import CardComponent from 'src/components/CardComponent.vue'
import FormComponent from 'src/components/FormComponent.vue'
import * as techno from 'src/assets/data.json'

export default {
  name: 'MainLayout',
  components: {
    CardComponent,
    FormComponent
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

#SiteWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#CardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
}

#FormContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0 10% 0 0;
}
</style>
