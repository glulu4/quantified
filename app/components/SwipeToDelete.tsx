// // SwipeToDelete.tsx

// import React, {useRef, ReactNode} from 'react';
// import {
//     StyleSheet,
//     View,
//     TouchableOpacity,
//     ViewStyle,
// } from 'react-native';
// // import {Swipeable} from 'react-native-gesture-handler';
// import Swipeable from "react-native-gesture-handler/Swipeable";

// import {Feather} from '@expo/vector-icons';
// import {SFSymbol} from 'react-native-sfsymbols';

// interface SwipeToDeleteProps {
//     onDelete: () => void;
//     children: ReactNode;
//     actionWidth?: number;
//     actionContainerStyle?: ViewStyle;
// }

// export function SwipeToDelete({
//     onDelete,
//     children,
//     actionWidth = 80,
//     actionContainerStyle,
// }: SwipeToDeleteProps) {
//     const swipeable = useRef<Swipeable>(null);

//     const handleDelete = () => {
//         // close row, then fire delete
//         swipeable.current?.close();
//         onDelete();
//     };

//     const renderRightActions = () => (
//         <TouchableOpacity onPress={handleDelete} className='bg-red-light dark:bg-red-dark flex items-center justify-center' style={[{width: actionWidth}, actionContainerStyle]}>
//             <View style={styles.touchable}>
//                 <SFSymbol name="trash" size={20} color="#fff" />
//             </View>
//         </TouchableOpacity>
//     );

//     return (
//         <View style={{overflow: 'hidden'}}>
//             <Swipeable
//                 ref={swipeable}
//                 friction={2}
//                 rightThreshold={actionWidth * 0.5}
//                 renderRightActions={renderRightActions}

//             >
//                 {/* <View style={styles.row}> */}
//                 {children}
//                 {/* </View> */}
//             </Swipeable>
//         </View>

//     );
// }

// const styles = StyleSheet.create({
//     row: {
//         width: '100%', // ensure it covers full width
//     },

//     touchable: {
//         // flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
import React, {useRef, ReactNode} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ViewStyle,
    Animated,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {SFSymbol} from 'react-native-sfsymbols';

interface SwipeToDeleteProps {
    onDelete: () => void;
    children: ReactNode;
    actionWidth?: number;
    actionContainerStyle?: ViewStyle;
}

export function SwipeToDelete({
    onDelete,
    children,
    actionWidth = 80,
    actionContainerStyle,
}: SwipeToDeleteProps) {
    const swipeable = useRef<Swipeable>(null);

    const handleDelete = () => {
        swipeable.current?.close();
        onDelete();
    };

    const renderRightActions = (
        progress: Animated.AnimatedInterpolation<number>,
        _dragX: Animated.AnimatedInterpolation<number>,
    ) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [actionWidth, 0],
        });

        return (
            <Animated.View style={[{transform: [{translateX: trans}], width: actionWidth}]}>
                <TouchableOpacity onPress={handleDelete} style={[styles.rightAction, actionContainerStyle]}>
                    <SFSymbol name="trash" size={20} color="#fff" />
                </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <View style={{overflow: 'hidden', width: '100%'}}>
            <Swipeable
                ref={swipeable}
                friction={2}
                rightThreshold={actionWidth * 0.5}
                renderRightActions={renderRightActions}
            >
                <Animated.View style={styles.row}>
                    {children}
                </Animated.View>
            </Swipeable>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
    },
    rightAction: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
