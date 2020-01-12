const pkg = require('./package.json')
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'public/dist/main.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    scss(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
}
