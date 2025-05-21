import {CoreInputType, CoreUnitType} from "@/types/core-metric";
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

            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Aesthetics"},
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
            {tag: "Area of Optimization", subtag: "Intellectual"},
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
            {tag: "Area of Optimization", subtag: "Intellectual"},
            {tag: "Trending Topics", subtag: "Biohacking"},
            {tag: "Area of Optimization", subtag: "Intellectual"},
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

            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Recovery"},
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
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE, CoreUnitType.DATE_RANGE, CoreUnitType.DATE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Urinary"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Area of Optimization", subtag: "Recovery"},
            {tag: "Wellness Pillar", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Survey"}

        ]
    },

    {
        id: "sti",
        defaultTitle: "STI",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.DATE_RANGE,],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE, CoreUnitType.DATE_RANGE, CoreUnitType.DATE],
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
            {tag: "Wellness Pillar", subtag: "Recovery"},
            {tag: "Tracking Method", subtag: "Manual"}
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
            {tag: "Wellness Pillar", subtag: "Recovery"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Sleep Quality"},
            {tag: "Area of Optimization", subtag: "Sleep Quality"},
            {tag: "Trending Topics", subtag: "Sleep Optimization"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Sleep Quality"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
            {tag: "Area of Optimization", subtag: "Physical Performance"},
            {tag: "Tracking Method", subtag: "Manual"},
            {tag: "Specialty", subtag: "Urology"},
            {tag: "Health Domain", subtag: "Physiological"},
            {tag: "Wellness Pillar", subtag: "Physical Performance"},

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
            {tag: "Trending Topics", subtag: "Immune Resilience"},
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
            {tag: "Trending Topics", subtag: "Immune Resilience"},
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
            {tag: "Trending Topics", subtag: "Immune Resilience"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
            {tag: "Wellness Pillar", subtag: "Recovery"}
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Trending Topics", subtag: "Gut Health"}
        ]
    },
    {
        id: "bloating",
        defaultTitle: "Bloating",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Wellness Pillar", subtag: "Nutrition & Hydration"},
            {tag: "Area of Optimization", subtag: "Gut Health"},
            {tag: "Trending Topics", subtag: "Gut Health"},
            {tag: "Tracking Method", subtag: "Survey"}
        ]
    },
    {
        id: "gas",
        defaultTitle: "Gas",
        inputTypes: [CoreInputType.MULTISELECT, CoreInputType.SCALE],
        unitTypes: [CoreUnitType.PRESENCE_ABSENCE, CoreUnitType.SCALE],
        defaultMultiSelectOptions: ["Yes", "No"],
        filters: [
            {tag: "Body System", subtag: "Gut"},
            {tag: "Health Domain", subtag: "Symptoms"},
            {tag: "Specialty", subtag: "Gastroenterology"},
            {tag: "Area of Optimization", subtag: "Gut Health"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
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
            {tag: "Wellness Pillar", subtag: "Physical Performance"},
            {tag: "Tracking Method", subtag: "App integration"},
            {tag: "Body System", subtag: "Skin"},
        ]
    }
]