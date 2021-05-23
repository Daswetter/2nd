function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// import all scss files from folders
requireAll(require.context('./components', true, /^\.\/.*\.(scss)$/));
requireAll(require.context('./pages', true, /^\.\/.*\.(scss)$/));
requireAll(require.context('./theme', true, /^\.\/.*\.(scss)$/));

// import all js files from folders
requireAll(require.context('./components', true, /^\.\/.*\.(js)$/));
requireAll(require.context('./pages', true, /^\.\/.*\.(js)$/));

