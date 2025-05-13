import {useMemo} from 'react';
import {useThemeColor} from '@/hooks/useThemeColor';

export const useColors = () => {
    const red = useThemeColor({}, "red");
    const green = useThemeColor({}, "green");
    const yellow = useThemeColor({}, "yellow");
    const blue = useThemeColor({}, "blue");
    const orange = useThemeColor({}, "orange");
    const mint = useThemeColor({}, "mint");
    const teal = useThemeColor({}, "teal");
    const cyan = useThemeColor({}, "cyan");
    const indigo = useThemeColor({}, "indigo");
    const purple = useThemeColor({}, "purple");
    const pink = useThemeColor({}, "pink");
    const brown = useThemeColor({}, "brown");
    const black = useThemeColor({}, "black");

    const systemGray = useThemeColor({}, "systemGray");
    const systemGray2 = useThemeColor({}, "systemGray2");
    const systemGray3 = useThemeColor({}, "systemGray3");
    const systemGray4 = useThemeColor({}, "systemGray4");
    const systemGray5 = useThemeColor({}, "systemGray5");
    const systemGray6 = useThemeColor({}, "systemGray6");

    const bgPrimary = useThemeColor({}, "bgPrimary");
    const bgSecondary = useThemeColor({}, "bgSecondary");
    const bgTertiary = useThemeColor({}, "bgTertiary");

    const labelPrimary = useThemeColor({}, "labelPrimary");
    const labelSecondary = useThemeColor({}, "labelSecondary");
    const labelTertiary = useThemeColor({}, "labelTertiary");
    const labelQuaternary = useThemeColor({}, "labelQuaternary");


    const separatorOpaque = useThemeColor({}, "seperatorOpaque");
    const separator = useThemeColor({}, "seperator");

    const primaryFill = useThemeColor({}, "primaryFill");
    const secondaryFill = useThemeColor({}, "secondaryFill");
    const tertiaryFill = useThemeColor({}, "tertiaryFill");
    const quaternaryFill = useThemeColor({}, "quaternaryFill");

    return useMemo(() => {
        /** Fetch all theme colors first (Ensures consistent hook order) */


        return {
            /** 🌟 GENERAL COLORS */
            general: {red, green, yellow, blue, orange, mint, teal, cyan, indigo, purple, pink, brown, black},

            fill: {primary: primaryFill, secondary: secondaryFill, tertiary: tertiaryFill, quaternary: quaternaryFill, },

            /** 🎨 SYSTEM GRAYS */
            systemGrays: {systemGray, systemGray2, systemGray3, systemGray4, systemGray5, systemGray6},

            /** 🎨 BASE BACKGROUNDS */
            baseBackgrounds: {primary: bgPrimary, secondary: bgSecondary, tertiary: bgTertiary},

            /** 🎨 GROUPED BACKGROUNDS */

            /** 📝 TEXT COLORS */
            text: {primary: labelPrimary, secondary: labelSecondary, tertiary: labelTertiary, quaternary: labelQuaternary},

            /** 🎨 ICONS */

            /** 🖌 BORDER COLORS */
            border: {default: separatorOpaque, separator},



        };
    }, []);
};