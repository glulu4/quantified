import 'dotenv/config'; // Loads environment variables from your .env file

export default {
  expo: {
    name: "Quantified",
    slug: "Quantified - The Health Tracking App",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash_img.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.anonymous.app"
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-font",
      [
        "@sentry/react-native/expo",
        {
          organization: process.env.EXPO_PUBLIC_SENTRY_ORG,
          project: process.env.EXPO_PUBLIC_SENTRY_PROJECT,
          url: "https://sentry.io/"
        }
      ]
    ],
    experiments: {
      typedRoutes: true,
      "reactCompiler": true
    }
  }
};

