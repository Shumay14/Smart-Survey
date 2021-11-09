<template>
  <div style="width:400px">
    <input
      v-model="a"
      type="number"
    >
    <input
      type="number"
      v-bind="b"
    >
    <button @click="add()">
      ADD A + B
    </button>
    <h1>add value {{ c }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 0,
        b: 0,
        c: 100
      }
    },
    methods: {
      add() {
        this.c = 200
        this.c = this.a + this.b

      }
    }
  }
</script>

<style lang="sass"></style>