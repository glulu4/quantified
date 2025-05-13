import {View, Text, Platform} from 'react-native';
import React, {useMemo} from 'react';
import {Canvas, Group, matchFont, Path, Skia, Text as TextSk, useFont, FontWeight, } from '@shopify/react-native-skia';
import {useThemeColor} from '@/hooks/useThemeColor';
import {useFonts} from 'expo-font';

import {listFontFamilies} from "@shopify/react-native-skia";

interface OrbitProgressProps {
    size: number;
    progress: number;
    text?: string;
    color?: string;
    padding: number;
}

const OrbitProgress = ({
    size = 100,
    progress = 0.75,
    color = useThemeColor({}, 'pink'),
    text = '',
    padding = 1,
}: OrbitProgressProps) => {
    let strokeWidth = 20;

    // Applying Padding
    size *= padding;
    strokeWidth *= padding;

    // Making Path
    const radius = size / 2 - strokeWidth / 2;
    const path = useMemo(() => {
        const p = Skia.Path.Make();
        p.addCircle(size / 2, size / 2, radius);
        return p;
    }, [size, radius]);


    const fontFamily = Platform.select({ios: "Arial Rounded MT Bold", default: "serif"});
    const fontStyle = {
        fontFamily,
        fontSize: 20,
        fontWeight: FontWeight.Medium
    };
    const font = matchFont(fontStyle);
    // Loading font and setting text position
    // let fontMgr = useFonts(require("@/assets/fonts/SpaceMono-Regular.ttf"), 24);
    // if (!fontMgr)
    //     return null; // Wait for font to load

    // const fontStyle = {
    //     fontFamily: "Roboto",
    //     fontWeight: "bold",
    //     fontSize: 16
    // } as const;
    // // let font = matchFont(fontStyle, fontMgr);

    const orbitBackground = useThemeColor({}, "tertiaryFill"); // Background for the full bar

    const textWidth = font.measureText(text).width;
    const x = size / 2 - textWidth / 2; // Center horizontally
    const y = size / 2 + font.getSize() / 2 + 2; // Center vertically, slight tweak for baseline

    return (
        <View className=''>
            <Canvas style={{width: size, height: size, }}>
                {/* Background orbit */}
                <Path
                    path={path}
                    style="stroke"
                    strokeWidth={strokeWidth}
                    color={orbitBackground}
                    end={1}
                />
                {/* Progress orbit */}
                <TextSk
                    x={x}
                    y={y}
                    text={text}
                    font={font}

                    color="#333"
                />
                {/* Rotate the progress arc to start at 12 o'clock */}
                <Group
                    origin={{x: size / 2, y: size / 2}}
                    transform={[{rotate: -Math.PI / 2}]} // -90 degrees rotation
                >
                    <Path
                        path={path}
                        style="stroke"
                        strokeWidth={strokeWidth}
                        color={color}
                        end={progress}
                        strokeCap="round"
                    />
                </Group>
            </Canvas>
        </View>

    );
};

export default OrbitProgress;