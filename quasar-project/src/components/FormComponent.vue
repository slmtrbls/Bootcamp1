<script>
let id = 0

export default {
  data() {
    return {
      newTechno: '',
      technos: [
        { id: id++, text: 'TypeScript' },
        { id: id++, text: 'HTML' },
        { id: id++, text: 'HTML' }
      ]
    }
  },
  methods: {
    addTechno() {
      this.technos.push({ id: id++, text: this.newTechno })
      this.newTechno = ''
    },
    removeTechno(techno) {
      this.technos = this.technos.filter((t) => t !== techno)
    }
  }
}
</script>

<template>
    <h2>Your favorite techno</h2>
    <form @submit.prevent="addTechno">
        <input v-model="newTechno" placeholder="Write your favorite techno">
        <br/>
        <button>Add</button>    
    </form>
    <ul>
        <li v-for="techno in technos" :key="techno.id">
        {{ techno.text }}
        <button @click="removeTechno(techno)">X</button>
        </li>
    </ul>
</template>

<style>
h2 {
    font-size: 20px;
    margin-bottom: 30px;
}

input {
    border : none;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
}

ul {
    margin-left: -60%;
}
</style>