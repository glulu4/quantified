// foodDataApi.ts
import {ApiFood, FoodApiResponse} from "./foodDataApiTypes";

// https://fdc.nal.usda.gov/api-spec/fdc_api.html#/FDC/getFoodsSearch

const constructUrl = (query: string, brand: string, pageNumber: number = 1): string => {
  const KEY = process.env.EXPO_PUBLIC_FOOD_API_KEY;
  return `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${KEY}&query=${encodeURIComponent(
    query
  )}&pageNumber=${pageNumber}`;
  // return `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${KEY}&query=${encodeURIComponent(
  //   query
  // )}${brand ? `&brandOwner=${encodeURIComponent(brand)}` : ""}&pageNumber=${pageNumber}`;
};


export const getNutrients = () => {
  fetch(`https://api.nal.usda.gov/fdc/v1/dictionary/NUT?api_key=${process.env.EXPO_PUBLIC_FOOD_API_KEY}`)
    .then(res => res.json())
    .then(nutrients => console.log(nutrients));

}


export const searchFood = async (query: string, brand: string): Promise<ApiFood[]> => {
  const url = constructUrl(query, brand);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${await response.text()}`);
    }

    const data: FoodApiResponse = await response.json();
    const foodArray: ApiFood[] = data.foods || [];

    return foodArray
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let debounceTimeout: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => func(...args), delay);
  };
};
