import React, {useState} from "react";
import {ScrollView, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {SFSymbol} from "react-native-sfsymbols";
import {spacing} from '@/constants/Spacing';
import PillButton from "@/components/PillButton";
import iconSizes from "@/constants/iconSizes";
import {useThemeColor} from "@/hooks/useThemeColor";
import {SubTag} from "@/types/tags";

interface FilterBarProps {
    selectedSubTags: SubTag[];
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleSubTag: (subtag: SubTag) => void;
    isSubTagSelected: (subtag: SubTag) => boolean;
    defaultSubTags: SubTag[];
}
const FilterBar = ({isSubTagSelected, setDrawerOpen, toggleSubTag, selectedSubTags, defaultSubTags}: FilterBarProps) => {


    const iconColor = useThemeColor({}, "labelPrimary");


    return (
        <View className="flex flex-row p-6">
            <TouchableOpacity onPress={() => setDrawerOpen(true)}>
                <SFSymbol
                    name="slider.horizontal.3"
                    weight="regular"
                    scale="large"
                    color={iconColor}
                    size={iconSizes.medium}
                    resizeMode="center"
                    multicolor={false}
                    style={{width: 32, height: 32}}
                />
            </TouchableOpacity>


            <View className="w-[1] h-full mx-8 bg-systemGray4-light dark:bg-systemGray4-dark" />

            {/* Scrollable Pills */}
            <ScrollView
                className="flex flex-row px-3"
                horizontal
            >
                {defaultSubTags.map((subtag, index) => (
                    <PillButton
                        key={index}
                        text={subtag}
                        selected={isSubTagSelected(subtag)}
                        onPress={() => toggleSubTag(subtag)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};


export default FilterBar;
