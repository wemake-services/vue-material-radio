<template>
  <form class="example">
    <p>Value is {{ checked }}</p>
    <MaterialRadio
      name="checked"
      expected="one"
      v-model="checked">
        One
    </MaterialRadio>

    <MaterialRadio
      name="checked"
      expected="two"
      v-model="checked">
        Two
    </MaterialRadio>

    <button type="button" @click="clean">Clean</button>
  </form>
</template>

<script>
  import MaterialRadio from '../../src/components/MaterialRadio.vue'

  export default {
    name: 'material-model',
    data: function () {
      return {
        checked: ''
      }
    },
    methods: {
      clean () {
        this.checked = ''
      }
    },
    components: {
      MaterialRadio
    }
  }
</script>

<style lang="sass">
  .example {
    max-width: 300px;
    display: block;
    margin: 0 auto;

    .example-field {
      input {
        padding: .5em .6em;
        display: block;
        border: 1px solid #ccc;
        box-shadow: inset 0 1px 3px #ddd;
        border-radius: 4px;
        vertical-align: middle;
        box-sizing: border-box;
      }
    }

    button {
      margin-top: 10px;
      user-select: none;
      border: 1px solid #e2e2e2;
      border-radius: 3px;
      outline: none;
      background-color: white;
      padding: 5px 10px;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        border-color: #ccc;
        background-color: #f9f9f9;
      }
    }

    p {
      padding: 30px 0;
    }
  }
</style>
