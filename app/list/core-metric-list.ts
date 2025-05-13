import {BodyPart, CoreInputType, CoreMetric, CoreUnitType, Goal, HealthCategory, Interest, TopLevelFilter, Wellness} from "../types/core-metric"

export const metrics: CoreMetric[] = [
    {
        id: "mood",
        defaultTitle: "Mood",
        // A mood metric might allow both a subjective scale and selection from common mood descriptors.
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Happy", "Sad", "Neutral", "Anxious", "Calm"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.MentalWellBeing],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.StressReduction],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness],
        },
    },
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
        id: "alcohol_consumption",
        defaultTitle: "Alcohol Consumption",
        // Allow numeric entry plus optional textual notes (e.g. beverage type)
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Measure in standard drinks and/or ounces
        unitTypes: [CoreUnitType.DRINKS, CoreUnitType.OUNCE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.SocialLifestyle],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.HealthCategory]: [HealthCategory.SubstanceUse],
        },
    },
    {
        id: "bicep_measurement",
        defaultTitle: "Bicep Measurement",
        // Only numeric input is needed for a measurement
        inputTypes: [CoreInputType.NUMBER],
        // Provide both imperial and metric units
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.ShouldersArms],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
        },
    },
    {
        id: "muscle_mass",
        defaultTitle: "Muscle Mass",
        inputTypes: [CoreInputType.NUMBER],
        // Allow users to record muscle mass in kilograms, kilos, or lbs
        unitTypes: [CoreUnitType.KILOGRAM, CoreUnitType.KILOS, CoreUnitType.LBS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "weight",
        defaultTitle: "Weight",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Allow weight to be recorded in kilograms, kilos, or lbs
        unitTypes: [CoreUnitType.KILOGRAM, CoreUnitType.KILOS, CoreUnitType.LBS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody],
            [TopLevelFilter.Goal]: [Goal.WeightManagement],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "calf_measurement",
        defaultTitle: "Calf Measurement",
        inputTypes: [CoreInputType.NUMBER],
        // Typically measured in inches or centimeters
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.LegsFeet],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
        },
    },
    {
        id: "duration_of_urination",
        defaultTitle: "Duration of Urination",
        inputTypes: [CoreInputType.NUMBER],
        // Allow recording in seconds or minutes (e.g. 20–30 seconds typical, or converted to minutes)
        unitTypes: [CoreUnitType.SECONDS, CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.BodyPart]: [BodyPart.AbdominalPelvic],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "chest_measurement",
        defaultTitle: "Chest Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.ChestBack],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
        },
    },
    {
        id: "neck_measurement",
        defaultTitle: "Neck Measurement",
        inputTypes: [CoreInputType.NUMBER],
        // Provide both imperial and metric options
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
        },
    },
    {
        id: "shoulder_measurement",
        defaultTitle: "Shoulder Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.ShouldersArms],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
        },
    },
    {
        id: "upper_thigh_measurement",
        defaultTitle: "Upper Thigh Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.LegsFeet],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
        },
    },
    {
        id: "urine_color",
        defaultTitle: "Urine Color",
        // Allow free text and a selection from common colors
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Clear", "Light Yellow", "Dark Yellow", "Amber", "Brown", "Red"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.BodyPart]: [BodyPart.AbdominalPelvic],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
        },
    },
    {
        id: "waist_measurement",
        defaultTitle: "Waist Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody],
            [TopLevelFilter.Goal]: [Goal.WeightManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "lipoprotein_a",
        defaultTitle: "Lipoprotein(a)",
        inputTypes: [CoreInputType.NUMBER],
        // Allow both mg/dL and nmol/L units since both are used in practice
        unitTypes: [CoreUnitType.MG_DL, CoreUnitType.NMOL_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "apoB",
        defaultTitle: "Apolipoprotein B (apoB)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "video_media",
        defaultTitle: "Video Media",
        // Allow numeric input (number of videos) or text (notes, title)
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },
    {
        id: "audio_media",
        defaultTitle: "Audio Media",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },
    {
        id: "distance_traveled",
        defaultTitle: "Distance Traveled",
        inputTypes: [CoreInputType.NUMBER],
        // Allow measurement in both miles and kilometers
        unitTypes: [CoreUnitType.MILES, CoreUnitType.KILOMETERS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "hangover",
        defaultTitle: "Hangover",
        // Allow rating on a numeric scale as well as a scale input
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.SubstanceUse],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "uti",
        defaultTitle: "Urinary Tract Infection (UTI)",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE],
        // Options for yes/no responses
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.MensHealth,
                HealthCategory.WomensHealth,
                HealthCategory.SexualHealth,
            ],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "sti",
        defaultTitle: "Sexually Transmitted Infection (STI)",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE],
        defaultMultiSelectOptions: ["Positive", "Negative"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.MensHealth,
                HealthCategory.WomensHealth,
                HealthCategory.SexualHealth,
            ],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "time_between_urinations",
        defaultTitle: "Time Between Urinations",
        inputTypes: [CoreInputType.NUMBER],
        // Allow users to record in both hours and minutes (giving flexibility)
        unitTypes: [CoreUnitType.HOUR, CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.BodyPart]: [BodyPart.AbdominalPelvic],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },
    {
        id: "urinary_incontinence",
        defaultTitle: "Urinary Incontinence",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE, CoreUnitType.COUNT],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.BodyPart]: [BodyPart.AbdominalPelvic],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },
    {
        id: "pain_during_urination",
        defaultTitle: "Pain During Urination",
        // Allow the user to record pain on a scale and optionally as a number (for finer control)
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.COUNT, CoreUnitType.MULTISELECT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth, Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.AbdominalPelvic],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.PainManagement, Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },
    {
        id: "nighttime_urinations",
        defaultTitle: "Nighttime Urinations",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.BodyPart]: [BodyPart.AbdominalPelvic],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },
    {
        id: "daytime_urinations",
        defaultTitle: "Daytime Urinations",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.BodyPart]: [BodyPart.AbdominalPelvic],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },

    // chunk 2

    {
        id: "rbc_count",
        defaultTitle: "Red Blood Cell (RBC) Count",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MILLIONS_UL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "wbc_count",
        defaultTitle: "White Blood Cell (WBC) Count",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.THOUSANDS_UL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "platelet_count",
        defaultTitle: "Platelet Count",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.THOUSANDS_UL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "sodium_concentration",
        defaultTitle: "Sodium Concentration (Na+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "potassium_concentration",
        defaultTitle: "Potassium Concentration (K+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "chloride_concentration",
        defaultTitle: "Chloride Concentration (Cl-)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "calcium_concentration",
        defaultTitle: "Calcium Concentration (Ca2+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "magnesium_concentration",
        defaultTitle: "Magnesium Concentration (Mg2+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "glucose_level",
        defaultTitle: "Glucose Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "creatinine_level",
        defaultTitle: "Creatinine Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "bun_level",
        defaultTitle: "Blood Urea Nitrogen (BUN) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "alt_level",
        defaultTitle: "Alanine Aminotransferase (ALT) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.U_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "ast_level",
        defaultTitle: "Aspartate Aminotransferase (AST) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.U_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "ldl_cholesterol",
        defaultTitle: "Low-Density Lipoprotein (LDL) Cholesterol Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "total_cholesterol",
        defaultTitle: "Total Cholesterol Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "hdl_cholesterol",
        defaultTitle: "High-Density Lipoprotein (HDL) Cholesterol Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "triglyceride_level",
        defaultTitle: "Triglyceride Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "thyroxine_t4_level",
        defaultTitle: "Thyroxine (T4) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.NMOL_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "triiodothyronine_t3_level",
        defaultTitle: "Triiodothyronine (T3) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.NMOL_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "hba1c_level",
        defaultTitle: "Hemoglobin A1c (HbA1c) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vitamin_d_level",
        defaultTitle: "Vitamin D (25(OH)D) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.NG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "crp_level",
        defaultTitle: "C-reactive Protein (CRP) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "serum_iron_level",
        defaultTitle: "Serum Iron Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "tibc",
        defaultTitle: "Total Iron-Binding Capacity (TIBC)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "ferritin_level",
        defaultTitle: "Ferritin Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.NG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "stool_color",
        defaultTitle: "Stool Color",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Clear", "Light Yellow", "Dark Yellow", "Amber", "Brown", "Red"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.VitalSigns],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "stool_texture",
        defaultTitle: "Stool Texture",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Soft", "Formed", "Loose", "Hard"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.VitalSigns],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "stool_appearance",
        defaultTitle: "Stool Appearance",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.VitalSigns],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "transferrin_saturation",
        defaultTitle: "Transferrin Saturation Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "psa_level",
        defaultTitle: "Prostate-Specific Antigen (PSA) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.NG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels, HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "tsh_level",
        defaultTitle: "Thyroid-Stimulating Hormone (TSH) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UIU_ML],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels, HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "body_fat",
        defaultTitle: "Body Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },


    // chunk 3


    // Headache Quality – allow text description or selection from common types
    {
        id: "headache_quality",
        defaultTitle: "Headache Quality",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Throbbing", "Sharp", "Dull", "Pulsating"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Headache Location – allow text and selection of common regions
    {
        id: "headache_location",
        defaultTitle: "Headache Location",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Forehead", "Temples", "Back of head", "Whole head"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Digestive Enzyme Levels – lab value measured in U/L
    {
        id: "digestive_enzyme_levels",
        defaultTitle: "Digestive Enzyme Levels",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.U_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Mucus Presence – use multi‑select with presence/absence
    {
        id: "mucus_presence",
        defaultTitle: "Mucus Presence",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE],
        defaultMultiSelectOptions: ["Present", "Absent"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Recovery, Interest.PainSymptoms, Interest.VitalSigns],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Immunity],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Parasite Detection – allow text or select common outcomes
    {
        id: "parasite_detection",
        defaultTitle: "Parasite Detection",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Positive", "Negative"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.VitalSigns, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth, HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness, Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Microbiome Analysis – free text report
    {
        id: "microbiome_analysis",
        defaultTitle: "Microbiome Analysis",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MicrobiomeHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
        },
    },
    // Hair Loss – descriptive text input
    {
        id: "hair_loss",
        defaultTitle: "Hair Loss",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition],
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [HealthCategory.HairScalpHealth, HealthCategory.MensHealth, HealthCategory.WomensHealth],
        },
    },
    // Oily Scalp – text input for description or a selection
    {
        id: "oily_scalp",
        defaultTitle: "Oily Scalp",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Oily", "Normal", "Dry"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition],
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [HealthCategory.HairScalpHealth, HealthCategory.MensHealth, HealthCategory.WomensHealth],
        },
    },
    // Dry Scalp – text input; could also allow selection if desired
    {
        id: "dry_scalp",
        defaultTitle: "Dry Scalp",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Dry", "Normal", "Oily"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition, Interest.LabClinical, Interest.MentalWellBeing, Interest.PainSymptoms, Interest.DermatologicalHealth],
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.DermatologicalHealth,
                HealthCategory.HairScalpHealth,
                HealthCategory.Nutrition,
                HealthCategory.Hormones,
                HealthCategory.Metabolic,
            ],
            [TopLevelFilter.Goal]: [Goal.SkinHealthGoals, Goal.OverallWellness, Goal.HormoneBalance],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.SelfCareRecovery],
        },
    },
    // Headache Intensity – use scale and allow a numeric entry for precision
    {
        id: "headache_intensity",
        defaultTitle: "Headache Intensity",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Headache Time of Onset – record as a date/time value
    {
        id: "headache_time_of_onset",
        defaultTitle: "Headache Time of Onset",
        inputTypes: [CoreInputType.DATE, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.DATE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement, Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Active Minutes – record duration in minutes; allow a note for context
    {
        id: "active_minutes",
        defaultTitle: "Active Minutes",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Exercise],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Prescribed Pharmaceuticals – allow multi‑select for list of medications and free text
    {
        id: "prescribed_pharmaceuticals",
        defaultTitle: "Prescribed Pharmaceuticals",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Medication A", "Medication B", "Medication C"], // customize as needed
        filters: {
            [TopLevelFilter.Interest]: [Interest.ChronicConditions, Interest.LabClinical, Interest.MentalWellBeing, Interest.PainSymptoms, Interest.GIUrinaryHealth, Interest.Hormones],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody, BodyPart.AbdominalPelvic, BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.SubstanceUse,
                HealthCategory.VitalSigns,
                HealthCategory.MentalHealth,
                HealthCategory.Pain,
                HealthCategory.Cardiovascular,
                HealthCategory.GIHealth,
                HealthCategory.Hormones,
            ],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl, Goal.PainManagement, Goal.HormoneBalance, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness, Wellness.SelfCareRecovery],
        },
    },
    // Over-the-Counter Pharmaceuticals – similar to prescribed
    {
        id: "otc_pharmaceuticals",
        defaultTitle: "Over-the-Counter Pharmaceuticals",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Medication X", "Medication Y"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ChronicConditions, Interest.LabClinical, Interest.MentalWellBeing, Interest.PainSymptoms, Interest.GIUrinaryHealth, Interest.Hormones],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody, BodyPart.AbdominalPelvic, BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.SubstanceUse,
                HealthCategory.VitalSigns,
                HealthCategory.MentalHealth,
                HealthCategory.Pain,
                HealthCategory.Cardiovascular,
                HealthCategory.GIHealth,
                HealthCategory.Hormones,
            ],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl, Goal.PainManagement, Goal.HormoneBalance, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness, Wellness.SelfCareRecovery],
        },
    },
    // Supplements – allow multi‑select and free text
    {
        id: "supplements",
        defaultTitle: "Supplements",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Vitamin C", "Omega-3", "Probiotic"], // customize as needed
        filters: {
            [TopLevelFilter.Interest]: [Interest.ChronicConditions, Interest.LabClinical, Interest.MentalWellBeing, Interest.PainSymptoms, Interest.GIUrinaryHealth, Interest.Hormones],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody, BodyPart.AbdominalPelvic, BodyPart.HeadNeck],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.SubstanceUse,
                HealthCategory.VitalSigns,
                HealthCategory.Nutrition,
                HealthCategory.MentalHealth,
                HealthCategory.Pain,
                HealthCategory.Cardiovascular,
                HealthCategory.GIHealth,
                HealthCategory.Hormones,
            ],
            [TopLevelFilter.Goal]: [
                Goal.MetabolicControl,
                Goal.PainManagement,
                Goal.HormoneBalance,
                Goal.OverallWellness,
                Goal.MuscleGainStrength,
                Goal.WeightManagement,
            ],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness, Wellness.SelfCareRecovery],
        },
    },
    // Flexibility Exercises / Stretching Routines – allow text and selection from common routines
    {
        id: "flexibility_exercises",
        defaultTitle: "Flexibility Exercises / Stretching Routines",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Static Stretching", "Dynamic Stretching", "Yoga", "Pilates"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity, Interest.Recovery],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody, BodyPart.Joints],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Exercise],
            [TopLevelFilter.Goal]: [Goal.MobilityFlexibility, Goal.RecoveryOptimization],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.SelfCareRecovery],
        },
    },
    // Blood Pressure – allow numeric entry and optional text notes
    {
        id: "blood_pressure",
        defaultTitle: "Blood Pressure",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MM_Hg],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.BloodPanels],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // FPA – measured in watts
    {
        id: "fpa",
        defaultTitle: "FPA",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.WATTS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity, Interest.Recovery],
            [TopLevelFilter.BodyPart]: [BodyPart.WholeBody, BodyPart.Joints],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.RecoveryOptimization, Goal.MobilityFlexibility, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.Performance],
        },
    },
    // Heart Rate – allow numeric and text input for context
    {
        id: "heart_rate",
        defaultTitle: "Heart Rate",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.BPM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Specific Type of Exercise – allow selection from common exercises
    {
        id: "specific_exercise_type",
        defaultTitle: "Specific Type of Exercise",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SETS, CoreUnitType.REPS, CoreUnitType.MINUTES],
        defaultMultiSelectOptions: ["Running", "Cycling", "Swimming", "Strength Training", "Yoga"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // HRV – heart rate variability in milliseconds
    {
        id: "hrv",
        defaultTitle: "Heart Rate Variability (HRV)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.RecoveryOptimization],
            [TopLevelFilter.Wellness]: [Wellness.Performance],
        },
    },
    // Printed Media – count of pages or items
    {
        id: "printed_media",
        defaultTitle: "Printed Media",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness],
        },
    },
    // Strength Training – allow descriptive text and optional numeric (e.g., duration or number of sets)
    {
        id: "strength_training",
        defaultTitle: "Strength Training",
        inputTypes: [CoreInputType.TEXT, CoreInputType.NUMBER],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Flexibility – free text description; optionally allow multi‑select of exercise types
    {
        id: "flexibility",
        defaultTitle: "Flexibility",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Static", "Dynamic", "Yoga"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Exercise],
            [TopLevelFilter.Goal]: [Goal.MobilityFlexibility],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Cardio Training – free text description and/or numeric (e.g., duration)
    {
        id: "cardio_training",
        defaultTitle: "Cardio Training",
        inputTypes: [CoreInputType.TEXT, CoreInputType.NUMBER],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.CardiovascularHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // RPE – rate of perceived exertion as a scale
    {
        id: "rpe",
        defaultTitle: "Rate of Perceived Exertion (RPE)",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.Performance],
        },
    },
    // Power Output – measured in watts
    {
        id: "power_output",
        defaultTitle: "Work / Power Output",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.WATTS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.Performance],
        },
    },
    // Standing – count of minutes or events
    {
        id: "standing",
        defaultTitle: "Standing",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.PostureImprovement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Step Count – total steps taken
    {
        id: "step_count",
        defaultTitle: "Step Count",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.CardiovascularHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Back Pain – severity measured on a scale
    {
        id: "back_pain",
        defaultTitle: "Back Pain",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.SpineBack],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement],
        },
    },
    // Hip Pain – severity measured on a scale
    {
        id: "hip_pain",
        defaultTitle: "Hip Pain (L/R)",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.LegsFeet],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement],
        },
    },
    // Water Intake – record in milliliters or cups
    {
        id: "water_intake",
        defaultTitle: "Water Intake",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MILLILITER, CoreUnitType.CUPS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Hydration],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Knee Pain – severity on a scale
    {
        id: "knee_pain",
        defaultTitle: "Knee Pain (L/R)",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.LegsFeet],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement],
        },
    },
    // Cravings – descriptive text input
    {
        id: "cravings",
        defaultTitle: "Cravings",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
            [TopLevelFilter.Goal]: [Goal.WeightManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Specific Foods Consumed – use a food lookup type
    {
        id: "specific_foods_consumed",
        defaultTitle: "Specific Foods Consumed",
        inputTypes: [CoreInputType.FOOD_DB],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
            [TopLevelFilter.Goal]: [Goal.WeightManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Shoulder Pain – severity on a scale
    {
        id: "shoulder_pain",
        defaultTitle: "Shoulder Pain (L/R)",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms],
            [TopLevelFilter.BodyPart]: [BodyPart.ShouldersArms],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain],
            [TopLevelFilter.Goal]: [Goal.PainManagement],
        },
    },
    // Blood Glucose – numeric value in mg/dL
    {
        id: "blood_glucose",
        defaultTitle: "Blood Glucose",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Timing of Meals – record as a date; allow text for context
    {
        id: "timing_of_meals",
        defaultTitle: "Timing of Meals",
        inputTypes: [CoreInputType.DATE, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.DATE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Macro Consumption – free text description (e.g., "Carbs 50%, Protein 30%, Fat 20%")
    {
        id: "macro_consumption",
        defaultTitle: "Macro Consumption",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Fiber Intake – measured in grams
    {
        id: "fiber_intake",
        defaultTitle: "Fiber Intake",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
            [TopLevelFilter.Goal]: [Goal.MetabolicControl],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Calorie Consumption – measured in kcal
    // {
    //     id: "calorie_consumption",
    //     defaultTitle: "Calorie Consumption",
    //     inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
    //     unitTypes: [CoreUnitType.KCAL],
    //     filters: {
    //         [TopLevelFilter.Interest]: [Interest.Nutrition],
    //         [TopLevelFilter.HealthCategory]: [HealthCategory.Metabolic],
    //         [TopLevelFilter.Goal]: [Goal.WeightManagement],
    //         [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
    //     },
    // },
    // VO2 Max Prediction – a custom unit; allow numeric and text
    {
        id: "vo2_max_prediction",
        defaultTitle: "VO2 Max Prediction",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.CUSTOM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.ExerciseActivity],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.CardiovascularHealth],
            [TopLevelFilter.Wellness]: [Wellness.Performance],
        },
    },
    // Peak Flow – measured in liters per minute
    {
        id: "peak_flow",
        defaultTitle: "Peak Flow (PEFR)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.LITERS_MIN],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.RespiratoryHealth],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Oxygen Saturation – measured in percentage
    {
        id: "oxygen_saturation",
        defaultTitle: "Oxygen Saturation (SpO2)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.RespiratoryHealth],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Respiratory Rate – measured in breaths per minute
    {
        id: "respiratory_rate",
        defaultTitle: "Respiratory Rate",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.BREATHS_MIN],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.RespiratoryHealth],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Menstrual Cycle – using a date range for cycle start/end
    {
        id: "menstrual_cycle",
        defaultTitle: "Menstrual Cycle",
        inputTypes: [CoreInputType.DATE_RANGE, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.DATE_RANGE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Testosterone – measured in nmol/L
    {
        id: "testosterone",
        defaultTitle: "Testosterone",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.NMOL_L],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Hormones],
            [TopLevelFilter.Goal]: [Goal.HormoneBalance],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Premature Ejaculation – qualitative measure
    {
        id: "premature_ejaculation",
        defaultTitle: "Premature Ejaculation",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Erectile Dysfunction – qualitative
    {
        id: "erectile_dysfunction",
        defaultTitle: "Erectile Dysfunction",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Sexual Activity Frequency – count of events per time period
    {
        id: "sexual_activity_frequency",
        defaultTitle: "Sexual Activity Frequency",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Erection Frequency – count of events
    {
        id: "erection_frequency",
        defaultTitle: "Erection Frequency",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Nighttime Erection Frequency – count
    {
        id: "nighttime_erection_frequency",
        defaultTitle: "Nighttime Erection Frequency",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Orgasm – descriptive text
    {
        id: "orgasm",
        defaultTitle: "Orgasm",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Masturbation – count of events
    {
        id: "masturbation",
        defaultTitle: "Masturbation",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    // Fantasies – descriptive text
    {
        id: "fantasies",
        defaultTitle: "Fantasies",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.COUNT, CoreUnitType.MULTISELECT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness],
        },
    },
    // Sexual Activity Timing – free text (e.g., "Evening", "Late night")
    {
        id: "sexual_activity_timing",
        defaultTitle: "Sexual Activity Timing",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },


    // chunk 4

    {
        id: "erection_refractory_period",
        defaultTitle: "Erection Refractory Period",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Measured in minutes, allowing a note if needed
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "erection_duration",
        defaultTitle: "Erection Duration",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Measured in minutes; users may also add context if needed
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "nighttime_erection_duration",
        defaultTitle: "Nighttime Erection Duration",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Also measured in minutes
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "ejaculation_latency",
        defaultTitle: "Ejaculation Latency",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        // Measured in seconds for precision
        unitTypes: [CoreUnitType.SECONDS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "cervical_mucus_consistency",
        defaultTitle: "Cervical Mucus Consistency",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Watery", "Sticky", "Creamy", "Egg white"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth, HealthCategory.WomensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "cervical_mucus_texture",
        defaultTitle: "Cervical Mucus Texture",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Smooth", "Coarse"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth, HealthCategory.WomensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "menstrual_cramps",
        defaultTitle: "Menstrual Cramps",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.TEXT],
        // Use SCALE to capture severity; you might also allow number if needed
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth, HealthCategory.WomensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "pain_during_intercourse",
        defaultTitle: "Pain During Intercourse",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "vaginal_dryness",
        defaultTitle: "Vaginal Dryness",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Severe", "Moderate", "Mild", "None"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth, HealthCategory.WomensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "pms_symptoms",
        defaultTitle: "PMS Symptoms",
        inputTypes: [CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [],
        defaultMultiSelectOptions: ["Cramps", "Bloating", "Mood swings", "Fatigue"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth, HealthCategory.WomensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "libido_arousal",
        defaultTitle: "Libido and Arousal",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.ReproductiveHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "quality_of_erection",
        defaultTitle: "Quality of Erection",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MensHealth],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "orgasm_intensity",
        defaultTitle: "Orgasm Intensity",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.ReproductiveHealth,
                HealthCategory.MensHealth,
                HealthCategory.WomensHealth,
            ],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "sexual_activity_satisfaction",
        defaultTitle: "Sexual Activity Satisfaction",
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.SexualReproductive],
            [TopLevelFilter.HealthCategory]: [
                HealthCategory.ReproductiveHealth,
                HealthCategory.MensHealth,
                HealthCategory.WomensHealth,
            ],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },




    // the missing ones


    {
        id: "forearm_measurement",
        defaultTitle: "Forearm Measurement",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.CENTIMETERS, CoreUnitType.INCH],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition],
            [TopLevelFilter.BodyPart]: [BodyPart.ShouldersArms],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.MuscleGainStrength],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "hip_measurement",
        defaultTitle: "Hip Measurement",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.CENTIMETERS, CoreUnitType.INCH],
        filters: {
            [TopLevelFilter.Interest]: [Interest.BodyComposition],
            [TopLevelFilter.BodyPart]: [BodyPart.Pelvis, BodyPart.AbdominalPelvic],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.WeightManagement],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "allergy",
        defaultTitle: "Allergy",
        // Here we allow a multi select for indicating various allergy types plus text notes.
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Yes", "No", "Seasonal", "Food", "Environmental"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Immunity],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness],
        },
    },
    {
        id: "fever",
        defaultTitle: "Fever",
        // Fever is measured both numerically (temperature in degrees) and as a binary state.
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT, CoreInputType.MULTISELECT],
        // We use a temperature unit (DEGREES) along with a multi select unit for Yes/No.
        unitTypes: [CoreUnitType.DEGREES, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.VitalSigns],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "sharpness",
        defaultTitle: "Sharpness",
        // Typically a subjective rating (scale) with optional numerical or textual notes.
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.CognitivePerformance],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.CognitiveEnhancement],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness],
        },
    },
    {
        id: "memory",
        defaultTitle: "Memory",
        // Memory can be assessed with a scale (e.g. self-rating) plus numeric performance or free text.
        inputTypes: [CoreInputType.SCALE, CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.CognitivePerformance, Interest.MentalWellBeing],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.CognitiveEnhancement],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness],
        },
    },
    {
        id: "reaction_speed",
        defaultTitle: "Reaction Speed",
        // Measured in milliseconds with a number input, with extra text input for notes or context.
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.CognitivePerformance],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.CognitiveEnhancement],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness, Wellness.Performance],
        },
    },
    {
        id: "timing_of_bowel_movements",
        defaultTitle: "Timing of Bowel Movements",
        // Tracking the time when bowel movements occur.
        inputTypes: [CoreInputType.DATE, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.TIME],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "frequency_of_bowel_movements",
        defaultTitle: "Frequency of Bowel Movements",
        // Typically a count per day with optional notes.
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },

    {
        id: "abdominal_pain",
        defaultTitle: "Abdominal Pain",
        // Pain can be recorded using a scale and/or by selecting qualitative descriptors.
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["None", "Mild", "Moderate", "Severe"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain, HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.PainManagement, Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "bloating",
        defaultTitle: "Bloating",
        // Often a symptom recorded via selection and descriptive notes.
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["None", "Mild", "Moderate", "Severe"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "gas",
        defaultTitle: "Gas",
        // Records frequency or intensity of gas; allowing both count and descriptive multi-select.
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.COUNT],
        defaultMultiSelectOptions: ["None", "Occasional", "Frequent"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "indigestion",
        defaultTitle: "Indigestion",
        // Captured via both a severity scale and multi select descriptors.
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["None", "Mild", "Moderate", "Severe"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "reflux",
        defaultTitle: "Reflux",
        // For reflux, using similar options as other GI symptoms.
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["None", "Occasional", "Frequent", "Severe"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },

    {
        id: "phone_pickups",
        defaultTitle: "Phone Pickups",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.SocialLifestyle, Wellness.Lifestyle],
        },
    },
    {
        id: "phone_screen_time",
        defaultTitle: "Phone Screen Time",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.SocialLifestyle, Wellness.Lifestyle],
        },
    },
    {
        id: "laptop_screen_time",
        defaultTitle: "Laptop Screen Time",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.SocialLifestyle, Wellness.Lifestyle],
        },
    },
    {
        id: "notifications",
        defaultTitle: "Notifications",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.HabitTracking],
            [TopLevelFilter.Wellness]: [Wellness.SocialLifestyle, Wellness.Lifestyle],
        },
    },
    {
        id: "meditation",
        defaultTitle: "Meditation",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.MentalWellBeing, Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MentalHealth, HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.StressReduction, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness, Wellness.SelfCareRecovery],
        },
    },
    {
        id: "air_quality",
        defaultTitle: "Air Quality",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.AQI],
        filters: {
            [TopLevelFilter.Interest]: [Interest.EnvironmentFactors],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.Lifestyle],
        },
    },
    {
        id: "weather",
        defaultTitle: "Weather",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.DEGREES, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.EnvironmentFactors],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.Lifestyle],
        },
    },
    {
        id: "uv_index",
        defaultTitle: "UV Index",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.INDEX],
        filters: {
            [TopLevelFilter.Interest]: [Interest.EnvironmentFactors],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Lifestyle],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.Lifestyle],
        },
    },
    {
        id: "consistency_bristol_stool_scale",
        defaultTitle: "Consistency (Bristol Stool Scale)",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: [
            "Type 1",
            "Type 2",
            "Type 3",
            "Type 4",
            "Type 5",
            "Type 6",
            "Type 7",
        ],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "color",
        defaultTitle: "Color",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Normal", "Light Brown", "Dark Brown", "Green", "Yellow", "Black"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_specific_gravity",
        defaultTitle: "Urine Specific Gravity",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth, Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_ph",
        defaultTitle: "Urine pH",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.GIUrinaryHealth, Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_protein",
        defaultTitle: "Urine Protein",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_glucose",
        defaultTitle: "Urine Glucose",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_ketones",
        defaultTitle: "Urine Ketones",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Trace", "Small", "Moderate", "Large"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },

    {
        id: "urine_bilirubin",
        defaultTitle: "Urine Bilirubin",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG_DL],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_urobilinogen",
        defaultTitle: "Urine Urobilinogen",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Normal", "High", "Low"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_nitrites",
        defaultTitle: "Urine Nitrites",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Positive", "Negative"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "urine_leukocyte_esterase",
        defaultTitle: "Urine Leukocyte Esterase",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Trace", "Positive"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.UrinaryHealth],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "ph_level",
        defaultTitle: "pH Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "fecal_fat_content",
        defaultTitle: "Fecal Fat Content",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.GRAM],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "microbial_diversity_indices",
        defaultTitle: "Microbial Diversity Indices (e.g., Shannon Index)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.INDEX],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MicrobiomeHealth],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "quantification_of_specific_bacterial_species",
        defaultTitle: "Quantification of Specific Bacterial Species",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth, Interest.SpecializedTests],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MicrobiomeHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "hair_quality",
        defaultTitle: "Hair Quality",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Good", "Average", "Poor"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.DermatologicalHealth, Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.DermatologicalHealth],
            [TopLevelFilter.Goal]: [Goal.SkinHealthGoals, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "calprotectin_levels",
        defaultTitle: "Calprotectin Levels",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UG_G],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "ova_and_parasite_examination",
        defaultTitle: "Ova and Parasite Examination",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.DATE],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Positive"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth, Interest.SpecializedTests],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "stool_culture",
        defaultTitle: "Stool Culture",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Normal", "Abnormal", "Positive", "Negative"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth, Interest.SpecializedTests],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "fecal_occult_blood_test",
        defaultTitle: "Fecal Occult Blood Test",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Positive", "Inconclusive"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LabClinical, Interest.GIUrinaryHealth, Interest.SpecializedTests],
            [TopLevelFilter.HealthCategory]: [HealthCategory.GIHealth],
            [TopLevelFilter.Goal]: [Goal.GIDigestiveWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "headache_frequency",
        defaultTitle: "Headache Frequency",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms, Interest.MentalWellBeing],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain, HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.PainManagement, Goal.StressReduction],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness],
        },
    },
    {
        id: "headache_duration",
        defaultTitle: "Headache Duration",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.PainSymptoms, Interest.MentalWellBeing],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Pain, HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.PainManagement, Goal.StressReduction],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness],
        },
    },
    {
        id: "water",
        defaultTitle: "Water",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MILLILITER, CoreUnitType.CUPS],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Nutrition, Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Nutrition],
            [TopLevelFilter.Goal]: [Goal.WeightManagement, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.Lifestyle],
        },
    },
    {
        id: "basal_body_temperature",
        defaultTitle: "Basal Body Temperature (BBT)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT, CoreInputType.DATE],
        unitTypes: [CoreUnitType.DEGREES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.VitalSigns],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Hormones],
            [TopLevelFilter.Goal]: [Goal.SexualReproductiveGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "acne",
        defaultTitle: "Acne",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Clear", "Mild", "Moderate", "Severe"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.DermatologicalHealth, Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.DermatologicalHealth],
            [TopLevelFilter.Goal]: [Goal.SkinHealthGoals, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.SelfCareRecovery],
        },
    },
    {
        id: "dryness",
        defaultTitle: "Dryness",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Normal", "Dry", "Very Dry"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.DermatologicalHealth, Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.DermatologicalHealth],
            [TopLevelFilter.Goal]: [Goal.SkinHealthGoals],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.SelfCareRecovery],
        },
    },
    {
        id: "fatigue",
        defaultTitle: "Fatigue",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["None", "Low", "Moderate", "High", "Extreme"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.MentalWellBeing, Interest.Recovery],
            [TopLevelFilter.HealthCategory]: [HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.StressReduction, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness, Wellness.EnergyFatigue],
        },
    },
    {
        id: "perceived_sleep_quality",
        defaultTitle: "Perceived Sleep Quality",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Very Poor", "Poor", "Average", "Good", "Excellent"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep, HealthCategory.MentalHealth],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.MentalWellness, Wellness.SleepHygiene],
        },
    },
    {
        id: "duration_of_rem",
        defaultTitle: "Duration of REM Sleep",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "duration_of_light_sleep",
        defaultTitle: "Duration of Light Sleep",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "duration_of_deep_sleep",
        defaultTitle: "Duration of Deep Sleep",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "duration_of_wakefulness",
        defaultTitle: "Duration of Wakefulness",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "number_of_awakenings",
        defaultTitle: "Number of Awakenings",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "wake_after_sleep_duration",
        defaultTitle: "Wake After Sleep (WASO) Duration",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "sleep_transition_frequency",
        defaultTitle: "Frequency of Transition Between Sleep Stages",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "sleep_architecture",
        defaultTitle: "Sleep Architecture",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Normal", "Fragmented", "Disrupted", "Irregular"],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "sleep_efficiency",
        defaultTitle: "Sleep Efficiency (Time Asleep / Time in Bed)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },


    {
        id: "sleep_onset_latency",
        defaultTitle: "Sleep Onset Latency",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "sleep_duration",
        defaultTitle: "Sleep Duration",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MINUTES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "bed_time",
        defaultTitle: "Bed Time",
        inputTypes: [CoreInputType.DATE, CoreInputType.TEXT, CoreInputType.TIME],
        unitTypes: [CoreUnitType.TIME],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "wake_time",
        defaultTitle: "Wake Time",
        inputTypes: [CoreInputType.DATE, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.TIME],
        filters: {
            [TopLevelFilter.Interest]: [Interest.Sleep],
            [TopLevelFilter.HealthCategory]: [HealthCategory.Sleep],
            [TopLevelFilter.Goal]: [Goal.SleepImprovement],
            [TopLevelFilter.Wellness]: [Wellness.SleepHygiene],
        },
    },
    {
        id: "skin_temperature",
        defaultTitle: "Skin Temperature",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.DEGREES],
        filters: {
            [TopLevelFilter.Interest]: [Interest.DermatologicalHealth, Interest.VitalSigns],
            [TopLevelFilter.HealthCategory]: [HealthCategory.VitalSigns],
            [TopLevelFilter.Goal]: [Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "cigarettes",
        defaultTitle: "Cigarettes",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.SubstanceUse],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness],
        },
    },
    {
        id: "psychedelics",
        defaultTitle: "Psychedelics",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.MentalWellBeing],
            [TopLevelFilter.HealthCategory]: [HealthCategory.SubstanceUse],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness],
        },
    },
    {
        id: "marijuana",
        defaultTitle: "Marijuana",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.COUNT],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.SubstanceUse],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness],
        },
    },
    {
        id: "cocaine",
        defaultTitle: "Cocaine",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MG],
        filters: {
            [TopLevelFilter.Interest]: [Interest.LifestyleHabits],
            [TopLevelFilter.HealthCategory]: [HealthCategory.SubstanceUse],
            [TopLevelFilter.Goal]: [Goal.HabitTracking, Goal.OverallWellness],
            [TopLevelFilter.Wellness]: [Wellness.PhysicalWellness, Wellness.MentalWellness],
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