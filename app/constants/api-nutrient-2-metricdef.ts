// Mapping from USDA nutrient IDs to core metric IDs
/**
 * Mapping from USDA nutrient IDs to core metric IDs
 */
export const usdaNutrientToMetricMap: Record<number, string> = {
    // Energy
    1008: "calories", // Energy (kcal)

    // Macronutrients
    1003: "protein", // Protein
    1004: "total_fat", // Total lipid (fat)
    1005: "total_carbohydrates", // Carbohydrate, by difference
    1079: "dietary_fiber", // Fiber, total dietary
    2000: "sugars", // Total Sugars
    1235: "added_sugars",

    // Fats breakdown
    1258: "saturated_fat", // Fatty acids, total saturated
    1257: "trans_fat", // Fatty acids, total trans
    1292: "monounsaturated_fat", // Fatty acids, total monounsaturated
    1293: "polyunsaturated_fat", // Fatty acids, total polyunsaturated
    1253: "cholesterol", // Cholesterol

    // Omega fatty acids
    1270: "omega_3_fatty_acids", // PUFA 18:3 (Alpha-linolenic acid/ALA, primary plant-based omega-3)
    1278: "omega_3_fatty_acids", // PUFA 20:5 n-3 (EPA)
    1272: "omega_3_fatty_acids", // PUFA 22:6 n-3 (DHA)
    1269: "omega_6_fatty_acids", // PUFA 18:2 (Linoleic acid, primary omega-6)

    // Minerals
    1087: "calcium", // Calcium, Ca
    1098: "copper", // Copper, Cu
    1099: "fluoride", // Fluoride, F
    1089: "iron", // Iron, Fe
    1090: "magnesium", // Magnesium, Mg
    1101: "manganese", // Manganese, Mn
    1091: "phosphorus", // Phosphorus, P
    1092: "potassium", // Potassium, K
    1103: "selenium", // Selenium, Se
    1093: "sodium", // Sodium, Na
    1095: "zinc", // Zinc, Zn
    1100: "iodine", // Iodine, I

    // Vitamins
    1106: "vitamin_a", // Vitamin A, RAE
    1162: "vitamin_c", // Vitamin C, total ascorbic acid
    1114: "vitamin_d", // Vitamin D (D2 + D3)
    1109: "vitamin_e", // Vitamin E (alpha-tocopherol)
    1185: "vitamin_k", // Vitamin K (phylloquinone)

    // B Vitamins
    1165: "thiamin_vitamin_b1", // Thiamin
    1166: "riboflavin_vitamin_b2", // Riboflavin
    1167: "niacin_vitamin_b3", // Niacin
    1170: "pantothenic_acid_vitamin_b5", // Pantothenic acid
    1175: "vitamin_b6", // Vitamin B-6
    // 1176: "biotin_vitamin_b7", // Biotin - missing in USDA list
    1177: "folate_vitamin_b9", // Folate, total
    1178: "vitamin_b12", // Vitamin B-12

    // Other
    1057: "caffeine_consumption", // Caffeine
    1180: "choline" // Choline, total
};