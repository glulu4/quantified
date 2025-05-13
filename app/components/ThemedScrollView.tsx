import {RefreshControl, ScrollView, type ScrollViewProps} from 'react-native';
import {useThemeColor} from '@/hooks/useThemeColor';
import {Colors} from '@/constants/Colors';
import {useCallback, useState} from 'react';

export type ThemedScrollViewProps = ScrollViewProps & {
    lightColor?: string;
    darkColor?: string;
    onRefresh?: () => void; // Add the onRefresh prop
};

export function ThemedScrollView({
    style,
    lightColor = Colors.light.background,
    darkColor = Colors.dark.background,
    onRefresh,
    ...otherProps
}: ThemedScrollViewProps) {

    const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');
    const [refreshing, setRefreshing] = useState(false);
    const indicatorColor = useThemeColor({}, "text")
    const handleRefresh = useCallback(async () => {

        if (onRefresh) {
            setRefreshing(true);
            setTimeout(async () => {
                await onRefresh();
                setRefreshing(false);
            }, 2000);



        }

    }, []);


    return <ScrollView
        style={[{backgroundColor}, style]}
        {...otherProps}
        refreshControl={
            onRefresh ? (
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    tintColor={indicatorColor}
                />
            ) : undefined
        }
    />;
}
