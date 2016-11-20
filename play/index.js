import { play } from 'vue-play'

import Model from './components/Model.vue'
import Constructor from './components/Constructor.vue'
import Styling from './components/Styling.vue'

import jss from 'jss'
import preset from 'jss-preset-default'

// One time setup:
jss.setup(preset())

play('MaterialRadio', module)
  .add('v-model', Model)
  .add('constructor', Constructor)
  .add('themes and styling', Styling)
