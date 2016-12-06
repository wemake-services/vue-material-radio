<template>
  <form class="example">
    <MaterialRadio
      class="material-radio--orange"
      name="checked"
      :expected="true"
      v-model="value"
      :disabled="disabled"
      :ripple="true">
        Label
    </MaterialRadio>

    <div class="example-field">
      <label>Disabled</label>
      <input type="checkbox" v-model="disabled" />
    </div>

    <button type="button" @click="clean">Clean</button>
  </form>
</template>

<script>
  import MaterialRadio from '../../src/components/MaterialRadio.vue'

  export default {
    name: 'material-constructor',
    data: function () {
      return {
        value: false,
        disabled: false
      }
    },
    methods: {
      clean () {
        this.value = false
        this.disabled = false
      }
    },
    components: {
      MaterialRadio
    }
  }
</script>

<style lang="sass">
  $color-base: #FFCCBC;
  $color-highlight: #FF5722;
  $color-disabled: #9E9E9E;

  .material-radio--orange {
    .material-radio-wrapper {
      border-color: $color-base;

      &.material-radio--checked {  // highlighted style
        border-color: $color-highlight;

        &:after {
          background-color: $color-highlight;
        }
      }

      &.material-radio--disabled {  // disabled style
        border-color: $color-disabled;

        &:after {
          background-color: $color-disabled;
        }
      }

      .material-radio-label {
        color: $color-disabled;
      }
    }

    .material-ripple__component {
      background-color: $color-highlight;
    }
  }
</style>
