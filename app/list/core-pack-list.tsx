import {CoreMetricPack, MetricPackType} from "@/types/coremetric-pack";
import {staticNutritionPackMDs} from "./nutrition-pack-defs";
import {SFSymbol} from "react-native-sfsymbols";
import {CoreInputType} from "@/types/core-input";



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