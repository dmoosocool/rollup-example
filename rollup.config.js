import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import server from 'rollup-plugin-serve';
export default {
  input: "src/main.js",
  output: {
    file: "output/bundle.js",
    name: "picCompress",
    format: "iife"
  },
  plugins: [
    // babel转换es语法.
    babel({
      exclude: 'node_modules/**'
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    (process.env.NODE_ENV === 'developer' && server({open: false, contentBase: './', historyApiFallback: true, host: 'localhost', port: 8000 }))
  ]
}