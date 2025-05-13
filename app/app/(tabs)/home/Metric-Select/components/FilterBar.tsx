import React, {useState} from "react";
import {ScrollView, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {SFSymbol} from "react-native-sfsymbols";
import {TopLevelFilter, Interest, BodyPart, Wellness, HealthCategory, Goal} from "@/types/core-metric";
import {spacing} from '@/constants/Spacing';
import PillButton from "@/components/PillButton";
import iconSizes from "@/constants/iconSizes";
import {useThemeColor} from "@/hooks/useThemeColor";

interface FilterBarProps {
    selectedFilters: (Interest | BodyPart | HealthCategory | Goal | Wellness)[];
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleFilter: (category: Interest | BodyPart | Wellness | HealthCategory | Goal) => void;
    isFilterSelected: (category: Interest | BodyPart | Wellness | HealthCategory | Goal) => boolean;
    defaultFilters: (Interest | BodyPart | Wellness | HealthCategory | Goal)[];
}
const FilterBar = ({isFilterSelected, setDrawerOpen, toggleFilter, selectedFilters, defaultFilters}: FilterBarProps) => {


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
                {defaultFilters.map((category, index) => (
                    <PillButton
                        key={index}
                        text={category}
                        selected={isFilterSelected(category)}
                        onPress={() => toggleFilter(category)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};


export default FilterBar;
