<template>
  <form class="example">
    <MaterialRadio
      name="checked"
      :expected="true"
      v-model="checked"
      :disabled="disabled"
      :ripple="ripple">
        {{ text }}
    </MaterialRadio>

    <div class="example-field">
      <label>Value</label>
      <input type="checkbox" v-model="checked" value="one" />
    </div>

    <div class="example-field">
      <label>Label</label>
      <input type="text" v-model="text" />
    </div>

    <div class="example-field">
      <label>Disabled</label>
      <input type="checkbox" v-model="disabled" />
    </div>

    <div class="example-field">
      <label>Ripple</label>
      <input type="checkbox" v-model="ripple" />
    </div>
  </form>
</template>

<script>
  import MaterialRadio from '../../src/components/MaterialRadio.vue'

  export default {
    name: 'material-model',
    data: function () {
      return {
        checked: false,
        text: 'Example',
        disabled: false,
        ripple: true
      }
    },
    components: {
      MaterialRadio
    }
  }
</script>
