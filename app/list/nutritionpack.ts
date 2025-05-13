import {CoreInputType, CoreMetric, CoreUnitType, Goal, HealthCategory, Interest, TopLevelFilter, Wellness} from "../types/core-metric";

export const coreNutritionMetrics: CoreMetric[] = [

    {
        id: "caffeine_consumption",
        defaultTitle: "Caffeine Consumption",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Hydration],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
        },
    },
    {
        id: "calories",
        defaultTitle: "Calories",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.KCAL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "total_fat",
        defaultTitle: "Total Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "saturated_fat",
        defaultTitle: "Saturated Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "trans_fat",
        defaultTitle: "Trans Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "polyunsaturated_fat",
        defaultTitle: "Polyunsaturated Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "monounsaturated_fat",
        defaultTitle: "Monounsaturated Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "cholesterol",
        defaultTitle: "Cholesterol",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "sodium",
        defaultTitle: "Sodium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "total_carbohydrates",
        defaultTitle: "Total Carbohydrates",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "dietary_fiber",
        defaultTitle: "Dietary Fiber",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },

    {
        id: "sugars",
        defaultTitle: "Sugars",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "added_sugars",
        defaultTitle: "Added Sugars",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "protein",
        defaultTitle: "Protein",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_a",
        defaultTitle: "Vitamin A",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in International Units
        unitTypes: [CoreUnitType.IU, CoreUnitType.MICROGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_c",
        defaultTitle: "Vitamin C",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Often measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_d",
        defaultTitle: "Vitamin D",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in IU
        unitTypes: [CoreUnitType.IU, CoreUnitType.MICROGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_e",
        defaultTitle: "Vitamin E",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in IU
        unitTypes: [CoreUnitType.IU, CoreUnitType.MICROGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_k",
        defaultTitle: "Vitamin K",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in micrograms
        unitTypes: [CoreUnitType.MICROGRAM, CoreUnitType.IU],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "thiamin_vitamin_b1",
        defaultTitle: "Thiamin (Vitamin B1)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "riboflavin_vitamin_b2",
        defaultTitle: "Riboflavin (Vitamin B2)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },

    {
        id: "niacin_vitamin_b3",
        defaultTitle: "Niacin (Vitamin B3)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_b6",
        defaultTitle: "Vitamin B6",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "folate_vitamin_b9",
        defaultTitle: "Folate (Vitamin B9)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in micrograms
        unitTypes: [CoreUnitType.MICROGRAM, CoreUnitType.IU],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_b12",
        defaultTitle: "Vitamin B12",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in micrograms
        unitTypes: [CoreUnitType.MICROGRAM, CoreUnitType.IU],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "pantothenic_acid_vitamin_b5",
        defaultTitle: "Pantothenic Acid (Vitamin B5)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "biotin_vitamin_b7",
        defaultTitle: "Biotin (Vitamin B7)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in micrograms
        unitTypes: [CoreUnitType.MICROGRAM, CoreUnitType.IU],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "calcium",
        defaultTitle: "Calcium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "iron",
        defaultTitle: "Iron",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "magnesium",
        defaultTitle: "Magnesium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "phosphorus",
        defaultTitle: "Phosphorus",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM,],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },

    {
        id: "potassium",
        defaultTitle: "Potassium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "zinc",
        defaultTitle: "Zinc",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "selenium",
        defaultTitle: "Selenium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in micrograms
        unitTypes: [CoreUnitType.MICROGRAM, CoreUnitType.IU],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "copper",
        defaultTitle: "Copper",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "manganese",
        defaultTitle: "Manganese",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "fluoride",
        defaultTitle: "Fluoride",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "omega_3_fatty_acids",
        defaultTitle: "Omega-3 Fatty Acids",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in grams
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "omega_6_fatty_acids",
        defaultTitle: "Omega-6 Fatty Acids",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in grams
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "choline",
        defaultTitle: "Choline",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in milligrams
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "iodine",
        defaultTitle: "Iodine",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Typically measured in micrograms
        unitTypes: [CoreUnitType.MICROGRAM, CoreUnitType.IU],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
]