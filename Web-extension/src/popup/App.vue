<template>
  <div style="width:400px">
    <input type="number" v-bind="a">
    <input type="number" v-bind="b">
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
        this.c = 500
        console.log("a")

      }
    }
  }
</script>

<style lang="sass"></style>