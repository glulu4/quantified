import {useForm} from "@/app/context/FormContext";
import {MetricDefinition, MetricPackDefinition, MetricSubmission, MetricValueType} from "@/types/formdefinition";
import {useNavigation} from "expo-router";
import {useEffect, useState} from "react";
import {HomeStackNavigationType} from "../../_layout";
import {StatusItem} from "@/types/status-item";
import * as Crypto from 'expo-crypto';
import {Timestamp} from 'firebase/firestore';

export const useSubmissions = (
    metricDefinitions: MetricDefinition[],
    metricPacks: MetricPackDefinition[],
) => {


    // Map<string, StatusItem<CoreMetric>>
    const [metricSubmissionMap, setMetricSubmissionMap] = useState<Map<string, StatusItem<MetricSubmission>>>(new Map());

    const {state, dispatch} = useForm();
    const navigation = useNavigation<HomeStackNavigationType>();


    useEffect(() => {
        initMetricSubMap(metricDefinitions);
    }, [metricDefinitions])






    function updateSubmissionValue(metricDefId: string, value: MetricValueType) {


        if (metricSubmissionMap.has(metricDefId)) {
            const currentSubmission = metricSubmissionMap.get(metricDefId)!;
            const updatedValue = {...currentSubmission.value, value: value};
            const updatedMap = new Map(metricSubmissionMap);
            updatedMap.set(metricDefId, {...currentSubmission, value: updatedValue});
            setMetricSubmissionMap(updatedMap)
        }


    }



    function initMetricSubMap(metricDefinitions: MetricDefinition[]) {


        const metricSubMap = new Map<string, StatusItem<MetricSubmission>>();

        metricDefinitions.forEach((md: MetricDefinition) => {
            const metricSubId = Crypto.randomUUID();

            const newSubmission: MetricSubmission = {
                id: metricSubId,
                formSubmissionId: "",
                value: "Enter Value",
                metricDefinitionId: md.id,
                deletedAt: null,
                createdAt: Timestamp.now(),
            }
            metricSubMap.set(md.id, {
                value: newSubmission, status: 'new'
            });
        });

        console.log(metricSubMap);

        setMetricSubmissionMap(metricSubMap);

    }


    return {
        metricSubmissionMap,
        updateSubmissionValue,
    }

}