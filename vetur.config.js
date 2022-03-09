/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  projects: [
    {
      root: './vue-with-apollo',
      tsconfig: './tsconfig.json',
    },
    {
      root: './nuxt-ssr-with-apollo',
      tsconfig: './tsconfig.json',
    },
  ],
};
