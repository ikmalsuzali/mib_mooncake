module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/**/*.{vue,js,ts}',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'node_modules/**/*.vue',
    ],
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
}
