import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const minify = false

export default {
  entry: 'source/index.js',
  targets: [{dest: `dist/react-tabs-handler.es.js`, format: 'es'}],
  exports: 'named',
  moduleName: 'TabsHandler',
  format: 'es',
  external: ['react', 'prop-types'],
  plugins: [
    nodeResolve({jsnext: true, main: true}),
    commonjs({include: 'node_modules/**'}),
    babel({exclude: 'node_modules/**'}),
    minify && uglify(),
  ].filter(Boolean),
}
