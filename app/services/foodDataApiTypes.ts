
export type FoodNutrient = {
  nutrientId: number;
  nutrientName: string;
  nutrientNumber: string;
  unitName: string;
  derivationCode: string;
  derivationDescription: string;
  derivationId: number;
  value: number;
  foodNutrientSourceId: number;
  foodNutrientSourceCode: string;
  foodNutrientSourceDescription: string;
  rank: number;
  indentLevel: number;
  foodNutrientId: number;
  percentDailyValue: number;
};

export type FoodAttribute = {
  value: string;
  name: string;
  id: number;
};

export type FoodAttributeType = {
  name: string;
  description: string;
  id: number;
  foodAttributes: FoodAttribute[];
};

export type ApiFood = {
  fdcId: number;
  description: string;
  dataType: string;
  gtinUpc: string;
  publishedDate: string;
  brandOwner: string;
  ingredients: string;
  marketCountry: string;
  foodCategory: string;
  modifiedDate: string;
  dataSource: string;
  servingSizeUnit: string;
  servingSize: number;
  householdServingFullText: string;
  tradeChannels: string[];
  allHighlightFields: string;
  score: number;
  microbes: any[]; // Array appears to be empty in the sample, could be more specific if needed
  foodNutrients: FoodNutrient[];
  finalFoodInputFoods: any[]; // Array appears to be empty in the sample
  foodMeasures: any[]; // Array appears to be empty in the sample
  foodAttributes: FoodAttribute[];
  foodAttributeTypes: FoodAttributeType[];
  foodVersionIds: any[]; // Array appears to be empty in the sample
};



interface FoodSearchCriteria {
  query: string;
  generalSearchInput: string;
  brandOwner: string;
  pageNumber: number;
  numberOfResultsPerPage: number;
  pageSize: number;
  requireAllWords: boolean;
}

interface DataTypeAggregation {
  Branded: number;
  // Add other possible data types if they exist
}

export type FoodApiResponse = {
  totalHits: number;
  currentPage: number;
  totalPages: number;
  pageList: number[];
  foodSearchCriteria: FoodSearchCriteria;
  foods: ApiFood[]; // Your existing Food type
  aggregations: {
    dataType: DataTypeAggregation;
    nutrients: Record<string, never>; // or {} if you prefer
  };
}


export enum NutrientApiType {
  PROTEIN = "Protein",
  FAT = "Total lipid (fat)",
  CARBS = "Carbohydrate, by difference",
  KCAL = "Energy",
  TOTAL_SUGAR = "Total Sugars",
  FIBER = "Fiber, total dietary",
  SUGAR_ALCOHOLS = "Total sugar alcohols",
  CALCIUM = "Calcium, Ca",
  IRON = "Iron, Fe",
  POTASSIUM = "Potassium, K",
  SODIUM = "Sodium, Na",
  VITAMIN_A = "Vitamin A, IU",
  VITAMIN_C = "Vitamin C, total ascorbic acid",
  CHOLESTEROL = "Cholesterol",
  TRANS_FAT = "Fatty acids, total trans",
  SATURATED_FAT = "Fatty acids, total saturated",
}

