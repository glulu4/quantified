import {CoreInputType} from "@/types/core-input";
import {CoreUnitType} from "@/types/core-unit";
import {CoreMetric} from "@/types/coremetric";


// new list
export const CoreMetricList: CoreMetric[] = [
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
        id: "alcohol_consumption",
        defaultTitle: "Alcohol Consumption",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.DRINKS, CoreUnitType.CUPS, CoreUnitType.MILLILITER, CoreUnitType.OUNCE],
        filters: [
            {tag: "Body System", subtag: "Liver"},
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Volume"},
            {tag: "Body System", subtag: "Gut"},

            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "bicep_measurement",
        defaultTitle: "Bicep Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "muscle_mass",
        defaultTitle: "Muscle Mass",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.KILOGRAM, CoreUnitType.LBS, CoreUnitType.PERCENTAGE],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Body Composition"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "weight",
        defaultTitle: "Weight",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.LBS, CoreUnitType.KILOGRAM],
        filters: [
            {tag: "Measurement Unit", subtag: "Weight"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Tracking Method", subtag: "Scale"}

        ]
    },
    {
        id: "calf_measurement",
        defaultTitle: "Calf Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "duration_of_urination",
        defaultTitle: "Duration of Urination",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SECONDS, CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "chest_measurement",
        defaultTitle: "Chest Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "forearm_measurement",
        defaultTitle: "Forearm Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "hip_measurement",
        defaultTitle: "Hip Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },












    {
        id: "neck_measurement",
        defaultTitle: "Neck Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "shoulder_measurement",
        defaultTitle: "Shoulder Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "upper_thigh_measurement",
        defaultTitle: "Upper Thigh Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},

            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Body Composition"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "urine_color",
        defaultTitle: "Urine Color",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: [
            "Clear", "Pale Yellow", "Dark Yellow", "Amber", "Brown"
        ],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "waist_measurement",
        defaultTitle: "Waist Measurement",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INCH, CoreUnitType.CENTIMETERS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Length & Circumference"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Body Composition"},
        ]
    },
    {
        id: "lipoprotein_a",
        defaultTitle: "Lipoprotein(a)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MG_DL, CoreUnitType.NMOL_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },
    {
        id: "apob",
        defaultTitle: "apoB",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MG_DL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},

        ]
    },
    {
        id: "video_media",
        defaultTitle: "Video Media",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.COUNT, CoreUnitType.MULTIPLE],
        defaultMultiSelectOptions: ["YouTube", "Vimeo", "TikTok", "Other"],
        filters: [
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Specialty", subtag: "Psychiatry"},

        ]
    },
    {
        id: "audio_media",
        defaultTitle: "Audio Media",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.COUNT, CoreUnitType.MULTIPLE],
        defaultMultiSelectOptions: ["Spotify", "Podcast", "Radio", "Other"],
        filters: [
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},

            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Specialty", subtag: "Psychiatry"}
        ]
    },
    {
        id: "distance_traveled",
        defaultTitle: "Distance Traveled",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILES, CoreUnitType.KILOMETERS],
        filters: [
            {tag: "Measurement Unit", subtag: "Distance"},
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },













    {
        id: "hangover",
        defaultTitle: "Hangover",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Neurology"},

            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Area of Optimization", subtag: "Longevity"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Health Domain", subtag: "Cognitive"},
        ]
    },

    {
        id: "uti",
        defaultTitle: "UTI",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.DATE_RANGE,],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.DATE_RANGE, CoreUnitType.DATE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Survey"}

        ]
    },

    {
        id: "sti",
        defaultTitle: "STI",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.DATE_RANGE,],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.DATE_RANGE, CoreUnitType.DATE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },

    {
        id: "fever",
        defaultTitle: "Fever",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.SCALE, CoreInputType.DATE_RANGE],
        unitTypes: [CoreUnitType.DEGREES, CoreUnitType.SCALE, CoreUnitType.DATE_RANGE],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Pulmonology"},
        ]
    },

    {
        id: "allergy",
        defaultTitle: "Allergy",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },

    {
        id: "cold_or_flu",
        defaultTitle: "Cold or Flu",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.DATE_RANGE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.DATE],
        defaultMultiSelectOptions: ["Cold", "Flu", "Neither"],
        filters: [
            {tag: "Body System", subtag: "Lungs"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },

    {
        id: "incontinence",
        defaultTitle: "Incontinence",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Survey"},



        ]
    },

    {
        id: "pain_during_urination",
        defaultTitle: "Pain During Urination",
        inputTypes: [CoreInputType.SCALE],
        unitTypes: [CoreUnitType.SCALE],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}

        ]
    },

    {
        id: "nighttime_urinations",
        defaultTitle: "Nighttime Urinations",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},

        ]
    },

    {
        id: "daytime_urinations",
        defaultTitle: "Daytime Urinations",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},

        ]
    },
    {
        id: "time_between_urinations",
        defaultTitle: "Time Between Urinations",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.SECONDS, CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Tracking Method", subtag: "Manual"},

            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},

        ]
    },





















    {
        id: "red_blood_cell_count",
        defaultTitle: "Red Blood Cell (RBC) Count",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MILLIONS_UL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Specialty", subtag: "Hematology"},

        ]
    },
    {
        id: "white_blood_cell_count",
        defaultTitle: "White Blood Cell (WBC) Count",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.THOUSANDS_UL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Specialty", subtag: "Hematology"},

        ]
    },
    {
        id: "platelet_count",
        defaultTitle: "Platelet Count",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.THOUSANDS_UL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Specialty", subtag: "Hematology"},

        ]
    },
    {
        id: "sodium_concentration",
        defaultTitle: "Sodium Concentration (Na+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Nephrology"},
        ]
    },
    {
        id: "potassium_concentration",
        defaultTitle: "Potassium Concentration (K+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Nephrology"},
        ]
    },
    {
        id: "chloride_concentration",
        defaultTitle: "Chloride Concentration (Cl-)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "calcium_concentration",
        defaultTitle: "Calcium Concentration (Ca2+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Nephrology"},
        ]
    },
    {
        id: "magnesium_concentration",
        defaultTitle: "Magnesium Concentration (Mg2+)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MEQ_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "glucose_level",
        defaultTitle: "Glucose Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "creatinine_level",
        defaultTitle: "Creatinine Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },























    {
        id: "blood_urea_nitrogen_bun_level",
        defaultTitle: "Blood Urea Nitrogen (BUN) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL, CoreUnitType.NMOL_L],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Nephrology"},
        ]
    },
    {
        id: "alanine_aminotransferase_alt_level",
        defaultTitle: "Alanine Aminotransferase (ALT) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.U_L],
        filters: [
            {tag: "Body System", subtag: "Liver"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
        ]
    },
    {
        id: "aspartate_aminotransferase_ast_level",
        defaultTitle: "Aspartate Aminotransferase (AST) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.U_L],
        filters: [
            {tag: "Body System", subtag: "Liver"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
        ]
    },
    {
        id: "total_cholesterol_level",
        defaultTitle: "Total Cholesterol Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
        ]
    },
    {
        id: "ldl_cholesterol_level",
        defaultTitle: "Low-Density Lipoprotein (LDL) Cholesterol Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},

        ]
    },
    {
        id: "hdl_cholesterol_level",
        defaultTitle: "High-Density Lipoprotein (HDL) Cholesterol Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
        ]
    },
    {
        id: "triglyceride_level",
        defaultTitle: "Triglyceride Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
        ]
    },
    {
        id: "thyroxine_t4_level",
        defaultTitle: "Thyroxine (T4) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.NMOL_L],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
        ]
    },
    {
        id: "triiodothyronine_t3_level",
        defaultTitle: "Triiodothyronine (T3) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.NMOL_L],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"}
        ]
    },
    {
        id: "hemoglobin_a1c_hba1c_level",
        defaultTitle: "Hemoglobin A1c (HbA1c) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
        ]
    },


















    {
        id: "vitamin_d_25ohd_level",
        defaultTitle: "Vitamin D (25(OH)D) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.NG_ML, CoreUnitType.NMOL_L],
        filters: [
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Longevity"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},

        ]
    },
    {
        id: "c_reactive_protein_crp_level",
        defaultTitle: "C-Reactive Protein (CRP) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_L, CoreUnitType.NMOL_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },
    {
        id: "serum_iron_level",
        defaultTitle: "Serum Iron Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL, CoreUnitType.UMOL_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },
    {
        id: "total_iron_binding_capacity_tibc",
        defaultTitle: "Total Iron-Binding Capacity (TIBC)",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL, CoreUnitType.UMOL_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },
    {
        id: "ferritin_level",
        defaultTitle: "Ferritin Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.NG_ML, CoreUnitType.UG_G],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },
    {
        id: "stool_color",
        defaultTitle: "Stool Color",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTIPLE],
        defaultMultiSelectOptions: ["Brown", "Green", "Yellow", "Black", "Red", "Pale"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Recovery"}
        ]
    },
    {
        id: "stool_texture",
        defaultTitle: "Stool Texture",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTIPLE],
        defaultMultiSelectOptions: [
            "Hard lumps", "Lumpy", "Cracked", "Smooth soft", "Soft blobs", "Fluffy pieces", "Watery"
        ],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Recovery"}
        ]
    },
    {
        id: "stool_appearance",
        defaultTitle: "Stool Appearance",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTIPLE],
        defaultMultiSelectOptions: ["Formed", "Loose", "Liquid", "Mucous", "Blood-streaked"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Recovery"}
        ]
    },
    {
        id: "transferrin_saturation_level",
        defaultTitle: "Transferrin Saturation Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Hematology"},
            {tag: "Measurement Unit", subtag: "Percentage (%)"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },
    {
        id: "prostate_specific_antigen_psa_level",
        defaultTitle: "Prostate-Specific Antigen (PSA) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.NG_ML],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },
    {
        id: "thyroid_stimulating_hormone_tsh_level",
        defaultTitle: "Thyroid-Stimulating Hormone (TSH) Level",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.UIU_ML],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Tracking Method", subtag: "Lab test"}
        ]
    },











    {
        id: "body_fat",
        defaultTitle: "Body Fat",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Measurement Unit", subtag: "Percentage (%)"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Exercise & Movement"},
            {tag: "Area of Optimization", subtag: "Body Composition"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "sharpness",
        defaultTitle: "Sharpness",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.SCALE],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "memory",
        defaultTitle: "Memory",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "reaction_speed",
        defaultTitle: "Reaction Speed",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MS],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "timing_of_bowel_movements",
        defaultTitle: "Timing of Bowel Movements",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "frequency_of_bowel_movements",
        defaultTitle: "Frequency of Bowel Movements",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "mood",
        defaultTitle: "Mood",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Happy", "Neutral", "Sad", "Anxious", "Irritable", "Calm"],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "abdominal_pain",
        defaultTitle: "Abdominal Pain",
        inputTypes: [CoreInputType.SCALE],
        unitTypes: [CoreUnitType.SCALE],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}

        ]
    },
    {
        id: "bloating",
        defaultTitle: "Bloating",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Digestion"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "gas",
        defaultTitle: "Gas",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Area of Optimization", subtag: "Digestion"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
















    {
        id: "indigestion",
        defaultTitle: "Indigestion",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE, CoreUnitType.UNITLESS],
        defaultMultiSelectOptions: ["Mild", "Moderate", "Severe"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "reflux",
        defaultTitle: "Reflux",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE, CoreUnitType.UNITLESS],
        defaultMultiSelectOptions: ["Mild", "Moderate", "Severe"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "phone_pickups",
        defaultTitle: "Phone Pickups",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Specialty", subtag: "Psychiatry"}
        ]
    },
    {
        id: "phone_screen_time",
        defaultTitle: "Phone Screen Time",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR, CoreUnitType.TIME],
        filters: [
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "laptop_screen_time",
        defaultTitle: "Laptop Screen Time",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.HOUR, CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},

            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Tracking Method", subtag: "App integration"}
        ]
    },
    {
        id: "notifications",
        defaultTitle: "Notifications",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Specialty", subtag: "Psychiatry"},
        ]
    },
    {
        id: "meditation",
        defaultTitle: "Meditation",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR, CoreUnitType.TIME],
        filters: [
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Wellness Pillar", subtag: "Spiritual"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Manual"},

            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Trending Topics", subtag: "Mental Health"},
        ]
    },
    {
        id: "air_quality",
        defaultTitle: "Air Quality",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.AQI],
        filters: [
            {tag: "Health Domain", subtag: "Environmental"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Tracking Method", subtag: "App integration"}
        ]
    },
    {
        id: "weather",
        defaultTitle: "Weather",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Clear", "Cloudy", "Rainy", "Snowy", "Windy", "Humid"],
        filters: [
            {tag: "Health Domain", subtag: "Environmental"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Trending Topics", subtag: "Mental Health"},

            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
        ]
    },
    {
        id: "uv_index",
        defaultTitle: "UV Index",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INDEX],
        filters: [
            {tag: "Health Domain", subtag: "Environmental"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Area of Optimization", subtag: "Longevity"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Body System", subtag: "Skin"},
        ]
    },

























    {
        id: "consistency_bristol_stool_scale",
        defaultTitle: "Consistency (Bristol Stool Scale)",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: [
            "Type 1: Separate hard lumps",
            "Type 2: Sausage-shaped but lumpy",
            "Type 3: Like a sausage but with cracks",
            "Type 4: Like a smooth, soft sausage",
            "Type 5: Soft blobs with clear-cut edges",
            "Type 6: Fluffy pieces with ragged edges, mushy",
            "Type 7: Watery, no solid pieces"
        ],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Body Composition"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "color",
        defaultTitle: "Color",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Clear", "Pale Yellow", "Dark Yellow", "Amber", "Brown"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "urine_specific_gravity",
        defaultTitle: "Urine Specific Gravity",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "urine_ph",
        defaultTitle: "Urine pH",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "urine_protein",
        defaultTitle: "Urine Protein",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.MG_DL],
        defaultMultiSelectOptions: ["Negative", "Trace", "1+", "2+", "3+"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "urine_glucose",
        defaultTitle: "Urine Glucose",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.MG_DL],
        defaultMultiSelectOptions: ["Negative", "Trace", "1+", "2+", "4+"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Urology"},
        ]
    },
    {
        id: "urine_ketones",
        defaultTitle: "Urine Ketones",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Trace", "Small", "Moderate", "Large"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Urology"},
        ]
    },
    {
        id: "urine_bilirubin",
        defaultTitle: "Urine Bilirubin",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Positive"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Urology"},
        ]
    },
    {
        id: "urine_urobilinogen",
        defaultTitle: "Urine Urobilinogen",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Normal", "Elevated", "Low"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Urology"},
        ]
    },
    {
        id: "urine_nitrites",
        defaultTitle: "Urine Nitrites",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Positive"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Specialty", subtag: "Urology"},
        ]
    },
    {
        id: "urine_leukocyte_esterase",
        defaultTitle: "Urine Leukocyte Esterase",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Negative", "Trace", "Small", "Moderate", "Large"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Urology"},


        ]
    },





















    {
        id: "ph_level",
        defaultTitle: "pH Level",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },

    {
        id: "fecal_fat_content",
        defaultTitle: "Fecal Fat Content",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.GRAMS_24HOUR_COLLECTION, CoreUnitType.PERCENTAGE],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Digestion"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },

    {
        id: "microbial_diversity_indices",
        defaultTitle: "Microbial Diversity Indices (e.g., Shannon Index)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.INDEX],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Trending Topics", subtag: "Gut Health"},

            {tag: "Trending Topics", subtag: "Gut Health"}

        ]
    },

    {
        id: "quantification_of_specific_bacterial_species",
        defaultTitle: "Quantification of Specific Bacterial Species",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        defaultMultiSelectOptions: [
            "Bacteroides", "Firmicutes", "Actinobacteria", "Proteobacteria", "Other"
        ],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Gut Health"},

        ]
    },

    {
        id: "hair_quality",
        defaultTitle: "Hair Quality",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: [
            "Dry", "Oily", "Thinning", "Strong", "Frizzy", "Other"
        ],
        filters: [
            {tag: "Body System", subtag: "Hair"},
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Tracking Method", subtag: "Survey"},

        ]
    },

    {
        id: "calprotectin_levels",
        defaultTitle: "Calprotectin Levels",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.UG_G, CoreUnitType.MG_L],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },

    {
        id: "ova_and_parasite_examination",
        defaultTitle: "Ova and Parasite Examination",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Positive", "Negative", "Not Tested"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },

    {
        id: "stool_culture",
        defaultTitle: "Stool Culture",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Positive", "Negative", "Mixed"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Gut Health"},
        ]
    },

    {
        id: "fecal_occult_blood_test",
        defaultTitle: "Fecal Occult Blood Test",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Positive", "Negative"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },






















    {
        id: "headache_quality",
        defaultTitle: "Headache Quality",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Throbbing", "Sharp", "Dull", "Pressure", "Other"],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "headache_location",
        defaultTitle: "Headache Location",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Forehead", "Temples", "Back of Head", "One Side", "Other"],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "digestive_enzyme_levels",
        defaultTitle: "Digestive Enzyme Levels",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.U_L],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Digestion"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "mucus_presence",
        defaultTitle: "Mucus Presence",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Present", "Absent"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Area of Optimization", subtag: "Digestion"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "parasite_detection",
        defaultTitle: "Parasite Detection",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Positive", "Negative"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "microbiome_analysis",
        defaultTitle: "Microbiome Analysis",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["16S rRNA", "Metagenomics", "Other"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Area of Optimization", subtag: "Immune Resilience"},
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "hair_loss",
        defaultTitle: "Hair Loss",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Hair"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "oily_scalp",
        defaultTitle: "Oily Scalp",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Hair"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Body System", subtag: "Skin"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "dry_scalp",
        defaultTitle: "Dry Scalp",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Hair"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Body System", subtag: "Skin"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "headache_frequency",
        defaultTitle: "Headache Frequency",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Specialty", subtag: "Neurology"},
        ]
    },
    {
        id: "headache_duration",
        defaultTitle: "Headache Duration",
        inputTypes: [CoreInputType.TIME, CoreInputType.NUMBER],

        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Area of Optimization", subtag: "Recovery"},

        ]
    },
    {
        id: "headache_intensity",
        defaultTitle: "Headache Intensity",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Area of Optimization", subtag: "Recovery"},


        ]
    },
    {
        id: "headache_time_of_onset",
        defaultTitle: "Headache Time of Onset",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Health Domain", subtag: "Behavioral"},

            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Area of Optimization", subtag: "Recovery"},
        ]
    },



















    {
        id: "active_minutes",
        defaultTitle: "Active Minutes",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Exercise & Movement"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Trending Topics", subtag: "Metabolic Health"}
        ]
    },
    {
        id: "prescribed_pharmaceuticals",
        defaultTitle: "Prescribed Pharmaceuticals",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Drug A", "Drug B", "Other"],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Tracking Method", subtag: "App integration"}
        ]
    },
    {
        id: "over_the_counter_pharmaceuticals",
        defaultTitle: "Over-the-Counter Pharmaceuticals",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TEXT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Drug X", "Drug Y", "Other"],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "supplements",
        defaultTitle: "Supplements",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Vitamin", "Mineral", "Herbal", "Other"],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },

    {
        id: "blood_pressure",
        defaultTitle: "Blood Pressure",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MM_Hg],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Health Domain", subtag: "Behavioral"},

        ]
    },

    {
        id: "heart_rate",
        defaultTitle: "Heart Rate",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.BPM],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Area of Optimization", subtag: "Energy Optimization"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
        ]
    },

    {
        id: "heart_rate_variability",
        defaultTitle: "Heart Rate Variability (HRV)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MS],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Cardiology"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Area of Optimization", subtag: "Energy Optimization"},
            {tag: "Area of Optimization", subtag: "Recovery"},
        ]
    },





















    {
        id: "printed_media",
        defaultTitle: "Printed Media",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.COUNT, CoreUnitType.TIME, CoreUnitType.PAGES],
        defaultMultiSelectOptions: ["Books", "Magazines", "Newspapers", "Other"],
        filters: [
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Intellectual"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Cognitive Performance"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Health Domain", subtag: "Cognitive"}
        ]
    },
    {
        id: "strength_training",
        defaultTitle: "Strength Training",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.TIME],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.TIME],
        defaultMultiSelectOptions: ["Weightlifting", "Bodyweight", "Resistance Bands", "Other"],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Health Domain", subtag: "Physiological"},
        ]
    },
    {
        id: "rate_of_perceived_exertion_rpe",
        defaultTitle: "Rate of Perceived Exertion (RPE)",
        inputTypes: [CoreInputType.SCALE],
        unitTypes: [CoreUnitType.SCALE],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Trending Topics", subtag: "Mental Health"},

            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Orthopedics"}
        ]
    },
    {
        id: "work_power_output",
        defaultTitle: "Work / Power Output",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.WATTS],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
            {tag: "Trending Topics", subtag: "Mental Health"},

            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Specialty", subtag: "Orthopedics"}
        ]
    },
    {
        id: "standing",
        defaultTitle: "Time Standing",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
        ]
    },
    {
        id: "step_count",
        defaultTitle: "Step Count",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},
        ]
    },
    {
        id: "back_pain",
        defaultTitle: "Back Pain",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Low Back", "Mid Back", "Upper Back", "Other"],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}


        ]
    },
    {
        id: "hip_pain_lr",
        defaultTitle: "Hip Pain (L/R)",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Left", "Right", "Both"],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"},



        ]
    },
    {
        id: "water",
        defaultTitle: "Water",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MILLILITER, CoreUnitType.CUPS, CoreUnitType.LITERS],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Nephrology"},
            {tag: "Area of Optimization", subtag: "Digestion"},


        ]
    },
    {
        id: "knee_pain_lr",
        defaultTitle: "Knee Pain (L/R)",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: ["Left", "Right", "Both"],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}

        ]
    },
    {
        id: "cravings",
        defaultTitle: "Cravings",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Sweet", "Salty", "Savory", "Carbohydrate", "Fatty", "Other"],
        filters: [
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },



















    {
        id: "specific_foods_consumed",
        defaultTitle: "Specific Foods Consumed",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTISELECT],
        defaultMultiSelectOptions: [
            "Fruits", "Vegetables", "Grains", "Proteins", "Dairy", "Sweets", "Other"
        ],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
        ]
    },
    {
        id: "shoulder_pain_lr",
        defaultTitle: "Shoulder Pain (L/R)",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Specialty", subtag: "Orthopedics"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}

        ]
    },
    {
        id: "blood_glucose",
        defaultTitle: "Blood Glucose",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG_DL, CoreUnitType.NMOL_L],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Metabolic Health"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Trending Topics", subtag: "Metabolic Health"},

        ]
    },
    {
        id: "timing_of_meals",
        defaultTitle: "Timing of Meals",
        inputTypes: [CoreInputType.TIME, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.TIME, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Weight Management"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
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
        id: "vo2_max_prediction",
        defaultTitle: "VO2 Max Prediction",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: [
            {tag: "Body System", subtag: "Heart"},
            {tag: "Body System", subtag: "Lungs"},

            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Specialty", subtag: "Cardiology"},

            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Tracking Method", subtag: "App integration"}
        ]
    },
    {
        id: "peak_flow_pefr",
        defaultTitle: "Peak Flow (PEFR)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.LITERS_MIN],
        filters: [
            {tag: "Body System", subtag: "Lungs"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Biohacking"},
        ]
    },
    {
        id: "oxygen_saturation_spo2",
        defaultTitle: "Oxygen Saturation (SpO2)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.PERCENTAGE],
        filters: [
            {tag: "Body System", subtag: "Lungs"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Specialty", subtag: "Cardiology"},
        ]
    },
    {
        id: "respiratory_rate",
        defaultTitle: "Respiratory Rate",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.BREATHS_MIN],
        filters: [
            {tag: "Body System", subtag: "Lungs"},
            {tag: "Body System", subtag: "Heart"},
            {tag: "Specialty", subtag: "Cardiology"},


            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},

        ]
    },
    {
        id: "menstrual_cycle",
        defaultTitle: "Menstrual Cycle",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.DATE_RANGE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.DATE_RANGE],
        defaultMultiSelectOptions: [
            "Menstruation", "Follicular", "Ovulation", "Luteal", "Other"
        ],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
        ]
    },



















    {
        id: "testosterone",
        defaultTitle: "Testosterone",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.NG_DL, CoreUnitType.NMOL_L],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Measurement Unit", subtag: "Concentration"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Health Domain", subtag: "Biochemical"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Lab test"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
        ]
    },
    {
        id: "premature_ejaculation",
        defaultTitle: "Premature Ejaculation",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Wellness Pillar", subtag: "Social"},
            // {tag: "Wellness Pillar", subtag: "Mental Well-Being"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "erectile_dysfunction",
        defaultTitle: "Erectile Dysfunction",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Wellness Pillar", subtag: "Social"},
        ]
    },
    {
        id: "sexual_activity_frequency",
        defaultTitle: "Sexual Activity Frequency",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Specialty", subtag: "Psychiatry"}
        ]
    },
    {
        id: "erection_frequency",
        defaultTitle: "Erection Frequency",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Health Domain", subtag: "Physiological"},
            // {tag: "Wellness Pillar", subtag: "Sexual Health"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "nighttime_erection_frequency",
        defaultTitle: "Nighttime Erection Frequency",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Health Domain", subtag: "Physiological"},
            // {tag: "Wellness Pillar", subtag: "Sleep Quality"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "orgasm",
        defaultTitle: "Orgasm",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTIPLE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Specialty", subtag: "Psychiatry"},
        ]
    },
    {
        id: "masturbation",
        defaultTitle: "Masturbation",
        inputTypes: [CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.MULTIPLE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},

        ]
    },
    {
        id: "fantasies",
        defaultTitle: "Fantasies",
        inputTypes: [CoreInputType.TEXT],
        unitTypes: [CoreUnitType.UNITLESS],
        filters: [
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
        ]
    },
    {
        id: "sexual_activity_timing",
        defaultTitle: "Sexual Activity Timing",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.TIME],
        filters: [
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Tracking Method", subtag: "Manual"},

            {tag: "Area of Optimization", subtag: "Mental Well-Being"},

        ]
    },
    {
        id: "erection_refractory_period",
        defaultTitle: "Erection Refractory Period",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.TIME],
        filters: [
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Specialty", subtag: "Psychiatry"},
        ]
    },




















    {
        id: "erection_duration",
        defaultTitle: "Erection Duration",
        inputTypes: [CoreInputType.TIME, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SECONDS, CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "nighttime_erection_duration",
        defaultTitle: "Nighttime Erection Duration",
        inputTypes: [CoreInputType.TIME, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.SECONDS, CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Tracking Method", subtag: "Manual"}
        ]
    },
    {
        id: "ejaculation_latency",
        defaultTitle: "Ejaculation Latency",
        inputTypes: [CoreInputType.TIME, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.SECONDS, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
        ]
    },
    {
        id: "cervical_mucus_consistency",
        defaultTitle: "Cervical Mucus Consistency",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Sticky", "Creamy", "Egg White", "Watery", "Dry"],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Manual"},

        ]
    },
    {
        id: "cervical_mucus_texture",
        defaultTitle: "Cervical Mucus Texture",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Smooth", "Chunky", "Thin", "Thick", "Other"],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
        ]
    },
    {
        id: "menstrual_cramps",
        defaultTitle: "Menstrual Cramps",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}
        ]
    },
    {
        id: "pain_during_intercourse",
        defaultTitle: "Pain During Intercourse",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Musculoskeletal"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Wellness Pillar", subtag: "Pain Management"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"}

        ]
    },
    {
        id: "vaginal_dryness",
        defaultTitle: "Vaginal Dryness",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No", "Occasional"],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}
        ]
    },
    {
        id: "pms_symptoms",
        defaultTitle: "PMS Symptoms",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Mood Swings", "Bloating", "Headache", "Cravings", "Other"],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Wellness Pillar", subtag: "Pain Management"}

        ]
    },
    {
        id: "libido_and_arousal",
        defaultTitle: "Libido and Arousal",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
        ]
    },

















    {
        id: "quality_of_erection",
        defaultTitle: "Quality of Erection",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Measurement Unit", subtag: "Rating"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
            {tag: "Trending Topics", subtag: "Fitness & Performance"},
        ]
    },
    {
        id: "orgasm_intensity",
        defaultTitle: "Orgasm Intensity",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Measurement Unit", subtag: "Rating"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Trending Topics", subtag: "Fitness & Performance"},
        ]
    },
    {
        id: "sexual_activity_satisfaction",
        defaultTitle: "Sexual Activity Satisfaction",
        inputTypes: [CoreInputType.SCALE, CoreInputType.MULTISELECT],
        unitTypes: [CoreUnitType.SCALE, CoreUnitType.MULTISELECT],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Measurement Unit", subtag: "Rating"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Mental Health"},
            {tag: "Trending Topics", subtag: "Fitness & Performance"},
        ]
    },
    {
        id: "basal_body_temperature_bbt",
        defaultTitle: "Basal Body Temperature (BBT)",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.FAHRENHEIT, CoreUnitType.CELSIUS],
        filters: [
            {tag: "Body System", subtag: "Hormones"},
            {tag: "Measurement Unit", subtag: "Temperature"},
            {tag: "Specialty", subtag: "Obstetrics & Gynecology (OB/GYN)"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Trending Topics", subtag: "Hormone Health"},
        ]
    },
    {
        id: "acne",
        defaultTitle: "Acne",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No", "Occasional"],
        filters: [
            {tag: "Body System", subtag: "Skin"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},

            {tag: "Wellness Pillar", subtag: "Pain Management"},
        ]
    },
    {
        id: "dryness",
        defaultTitle: "Dryness",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No", "Occasional"],
        filters: [
            {tag: "Body System", subtag: "Skin"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Wellness Pillar", subtag: "Reproductive Health"},
            {tag: "Wellness Pillar", subtag: "Pain Management"},
            {tag: "Area of Optimization", subtag: "Aesthetics"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},

        ]
    },
    {
        id: "fatigue",
        defaultTitle: "Fatigue",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        filters: [
            {tag: "Body System", subtag: "Blood"},
            {tag: "Measurement Unit", subtag: "Rating"},
            {tag: "Specialty", subtag: "Endocrinology"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Energy Optimization"},
            {tag: "Trending Topics", subtag: "Longevity"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},

        ]
    },
    {
        id: "perceived_sleep_quality",
        defaultTitle: "Perceived Sleep Quality",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.SCALE],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Rating"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Cognitive"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
        ]
    },
    {
        id: "duration_of_rem",
        defaultTitle: "Duration of REM",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
        ]
    },
    {
        id: "duration_of_light_sleep",
        defaultTitle: "Duration of Light Sleep",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
        ]
    },















    {
        id: "duration_of_deep_sleep",
        defaultTitle: "Duration of Deep Sleep",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Area of Optimization", subtag: "Recovery"},
        ]
    },
    {
        id: "duration_of_wakefulness",
        defaultTitle: "Duration of Wakefulness",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.HOUR, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Health Domain", subtag: "Psychological"}
        ]
    },
    {
        id: "number_of_awakenings",
        defaultTitle: "Number of Awakenings",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"}
        ]
    },
    {
        id: "waso_duration",
        defaultTitle: "Wake After Sleep (WASO) Duration",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Area of Optimization", subtag: "Recovery"}
        ]
    },
    {
        id: "frequency_of_stage_transitions",
        defaultTitle: "Frequency of Transition Between Sleep Stages",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"}
        ]
    },
    {
        id: "sleep_efficiency",
        defaultTitle: "Sleep Efficiency (Time Asleep/Time in Bed)",
        inputTypes: [CoreInputType.FRACTION, CoreInputType.NUMBER, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.PERCENTAGE, CoreUnitType.UNITLESS, CoreUnitType.SCALE],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Percentage (%)"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"}
        ]
    },
    {
        id: "sleep_onset_latency",
        defaultTitle: "Sleep Onset Latency",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.MINUTES, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"}
        ]
    },
    {
        id: "sleep_duration",
        defaultTitle: "Sleep Duration",
        inputTypes: [CoreInputType.TIME],
        unitTypes: [CoreUnitType.HOUR, CoreUnitType.TIME],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},

            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"}
        ]
    },
    {
        id: "bed_time",
        defaultTitle: "Bed Time",
        inputTypes: [CoreInputType.TIME,],
        unitTypes: [CoreUnitType.TIME,],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"}
        ]
    },
    {
        id: "wake_time",
        defaultTitle: "Wake Time",
        inputTypes: [CoreInputType.TIME,],
        unitTypes: [CoreUnitType.TIME,],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Time"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"}
        ]
    },




















    {
        id: "skin_temperature",
        defaultTitle: "Skin Temperature",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.DEGREES, CoreUnitType.FAHRENHEIT, CoreUnitType.CELSIUS],
        filters: [
            {tag: "Body System", subtag: "Skin"},
            {tag: "Measurement Unit", subtag: "Temperature"},
            {tag: "Specialty", subtag: "Dermatology"},
            {tag: "Tracking Method", subtag: "Wearable"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Environmental"},
            {tag: "Area of Optimization", subtag: "Energy Optimization"},
            {tag: "Trending Topics", subtag: "Fitness & Performance"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Area of Optimization", subtag: "Hormonal Balance"},
        ]
    },
    {
        id: "cigarettes",
        defaultTitle: "Cigarettes",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.COUNT],
        filters: [
            {tag: "Body System", subtag: "Lungs"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"}
        ]
    },
    {
        id: "nicotine",
        defaultTitle: "Nicotine",
        inputTypes: [CoreInputType.NUMBER, CoreInputType.FRACTION],
        unitTypes: [CoreUnitType.MG],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Pulmonology"},
            {tag: "Specialty", subtag: "Neurology"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Energy Optimization"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
        ]
    },
    {
        id: "psychedelics",
        defaultTitle: "Psychedelics",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.GRAM],
        defaultMultiSelectOptions: ["LSD", "Psilocybin", "DMT", "MDMA", "Other"],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Measurement Unit", subtag: "Quantity"},
            {tag: "Health Domain", subtag: "Psychological"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Wellness Pillar", subtag: "Spiritual"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Biohacking"}
        ]
    },
    {
        id: "marijuana",
        defaultTitle: "Marijuana",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.MULTISELECT, CoreUnitType.GRAM, CoreUnitType.MG, CoreUnitType.COUNT],
        defaultMultiSelectOptions: ["Smoked", "Edibles", "Vaporized", "Other"],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Behavioral"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Survey"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Wellness Pillar", subtag: "Emotional"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},

        ]
    },
    {
        id: "cocaine",
        defaultTitle: "Cocaine",
        inputTypes: [CoreInputType.NUMBER],
        unitTypes: [CoreUnitType.GRAM],
        filters: [
            {tag: "Body System", subtag: "Brain"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Specialty", subtag: "Psychiatry"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Area of Optimization", subtag: "Mental Well-Being"},
            {tag: "Trending Topics", subtag: "Toxin Exposure"},
            {tag: "Wellness Pillar", subtag: "Social"},
            {tag: "Wellness Pillar", subtag: "Emotional"},

            {tag: "Area of Optimization", subtag: "Recovery"},

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