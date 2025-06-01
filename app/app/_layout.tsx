import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {useColorScheme} from '@/hooks/useColorScheme';
import {AuthProvider} from './context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-native-paper';
import {EventProvider} from 'react-native-outside-press';
import Toast, {BaseToast} from 'react-native-toast-message';
import {SafeAreaProvider} from "react-native-safe-area-context"
import {useThemeColor} from '@/hooks/useThemeColor';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
// const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();


// Sentry.init({
//   dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
//   debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
//   // routingInstrumentation: routingInstrumentation,
//   // enableNativeFramesTracking: !isRunningInExpoGo(),
// });


function RootLayout() {




  const colorScheme = useColorScheme();
  // const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    // if (loaded) {
    //   SplashScreen.hideAsync();
    // }

    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 4000); // Keep the splash screen visible for 5000ms (5 seconds)

  }, [loaded]);


  if (!loaded) {
    return null;
  }


  const bgColor = useThemeColor({}, "bgSecondary");
  const textColor1 = useThemeColor({}, "labelPrimary");
  const textColor2 = useThemeColor({}, "labelSecondary");
  const green = useThemeColor({}, "green");
  const red = useThemeColor({}, "red");

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{backgroundColor: bgColor, borderLeftColor: green}}
        text1Style={{
          color: textColor1,
          fontSize: 14,
        }}
        text2Style={{
          color: textColor2,
          fontSize: 12,
        }}
      />
    ),
    error: (props: any) => (
      <BaseToast
        {...props}
        style={{backgroundColor: bgColor, borderLeftColor: red}}
        text1Style={{
          color: textColor1,
          fontSize: 14,
        }}
        text2Style={{
          color: textColor2,
          fontSize: 12,
        }}
      />
    ),
  };

  return (

    <GestureHandlerRootView>
      <SafeAreaProvider>
        <EventProvider>

          <AuthProvider>
            <Provider>
              {/* To be removed - ui kitten */}
              <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack >
                  <Stack.Screen name="(tabs)" options={{headerShown: false}} />
                  <Stack.Screen name="(sign-on)" options={{headerShown: false}} />
                  <Stack.Screen name="+not-found" />
                </Stack>
                <Toast
                  config={toastConfig}
                />
              </ThemeProvider>
            </Provider>
          </AuthProvider>
        </EventProvider>
      </SafeAreaProvider>


    </GestureHandlerRootView>


  );
}

export default RootLayout;
// export default Sentry.wrap(RootLayout);