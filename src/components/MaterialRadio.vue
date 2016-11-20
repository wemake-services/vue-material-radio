<template>
  <div class="material-radio__component" :class="computedClasses">
    <div
      class="material-radio-wrapper"
      @click="check">

      <input
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        :disabled="disabled" />

      <MaterialRipple v-if="ripple && !disabled"></MaterialRipple>
    </div>

    <label
      class="material-radio-label"
      v-if="$slots.default"
      :for="id || name"
      @click="check">
        <slot></slot>
      </label>
  </div>
</template>

<script>
  import MaterialRipple from 'vue-material-ripple'
  import MaterialThemeFactory from 'vue-material-theme'

  import { defaultTheme, createTheme } from './theme'

  // Component declaration:
  const Component = {
    name: 'material-radio',
    computed: {
      isChecked () {
        return this.value &&
          this.expected.toString() === this.value.toString()
      },
      computedClasses () {
        const classes = {
          'material-radio--checked': this.isChecked,
          'material-radio--disabled': this.disabled
        }

        if (this.classes && this.classes['material-radio__component']) {
          classes[this.classes['material-radio__component']] = true
        }

        return classes
      }
    },
    methods: {
      check (e) {
        if (!this.disabled) {
          this.$emit('change', this.expected, e)
          this.$emit('input', this.expected, e)
        }
      }
    },
    props: {
      expected: {
        type: [String, Boolean, Number],
        required: true,
      },
      value: {
        type: [String, Boolean, Number],
        required: true,
      },
      name: {
        type: String
      },
      id: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      ripple: {
        type: Boolean,
        default: false
      }
    },
    mixins: [
      MaterialThemeFactory(createTheme, defaultTheme)
    ],
    components: {
      MaterialRipple
    }
  }

  export default Component
</script>

<style lang="sass">
  // Installing ripple styles:
  @import "~vue-material-ripple/style";

  // Transitions:
  // Thanks to Angular Material and vue-material

  $swift-ease-out-duration: .4s;
  $swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1);
  $swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function;

  $swift-ease-in-duration: .3s !default;
  $swift-ease-in-timing-function: cubic-bezier(.55, 0, .55, .2);
  $swift-ease-in: all $swift-ease-in-duration $swift-ease-in-timing-function;

  // Sizes:
  $size-radio: 20px;
  $size-ripple: 48px;

  // Component:

  .material-radio__component {
    * {
      box-sizing: border-box;
    }

    width: auto;

    margin: 16px 8px 16px 0;

    display: inline-block;
    position: relative;
    vertical-align: middle;

    // Checked state:

    &.material-radio--checked {
      .material-radio-wrapper {
        &:after {
          opacity: 1;
          transform: scale3D(1, 1, 1);
          transition: $swift-ease-out;
        }
      }
    }

    .material-radio-wrapper {
      width: $size-radio;
      height: $size-radio;

      border-radius: 50%;
      border-width: 2px;
      border-style: solid;

      transition: $swift-ease-out;

      position: relative;
      display: inline-block;
      vertical-align: middle;

      // overflow: hidden;

      &:after {
        position: absolute;

        top: 3px;
        right: 3px;
        bottom: 3px;
        left: 3px;

        border-radius: 50%;

        opacity: 0;
        transform: scale3D(.38, .38, 1);
        transition: $swift-ease-in;

        content: " ";
      }

      input {
        position: absolute;
        left: -999em;
      }
    }

    .material-radio-label {
      user-select: none;

      height: $size-radio;
      line-height: $size-radio;

      padding-left: 8px;

      display: inline-block;
      vertical-align: middle;
    }

    // Ripple:

    // This package does not use vue-material-ripple yet,
    // since that package is not ready to create centralized animation,
    // this functionality should be removed when
    // https://github.com/wemake-services/vue-material-ripple/issues/7
    // will be fixed.

    .ripple__component {
      width: $size-ripple !important;
      height: $size-ripple !important;
      top: -16px !important;
      right: 0 !important;
      bottom: 0 !important;
      left: -16px !important;

      &.ripple--animation {
        animation: ripple 1s $swift-ease-out-timing-function,
      }
    }
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>
