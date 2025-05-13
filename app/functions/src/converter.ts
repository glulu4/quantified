import {FirestoreDataConverter} from "firebase-admin/firestore";
import {firestore} from "firebase-admin";
import {initializeApp} from "firebase-admin/app";
import {

  Graph,
}
  from "../../types/graph";
import {
  FormDefinition,
  MetricDefinition,
  MetricSubmission,
  MetricPackDefinition,
  Widget,
  FormSubmission,
  MetricPackSubmission,

} from "../../types/formdefinition";
import {User} from "../../types/user";
import {Meal} from "../../types/nutritionTypes";
import {Food, FoodCombination, UserFood} from "../../types/food";
// import {logger} from "firebase-functions/v1";
// import * as functions from "firebase-functions";
initializeApp();

const converter = <T>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: T): FirebaseFirestore.DocumentData => {
    return data as unknown as FirebaseFirestore.DocumentData;
  },
  fromFirestore: (
    snap: FirebaseFirestore.QueryDocumentSnapshot) => snap.data() as T,
});
const dataPoint = <T>(collectionPath: string) =>
  firestore().collection(collectionPath).withConverter(converter<T>());

const db = {
  firestore: firestore(),
  users: dataPoint<User>("users"),
  formDefinitions: dataPoint<FormDefinition>("form-definitions"),
  formSubmissions: (formDefId: string) =>
    dataPoint<FormSubmission>(`form-definitions/${formDefId}/form-submissions`),
  meals: dataPoint<Meal>("meals"),
  metricDefinitions: dataPoint<MetricDefinition>("metric-definitions"),
  metricPacks: dataPoint<MetricPackDefinition>("metric-packs"),
  widgets: (formDefId: string) =>
    dataPoint<Widget>(`form-definitions/${formDefId}/widgets`),

  metricSubmissions: (metricDefId: string) =>
    dataPoint<MetricSubmission>(
      `metric-definitions/${metricDefId}/metric-submissions`
    ),
  metricPackSubmissions: (metricPackDefId: string) =>
    dataPoint<MetricPackSubmission>(
      `metric-packs/${metricPackDefId}/metric-pack-submissions`
    ),

  foods: (uid: string) =>
    dataPoint<Food>(`users/${uid}/foods`),

  foodCombinations: (uid: string) =>
    dataPoint<FoodCombination>(`users/${uid}/food-combinations`),

  userFoods: (uid: string) =>
    dataPoint<UserFood>(`users/${uid}/user-foods`),

  graphs: dataPoint<Graph>("graphs"),
};

export default db;
