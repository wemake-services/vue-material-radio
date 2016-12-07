import MaterialRadio from 'components/MaterialRadio'
import {getComponent} from '../utils'

describe('MaterialRadio.vue', () => {
  let component

  beforeEach(() => {
    component = getComponent(MaterialRadio, {
      expected: true,
      value: false
    })
  })

  // Computed:

  it('renders correct default computedClasses', () => {
    const classes = component.computedClasses

    expect(classes).to.deep.equal({
      'material-radio--checked': false,
      'material-radio--disabled': false
    })
  })

  it('renders correct disabled and checked computedClasses', () => {
    const classes = getComponent(MaterialRadio, {
      expected: true,
      value: true,
      disabled: true
    }).computedClasses

    expect(classes).to.deep.equal({
      'material-radio--checked': true,
      'material-radio--disabled': true
    })
  })

  it('ensures that isChecked works correctly', () => {
    expect(component.isChecked).to.equal(false)

    const checked = getComponent(MaterialRadio, {
      expected: true,
      value: true
    })

    expect(checked.isChecked).to.equal(true)
  })

  // Events:

  it('ensures that check() emits input event', () => {
    let test = null
    const passed = 'passed'

    component.$on('input', function () {
      test = passed
    })

    component.check()

    expect(test).to.equal(passed)
  })

  it('ensures that check() emits change event', () => {
    let test = null
    const passed = 'passed'

    component.$on('change', function () {
      test = passed
    })

    component.check()

    expect(test).to.equal(passed)
  })

  it('ensures that check() does not emit events when disabled', () => {
    const inst = getComponent(MaterialRadio, {
      expected: true,
      value: false,
      disabled: true
    })

    let test = null
    const passed = 'passed'

    inst.$on('input', function () {
      test = passed
    })

    inst.$on('change', function () {
      test = passed
    })

    inst.check()

    expect(test).to.equal(null)
  })
})
