import Toast from "react-native-toast-message";

export function errorToast(msg: string) {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: msg,
    position: 'top',
    visibilityTime: 3000,
    swipeable: true,
  });
}

export function successToast(msg: string) {
  Toast.show({
    type: 'success',
    text1: 'Success',
    text2: msg,
    position: 'top',
    visibilityTime: 3000,
    swipeable: true,
  });
}