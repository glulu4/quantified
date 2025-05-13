// SwipeToDelete.tsx

import React, {useRef, ReactNode} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
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
        // close row, then fire delete
        swipeable.current?.close();
        onDelete();
    };

    const renderRightActions = () => (
        <View className='bg-red-light dark:bg-red-dark flex items-center justify-center' style={[{width: actionWidth}, actionContainerStyle]}>
            <TouchableOpacity onPress={handleDelete} style={styles.touchable}>
                <SFSymbol name="trash" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );

    return (
        <Swipeable
            ref={swipeable}
            friction={2}
            rightThreshold={actionWidth * 0.5}
            renderRightActions={renderRightActions}
        // no onSwipeableOpen here!
        >
            <View style={styles.row}>{children}</View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    row: {
        width: '100%', // ensure it covers full width
    },

    touchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
