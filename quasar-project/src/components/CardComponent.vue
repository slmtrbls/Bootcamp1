<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://fakeimg.pl/300/" alt="fakeimg">
      <q-card-section>
        <div class="text-h6">{{ label }}</div>
        <div class="text-subtitle2">{{ text }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>


export default {
  name: 'CardComponent',
  props: {
      label: String,
      text: String
    }
  }

</script>