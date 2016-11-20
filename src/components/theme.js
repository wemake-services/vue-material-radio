// This is an example and a default theme at the same time:

// Colors:
const colorDarkGrey = 'rgba(0, 0, 0, .54)'
const colorGrey = 'rgba(0, 0, 0, .26)'
const colorBlue = '#2196F3'

const colorMixin = (color) => {
  return {
    'border-color': color,
    '&:after': {
      'background-color': color
    }
  }
}

export const createTheme = (options) => {
  return {
    'material-radio__component': {
      '&': {
        // basic style
        '& .material-radio-wrapper': {
          'border-color': options.colorBase
        },
        '& .ripple__component': {
          'background-color': options.colorHighlight
        }
      },
      '&.material-radio--checked': {
        // checked style:
        '& .material-radio-wrapper': {
          ...colorMixin(options.colorHighlight)
        }
      },
      '&.material-radio--disabled': {
        '& .material-radio-wrapper': {
          ...colorMixin(options.colorDisabled)
        }
      }
    }
  }
}

export const defaultTheme = createTheme({
  colorBase: colorDarkGrey,
  colorHighlight: colorBlue,
  colorDisabled: colorGrey
})
