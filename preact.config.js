import CopyWebpackPlugin from 'copy-webpack-plugin'

export default (config, env, helpers) => {
  let critters = helpers.getPluginsByName(config, 'Critters')[0]
  if (critters) {
    critters.plugin.options.preload = 'js' // or some other option
  }

  config.output.publicPath = ''

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        { context: `${__dirname}/src/`, from: 'index.json'},
        { context: `${__dirname}/src/`, from: 'preview.png'  },
      ],
    })
  )
}
