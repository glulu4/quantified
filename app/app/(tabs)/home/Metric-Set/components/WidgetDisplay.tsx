import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Widget} from '@/types/formdefinition'
import {ThemedText} from '@/components/ui/ThemedText';
import {renderWidget} from '../util/widget-util';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';

interface WidgetDisplayProps {
    widget: Widget;
    removeWidget: (widgetId: string) => void;
}

export default function WidgetDisplay({widget, removeWidget}: WidgetDisplayProps) {

    const red = useThemeColor({}, "red");
    return (
        <View className='flex flex-col flex-1'>

            <View className='flex flex-1 flex-row items-center justify-between mb-3 '>
                <ThemedText labelType='primary' type='title3' className=' ml-2' emphasized>
                    {widget.title}
                </ThemedText>


                <TouchableOpacity
                    onPress={() => removeWidget(widget.id)}
                    className='pr-8'
                    hitSlop={10}
                >
                    <SFSymbol name="minus.circle" size={20} color={red} />

                </TouchableOpacity>
            </View>


            {renderWidget(widget.widgetType, "main-screen", false)}

        </View >
    )
}