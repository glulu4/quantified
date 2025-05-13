// import {View} from 'react-native'
// import React from 'react'
// import {ThemedText} from '@/components/ui/ThemedText'
// import {Link} from 'expo-router';
// import ThemedView from '@/components/ThemedView';

// export default function Landing() {


//     return (
//         <ThemedView className='flex-1 justify-center items-center'>




//             <View className="w-full mb-12 px-12 ">
//                 <Link href='/SignIn'>
//                     <View className="bg-blue-light dark:bg-blue-dark py-4 rounded-xl px-10">
//                         <ThemedText type="body" className="text-white text-center text-lg font-semibold">
//                             Sign in
//                         </ThemedText>
//                     </View>

//                 </Link>

//                 <Link href='/CreateAccount'>
//                     <View className="mt-3 bg-bgSecondary-light dark:bg-bgSecondary-dark  py-4 rounded-lg">
//                         <ThemedText type="body" className="text-blue-light dark:text-blue-dark text-center text-lg font-semibold">
//                             Create an Account
//                         </ThemedText>

//                     </View>
//                 </Link>
//             </View>


//         </ThemedView>
//     )
// }


import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {useRouter} from 'expo-router';
import ThemedView from '@/components/ThemedView';
import {PrimaryButton} from '@/components/ui/PrimaryButton';
import {useThemeColor} from '@/hooks/useThemeColor';
import {ThemedText} from '@/components/ui/ThemedText';
// import {StatusBar} from 'expo-status-bar';

export default function Landing() {
    const router = useRouter();
    const blue = useThemeColor({}, 'blue');


    return (
        <View className="flex-1 flex bg-bgPrimary-light dark:bg-bgPrimary-dark justify-center items-center ">


            <View className='flex-[0.45] w-full items-center justify-end bg-systemGray6-light dark:bg-systemGray6-dark'>


                <Text className="text-[48px] font-bold text-blue-light dark:text-blue-dark mb-24">
                    Quantified.
                </Text>



            </View>

            <View className='flex-[0.55] w-full items-center justify-center bg-bgPrimary-light dark:bg-bgPrimary-dark'>
                <View className="w-4/6 gap-4">
                    <PrimaryButton backgroundColor={blue} title="Sign In" onPress={() => router.push('/SignIn')} outline />
                    <PrimaryButton backgroundColor={blue} title="Create Account" onPress={() => router.push('/CreateAccount')} />
                </View>


            </View>
            {/* Logo */}
        </View>
    );
}
