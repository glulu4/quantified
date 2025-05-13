import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useColorScheme} from '@/hooks/useColorScheme';
import {Dispatch, SetStateAction} from 'react';
import {useColors} from '@/hooks/useColors';
import {useThemeColor} from '@/hooks/useThemeColor';


type SearchProps = {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;

}

const Search = ({searchValue, setSearchValue}: SearchProps) => {
    const colorTheme = useColorScheme() === "light" ? "light" : "dark";
    const colors = useColors();

    const iconColors = useThemeColor({}, "systemGray2");
    const textColor = useThemeColor({}, "labelPrimary");

    return (
        <View >
            <SearchBar
                searchIcon={{name: 'search', type: 'font-awesome', size: 15, color: iconColors}}
                clearIcon={{name: 'close', size: 20, color: iconColors}}
                placeholder="Search"
                platform="ios"
                loadingProps={{}}
                onChangeText={setSearchValue}
                onClear={() => setSearchValue('')}
                onFocus={() => {}}
                onBlur={() => {}}
                showLoading={false}
                round={true}
                lightTheme={colorTheme === "light"}
                darkTheme={colorTheme === "dark"}
                value={searchValue}
                autoCorrect={true}
                inputStyle={{color: textColor}}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={[styles.searchInputContainer, {backgroundColor: colors.fill.tertiary}]}

            />

        </View>
    );
}

export default Search;

const styles = StyleSheet.create({

    searchBarContainer: {
        backgroundColor: 'transparent',
        padding: 0, // Remove padding
    },
    searchInputContainer: {
        height: 36, // Reduce height for iOS-style look
        borderRadius: 10, // Rounded corners

    },
});