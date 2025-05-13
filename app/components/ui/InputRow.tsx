// import ThemedView from '@/components/ThemedView';
// import clsx from 'clsx';
// import React from 'react'
// import {View} from 'react-native';

// interface InputRowProps {
//     backGroundLevel: 'bgPrimary' | 'bgSecondary' | 'bgTertiary' | 'bgQuaternary';
//     children: React.ReactNode;
//     className?: string;
// }

// /**
//  * A functional component that renders a row with customizable background level and additional styling.
//  * It wraps its children inside a themed view with justify between layout.
//  *
//  * @param {InputRowProps} props - The properties for the InputRow component.
//  * @param {React.ReactNode} props.children - The content to be displayed inside the row.
//  * @param {number} props.backGroundLevel - The background level to be applied to the themed view.
//  * @param {string} [props.className] - Additional CSS classes to customize the styling of the outer container.
//  * 
//  * @returns {JSX.Element} The rendered InputRow component.
//  */
// export default function InputRow({children, backGroundLevel, className}: InputRowProps) {
//     return (
//         <View className={clsx('flex flex-1 flex-col', className)}>
//             <ThemedView backGroundLevel={backGroundLevel}
//                 className='px-6 min-h-[70px] flex flex-row items-center justify-between rounded-xl overflow-hidden'
//             >
//                 {children}
//             </ThemedView>

//         </View>
//     )
// }



import ThemedView from '@/components/ThemedView';
import clsx from 'clsx';
import React from 'react';
import {View} from 'react-native';

interface InputRowProps {
    backGroundLevel: 'bgPrimary' | 'bgSecondary' | 'bgTertiary' | 'bgQuaternary';
    children: React.ReactNode;
    className?: string;
    height?: number; // New prop to set the height (in pixels)
}

/**
 * A functional component that renders a row with customizable background level and additional styling.
 * It wraps its children inside a themed view with justify-between layout.
 *
 * @param {InputRowProps} props - The properties for the InputRow component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the row.
 * @param {string} props.backGroundLevel - The background level to be applied to the themed view.
 * @param {string} [props.className] - Additional CSS classes to customize the styling of the outer container.
 * @param {number} [props.height=70] - The height for the ThemedView, defaulting to 70px.
 *
 * @returns {JSX.Element} The rendered InputRow component.
 */
export default function InputRow({
    children,
    backGroundLevel,
    className,
    height = 70,
}: InputRowProps) {
    return (
        <View className={clsx('flex flex-1 flex-col', className)}>
            <ThemedView
                backGroundLevel={backGroundLevel}
                // Pass the height directly as a style override
                style={{height}}
                className="px-6 flex flex-row items-center justify-between rounded-xl overflow-hidden"
            >
                {children}
            </ThemedView>
        </View>
    );
}
