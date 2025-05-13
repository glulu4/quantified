// import {View, Text, StyleSheet} from 'react-native'
// import React from 'react'
// import {ThemedText} from '@/components/ui/ThemedText'
// import {spacing} from '@/constants/Spacing';
// import {SFSymbol} from 'react-native-sfsymbols'
// import {useThemeColor} from '@/hooks/useThemeColor'
// import ThemedView from '@/components/ThemedView'
// import InputRow from '@/components/ui/InputRow';

// interface SelectorProps {

//     value: string;
//     labelType?: "secondary" | "primary" | "tertiary" | "quaternary"
//     bgLevel?: 'bgPrimary' | 'bgSecondary' | 'bgTertiary' | 'bgQuaternary';
// }

// const Selector = ({value, labelType, bgLevel = "bgTertiary"}: SelectorProps) => {
//     const arrowColor = useThemeColor({}, "blue");
//     return (
//         <InputRow backGroundLevel={bgLevel}>
//             <ThemedText type='body' labelType={labelType ? labelType : 'secondary'} >{value}</ThemedText>

//             <View >
//                 <SFSymbol
//                     name="chevron.right"
//                     size={16}
//                     weight="semibold"
//                     color={arrowColor}
//                 />
//             </View>
//         </InputRow>
//     )
// }
// export default Selector;

import {View} from 'react-native';
import React from 'react';
import {ThemedText} from '@/components/ui/ThemedText';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';
import InputRow from '@/components/ui/InputRow';

interface SelectorProps {
    value: string;
    labelType?: "secondary" | "primary" | "tertiary" | "quaternary";
    bgLevel?: 'bgPrimary' | 'bgSecondary' | 'bgTertiary' | 'bgQuaternary';
    height?: number; // New optional prop for height
}

const Selector = ({value, labelType, bgLevel = "bgTertiary", height = 70}: SelectorProps) => {
    const arrowColor = useThemeColor({}, "blue");
    return (
        <InputRow backGroundLevel={bgLevel} height={height}>
            <ThemedText type="body" labelType={labelType ? labelType : "secondary"}>
                {value}
            </ThemedText>
            <View>
                <SFSymbol
                    name="chevron.right"
                    size={16}
                    weight="semibold"
                    color={arrowColor}
                />
            </View>
        </InputRow>
    );
}

export default Selector;
