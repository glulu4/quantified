import {View} from 'react-native';
import {ThemedText} from '@/components/ui/ThemedText';
import {SFSymbol} from 'react-native-sfsymbols';
import {useThemeColor} from '@/hooks/useThemeColor';

interface FavoriteCardProps {
    onPress: () => void;
}

export function FavoriteCard({onPress}: FavoriteCardProps) {

    const iconColor = useThemeColor({}, "blue");
    return (
        <View className='bg-secondaryFill-light dark:bg-secondaryFill-dark flex-1 flex-row items-center justify-between min-h-[70] min-w-[350] rounded-xl px-4'
        >
            <ThemedText labelType='secondary' type="subhead" >
                Add your favorite forms here
            </ThemedText>

            <SFSymbol
                name="plus.circle.fill"
                weight="semibold"
                scale="large"
                color={iconColor}
                size={16}
                resizeMode="center"
                multicolor={false}
                style={{width: 32, height: 32}}
            />

        </View >
    );
}


export default FavoriteCard;