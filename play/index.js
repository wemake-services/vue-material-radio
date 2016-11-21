import { play } from 'vue-play'

import Model from './components/Model.vue'
import Constructor from './components/Constructor.vue'
import Styling from './components/Styling.vue'

play('MaterialRadio', module)
  .add('v-model', Model)
  .add('constructor', Constructor)
  .add('themes and styling', Styling)
