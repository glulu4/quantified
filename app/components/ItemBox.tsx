import React from 'react';
import {TouchableOpacity, View, StyleSheet, Dimensions, useColorScheme} from 'react-native';
import {ThemedText} from '@/components/ui/ThemedText';
import {AntDesign} from '@expo/vector-icons';
import {Colors} from '@/constants/Colors';

interface ItemBoxProps {
    title: string;
    onPress: () => void;
    rowButtonColor?: string;
    borderColor?: string;
}

const {width} = Dimensions.get('window');
const ItemBox: React.FC<ItemBoxProps> = ({title, onPress, rowButtonColor, borderColor = 'gray'}) => {

    rowButtonColor = useColorScheme() === "light" ? Colors.light.graphBackground : Colors.dark.graphBackground

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.rowButton, width: width - 60, backgroundColor: rowButtonColor, borderColor}}>
                <ThemedText ellipsizeMode="tail" numberOfLines={1} style={styles.graphTitle}>
                    {title}
                </ThemedText>
                <AntDesign name="right" size={20} style={styles.icon} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    rowButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    graphTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    icon: {
        marginLeft: 10,
    },
});

export default ItemBox;
