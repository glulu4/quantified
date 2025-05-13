
const {getSentryExpoConfig} = require('@sentry/react-native/metro');
const {withNativeWind} = require('nativewind/metro');

// Get the base config
const config = getSentryExpoConfig(__dirname);

module.exports = withNativeWind(config, {input: './global.css'})
// module.exports = config;


// const {getDefaultConfig} = require("expo/metro-config");
// const {withNativeWind} = require('nativewind/metro');

// const config = getDefaultConfig(__dirname)

// module.exports = withNativeWind(config, {input: './global.css'})