import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

const PLUGIN_CONFIG = [
  nodeResolve({
    mainFields: ['module', 'jsnext', 'main', 'browser']
  }),
  commonjs(),
  terser()
]

const FOLDERS = [
  'brankic',
  'broccolidry',
  'eighty-shades',
  'entypo',
  'ever-icons',
  'feather',
  'font-awesome',
  'hawcons',
  'iconic',
  'icons',
  'linecons',
  'material',
  'meteocons',
  'steadysets',
  'typicons',
  'vicons',
  'wpzoom',
  'zondicons'
]

const CONFIGS = []

FOLDERS.forEach((folder) => {
  CONFIGS.push({
    input: `./assets/${folder}/icons.js`,
    output: {
      name: 'SYMBOLS',
      file: `./assets/${folder}/icons.umd.js`,
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  })
})

export default CONFIGS
