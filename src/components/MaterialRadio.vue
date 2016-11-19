<template>
  <div class="material-radio__component" :class="computedClasses">
    <div class="material-radio-wrapper" @click="check">
      <input
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        :disabled="disabled" />

      <MaterialRipple
        v-if="ripple"
        :className="'ripple--black'"></MaterialRipple>
    </div>

    <label
      v-if="$slots.default"
      :for="id || name"
      class="material-radio-label">
        <slot></slot>
    </label>
  </div>
</template>

<script>
  import MaterialRipple from 'vue-material-ripple'

  export default {
    name: 'material-radio',
    computed: {
      computedClasses () {
        return {
          'material-radio--checked':
            this.value && this.expected.toString() === this.value.toString(),
          'material-radio--disabled': this.disabled
        }
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
      name: {
        type: String
      },
      value: {
        type: [String, Boolean, Number]
      },
      expected: {
        type: [String, Boolean, Number],
        required: true
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
    components: {
      MaterialRipple
    }
  }
</script>

<style lang="sass">
  // Installing ripple styles:
  @import "~vue-material-ripple/style";

  // Transitions:
  // Thanks to Angular Material

  $swift-ease-out-duration: .4s;
  $swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1);
  $swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function;

  $swift-ease-in-duration: .3s !default;
  $swift-ease-in-timing-function: cubic-bezier(.55, 0, .55, .2);
  $swift-ease-in: all $swift-ease-in-duration $swift-ease-in-timing-function;

  // Sizes:

  $size-radio: 20px;
  $size-ripple: 48px;

  // Colors:
  $color-dark-grey: rgba(#000, .54);
  $color-grey: rgba(#000, .26);
  $color-blue: #2196F3;

  // Component:

  .material-radio__component {
    * {
      box-sizing: border-box;
    }

    width: auto;
    margin: 16px 8px 16px 0;
    display: inline-flex;
    position: relative;

    // Checked state:

    &.material-radio--checked {
      .material-radio-wrapper {
        border-color: $color-blue;

        &:after {
          opacity: 1;
          transform: scale3D(1, 1, 1);
          transition: $swift-ease-out;

          background-color: $color-blue;
          border-color: $color-blue;
        }
      }
    }

    // Disabled state:

    &.md-disabled {
      .md-radio-container {
        border-color: $color-grey;

        &:after {
          background-color: $color-grey;
        }
      }

      &.md-checked {
        .md-radio-container {
          border-color: $color-grey;
        }
      }
    }

    .material-radio-wrapper {
      width: $size-radio;
      height: $size-radio;
      position: relative;
      border-radius: 50%;
      border: 2px solid $color-dark-grey;
      transition: $swift-ease-out;

      overflow: hidden;

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
      height: $size-radio;
      padding-left: 8px;
      line-height: $size-radio;
    }
  }
</style>
