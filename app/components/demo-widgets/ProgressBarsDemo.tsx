import {View, Text} from 'react-native'
import React from 'react'
import ProgressBar from '../progress-widgets/ProgressBar'

export default function ProgressBarsDemo() {
    return (
        // <View className={
        //     clsx('rounded-xl  p-5 justify-center items-center',

        //         bgLevel === 'bgPrimary' ? 'bg-bgPrimary-light dark:bg-bgPrimary-dark' : "",
        //         bgLevel === 'bgSecondary' ? 'bg-bgSecondary-light dark:bg-bgSecondary-dark' : "",
        //         bgLevel === 'bgTertiary' ? 'bg-bgTertiary-light dark:bg-bgTertiary-dark' : "",
        //     )}>
        <>
            <ProgressBar
                percentProgress={0.75}
                padding={0.75}

            />
            <ProgressBar
                percentProgress={0.35}
                padding={0.75}

            />
            <ProgressBar
                percentProgress={0.85}
                padding={0.75}

            />
        </>




    )
}