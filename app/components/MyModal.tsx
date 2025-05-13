// import React from 'react';
// import {
//     View,
//     StyleSheet,
//     Modal,
// } from 'react-native';
// import {ThemedView} from './ThemedView';
// import {Colors} from '@/constants/Colors';
// import OutsidePressHandler from 'react-native-outside-press';
// interface MyModalProps {
//     isVisible: boolean;
//     onClose: () => void;
//     content: React.ReactNode;
// }

// export default function MyModal({isVisible, onClose, content}: MyModalProps) {

//     return (


//         <Modal
//             animationType="fade"
//             transparent={true}
//             visible={isVisible}
//             onRequestClose={onClose}

//         >
//             <OutsidePressHandler onOutsidePress={onClose} style={[styles.modalView]} >
//                 {content}
//             </OutsidePressHandler>
//         </Modal>


//     );
// }

// const styles = StyleSheet.create({


//     modalView: {
//         flex: 1,
//         maxHeight: 400,
//         width: 'auto',
//         backgroundColor: "white",
//         borderRadius: 20,
//         padding: 35,
//         margin: 50,


//     }
// });

import React from 'react';
import {
    View,
    StyleSheet,
    Modal,
    ScrollView,
} from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';
import {ThemedView} from './ThemedView';
import {useThemeColor} from '@/hooks/useThemeColor';
import {ThemedScrollView} from './ThemedScrollView';

interface MyModalProps {
    isVisible: boolean;
    onClose: () => void;
    content?: React.ReactNode;
    children?: React.ReactNode;
}

export default function MyModal({isVisible, onClose, content, children}: MyModalProps) {

    const modalBackgroundColor = useThemeColor({}, "modalBackgroud")
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <ThemedView style={styles.centeredContainer}>
                <OutsidePressHandler onOutsidePress={onClose} style={[styles.modalView, {backgroundColor: modalBackgroundColor}]}>
                    <ScrollView centerContent>
                        {content}
                        {children}
                    </ScrollView>
                </OutsidePressHandler>
            </ThemedView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adds a semi-transparent background overlay
    },
    modalView: {
        maxHeight: 400,
        width: '80%', // Adjusts width to 80% of screen for responsiveness
        // backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
