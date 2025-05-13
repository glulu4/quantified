import {CoreInputType, CoreMetricPack, MetricPackType} from "@/types/core-metric";
import {staticNutritionPackMDs} from "./nutrition-pack-defs";
import {SFSymbol} from "react-native-sfsymbols";



export const corePackList: CoreMetricPack[] = [

    {
        id: "nutrition-core-pack",
        title: "Nutrition Pack",
        subtitle: "Meals, Macros, and Micros ",
        packType: MetricPackType.Nutrition,
        iconKey: "fork.knife",
        inputTypes: [CoreInputType.FOOD_DB],
    },
]