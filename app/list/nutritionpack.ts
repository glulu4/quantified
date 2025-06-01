import {CoreInputType} from "@/types/core-input";
import {CoreUnitType} from "@/types/core-unit";
import {CoreMetric} from "@/types/coremetric";

export const coreNutritionMetrics: CoreMetric[] = [

    {
        id: "calorie_consumption",
        defaultTitle: "Calorie Consumption",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.KCAL],
        filters: [
            {tag: "Measurement Unit", subtag: "Calories"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "caffeine_consumption",
        defaultTitle: "Caffeine Consumption",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MG_L, CoreUnitType.CUPS, CoreUnitType.DRINKS],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Body System", subtag: "Heart"},
            {tag: "Measurement Unit", subtag: "Volume"},
            {tag: "Health Domain", subtag: "Behavioral"},

            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Energy Optimization"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "total_fat",
        defaultTitle: "Total Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Tracking Method", subtag: "Food lookup"},

        ]
    },
    {
        id: "saturated_fat",
        defaultTitle: "Saturated Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Tracking Method", subtag: "Food lookup"},

        ]
    },
    {
        id: "trans_fat",
        defaultTitle: "Trans Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Tracking Method", subtag: "Food lookup"},

        ]
    },
    {
        id: "polyunsaturated_fat",
        defaultTitle: "Polyunsaturated Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Tracking Method", subtag: "Food lookup"},


        ]
    },
    {
        id: "monounsaturated_fat",
        defaultTitle: "Monounsaturated Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},


        ]
    },




















    {
        id: "cholesterol_intake",
        defaultTitle: "Cholesterol Intake",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MILLIGRAM, CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "sodium_intake",
        defaultTitle: "Sodium Intake",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MILLIGRAM, CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"}
        ]
    },
    {
        id: "total_carbohydrates",
        defaultTitle: "Total Carbohydrates",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "dietary_fiber",
        defaultTitle: "Dietary Fiber",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "sugars",
        defaultTitle: "Sugars",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "added_sugars",
        defaultTitle: "Added Sugars",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "protein",
        defaultTitle: "Protein",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Body Composition"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Fitness & Performance"}
        ]
    },
    {
        id: "vitamin_a",
        defaultTitle: "Vitamin A",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.IU, CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Other"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "vitamin_c",
        defaultTitle: "Vitamin C",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Other"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "vitamin_d",
        defaultTitle: "Vitamin D",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.IU],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Measurement Unit", subtag: "Other"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Hormone Health"}
        ]
    },
    {
        id: "vitamin_e",
        defaultTitle: "Vitamin E",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.IU, CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Other"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },





    {
        id: "vitamin_k",
        defaultTitle: "Vitamin K",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.IU, CoreUnitType.MICROGRAM],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Other"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "thiamin_vitamin_b1",
        defaultTitle: "Thiamin (Vitamin B1)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "riboflavin_vitamin_b2",
        defaultTitle: "Riboflavin (Vitamin B2)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "niacin_vitamin_b3",
        defaultTitle: "Niacin (Vitamin B3)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "vitamin_b6",
        defaultTitle: "Vitamin B6",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "folate_vitamin_b9",
        defaultTitle: "Folate (Vitamin B9)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MICROGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
        ]
    },
    {
        id: "vitamin_b12",
        defaultTitle: "Vitamin B12",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MICROGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},

        ]
    },
    {
        id: "pantothenic_acid_vitamin_b5",
        defaultTitle: "Pantothenic Acid (Vitamin B5)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
        ]
    },
    {
        id: "biotin_vitamin_b7",
        defaultTitle: "Biotin (Vitamin B7)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MICROGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "calcium",
        defaultTitle: "Calcium",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
        ]
    },
    {
        id: "iron",
        defaultTitle: "Iron",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },



























    {
        id: "magnesium",
        defaultTitle: "Magnesium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG, CoreUnitType.MICROGRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "phosphorus",
        defaultTitle: "Phosphorus",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "potassium",
        defaultTitle: "Potassium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Longevity"}
        ]
    },
    {
        id: "zinc",
        defaultTitle: "Zinc",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "selenium",
        defaultTitle: "Selenium",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MICROGRAM],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "copper",
        defaultTitle: "Copper",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "manganese",
        defaultTitle: "Manganese",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "fluoride",
        defaultTitle: "Fluoride",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MG],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
        ]
    },
    {
        id: "omega_3_fatty_acids",
        defaultTitle: "Omega-3 Fatty Acids",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
        ]
    },
    {
        id: "omega_6_fatty_acids",
        defaultTitle: "Omega-6 Fatty Acids",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "choline",
        defaultTitle: "Choline",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLIGRAM],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Trending Topics", subtag: "Mental Health"}
        ]
    },
    {
        id: "iodine",
        defaultTitle: "Iodine",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MICROGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Specialty", subtag: "Endocrinology"},

            {tag: "Tracking Method", subtag: "Food lookup"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"}
        ]
    }



]