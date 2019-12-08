module.exports = function (api) {
  api.cache(true);

  const presets = ['@parcel/babel-preset'];
  const plugins = ['relay'];

  return {
    presets,
    plugins
  };
}
