<template>
  <form class="example">
    <p>Input any valid css colors</p>

    <MaterialRadio
      name="checked"
      :expected="true"
      v-model="value"
      :theme="theme">
        Label
    </MaterialRadio>

    <div class="example-field">
      <label>Color Base</label>
      <input type="text" v-model="options.colorBase" />
    </div>

    <div class="example-field">
      <label>Color Hightlight</label>
      <input type="text" v-model="options.colorHighlight" />
    </div>

    <div class="example-field">
      <label>Color Disabled</label>
      <input type="text" v-model="options.colorDisabled" />
    </div>
  </form>
</template>

<script>
  import MaterialRadio from '../../src/components/MaterialRadio.vue'

  import { createTheme } from '../../src/components/theme.js'

  export default {
    name: 'material-constructor',
    data: function () {
      return {
        value: false,
        options: {
          colorBase: 'black',
          colorHighlight: 'blue',
          colorDisabled: 'grey'
        }
      }
    },
    computed: {
      theme () {
        const t = createTheme(this.options)

        console.log(t)

        return t
      }
    },
    components: {
      MaterialRadio
    }
  }
</script>
