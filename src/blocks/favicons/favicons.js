const faviconsContext = require.context(
  '!!file-loader?name=favicons__files/[name].[ext]!.',
  true,
  /\.(svg|png|ico|xml|json)$/
);
faviconsContext.keys().forEach(faviconsContext);