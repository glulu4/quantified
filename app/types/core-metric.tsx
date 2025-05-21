
export enum TopLevelFilter {
    Interest = "Interest",
    BodyPart = "Body Part",
    HealthCategory = "Health Category (Tag)",
    Goal = "Goal",
    Wellness = "Wellness",
}



export enum Interest {
    Nutrition = "Nutrition",
    Hormones = "Hormones / Endocrine",
    BodyComposition = "Body Composition & Measurements",
    VitalSigns = "Vital Signs & Basic Health Indicators",
    LifestyleHabits = "Lifestyle & Habits",
    Sleep = "Sleep",
    Recovery = "Recovery",
    ExerciseActivity = "Exercise & Activity",
    LabClinical = "Lab & Clinical Biomarkers",
    GIUrinaryHealth = "GI & Urinary Health",
    SexualReproductive = "Sexual & Reproductive Health",
    MentalWellBeing = "Mental & Emotional Well-Being",
    PainSymptoms = "Pain & General Symptoms",
    EnvironmentFactors = "Environment & External Factors",
    SpecializedTests = "Advanced / Specialized Tests",
    AgingLongevity = "Aging & Longevity",
    CognitivePerformance = "Cognitive Performance",
    Hydration = "Hydration",
    ChronicConditions = "Chronic Conditions",
    DermatologicalHealth = "Dermatological Health",
    None = "No Category Selected",
}

export enum BodyPart {
    HeadNeck = "Head & Neck",
    ShouldersArms = "Shoulders & Arms",
    ChestBack = "Chest & Back",
    AbdominalPelvic = "Abdominal/Pelvic",
    LegsFeet = "Legs & Feet",
    WholeBody = "Whole Body",
    SpineBack = "Spine/Back",
    Pelvis = "Pelvis",
    Joints = "Joints",
    None = "None",
}

export enum HealthCategory {
    Nutrition = "Nutrition",
    Exercise = "Exercise",
    Hormones = "Hormones / Endocrine",
    Immunity = "Immunity",
    MentalHealth = "Mental Health",
    Sleep = "Sleep",
    Pain = "Pain",
    SexualHealth = "Sexual Health",
    ReproductiveHealth = "Reproductive Health",
    BloodTest = "Blood Test",
    GIHealth = "GI Health / Gut",
    Cardiovascular = "Cardiovascular",
    Metabolic = "Metabolic",
    Lifestyle = "Lifestyle",
    HairScalpHealth = "Hair & Scalp Health",
    SubstanceUse = "Substance Use",
    VitalSigns = "Vital Signs & Measurements",
    MensHealth = "Men’s Health",
    WomensHealth = "Women’s Health",
    DermatologicalHealth = "Dermatological Health",
    AddictionRecovery = "Addiction & Recovery",
    MicrobiomeHealth = "Microbiome Health",
    RespiratoryHealth = "Respiratory Health",
    BloodPanels = "Blood Panels",
    None = "No Specific Tag",
}

export enum Goal {
    WeightManagement = "Weight Management",
    MuscleGainStrength = "Muscle Gain / Strength",
    CardiovascularHealth = "Cardiovascular Health",
    MetabolicControl = "Metabolic Control",
    StressReduction = "Stress Reduction",
    SleepImprovement = "Sleep Improvement",
    HormoneBalance = "Hormone Balance",
    GIDigestiveWellness = "GI / Digestive Wellness",
    UrinaryHealth = "Urinary Health",
    PainManagement = "Pain Management",
    SexualReproductiveGoals = "Sexual / Reproductive Goals",
    OverallWellness = "Overall Wellness",
    HabitTracking = "Habit Tracking",
    PostureImprovement = "Posture Improvement",
    MobilityFlexibility = "Mobility & Flexibility",
    RecoveryOptimization = "Recovery Optimization",
    CognitiveEnhancement = "Cognitive Enhancement",
    SkinHealthGoals = "Skin Health Goals",
    None = "No Specific Goal",
}

export enum Wellness {
    PhysicalWellness = "Physical Wellness",
    MentalWellness = "Mental Wellness",
    Lifestyle = "Lifestyle",
    SelfCareRecovery = "Self-Care & Recovery",
    EnergyFatigue = "Energy & Fatigue",
    SocialLifestyle = "Social & Lifestyle",
    SleepHygiene = "Sleep Hygiene",
    Performance = "Performance",
}

export enum CoreUnitType {
    INCH = "inch",
    CENTIMETERS = "centimeters",
    LBS = "lbs",
    KILOS = "kilos",
    MG_DL = "mg/dL",
    NMOL_L = "nmol/L",
    UMOL_L = "µmol/L",
    MINUTES = "minutes",
    HOUR = "HOUR",
    MILES = "miles",
    KILOMETERS = "kilometers",
    GRAM = "gram",
    MILLIGRAM = "milligram",
    MICROGRAM = "microgram",    // <-- New addition for microgram measurements
    IU = "IU",                 // <-- New addition for IU measurements
    DATE = "date",
    SCALE = "scale",
    MILLIONS_UL = "millions/μL",
    THOUSANDS_UL = "thousands/μL",
    MEQ_L = "mEq/L",
    U_L = "U/L",
    UG_DL = "μg/dL",
    NG_DL = "ng/dL",
    PERCENTAGE = "percentage",
    NG_ML = "ng/mL",
    MG_L = "mg/L",
    UIU_ML = "μIU/mL",
    UNITLESS = "unitless",
    PRESENCE_ABSENCE = "Presence/Absence",
    INDEX = "index",
    GRAMS_24HOUR_COLLECTION = "Grams_24hourCollection",
    UG_G = "μg/g",
    CFU_G = "CFU/g",
    MULTIPLE = "multiple",
    TIME = "time",
    MS = "ms",
    PAGES = "pages",
    COUNT = "count",
    WATTS = "watts",
    KCAL = "kcal",
    MILLILITER = "milliliter",
    KILOGRAM = "kilogram",
    BREATHS_MIN = "breaths/min",
    LITERS_MIN = "liters/min",
    OUNCE = "Ounce",
    DRINKS = "Drinks",
    CUPS = "cups",
    SECONDS = "seconds",
    DATE_RANGE = "Date Range",
    MG = "milli gram",
    DEGREES = "degrees",
    AQI = "Air Quality Index",
    UNITS_G = "units per gram",
    MM_Hg = "mm Hg",
    BPM = "Beats per minute",
    SETS = "Sets",
    REPS = "Reps",
    UL_KILOGRAM_MIN = "",
    CELSIUS = "Celsius",
    FAHRENHEIT = "Fahrenheit",
    CUSTOM = "",
    MULTISELECT = "Multi Select",
}

export enum CoreInputType {
    SCALE = "Scale", // slider 
    TEXT = "Text",
    DATE = "Date",
    TIME = "Time", // like 9:00 AM
    NUMBER = "Number",
    FRACTION = "Fraction",
    FOOD_DB = "Food lookup", // food database 
    MULTISELECT = "Multi Select",
    DATE_RANGE = "Date Range",
}


export const filterMap: Record<TopLevelFilter, Record<string, string>> = {
    [TopLevelFilter.Interest]: Interest,
    [TopLevelFilter.BodyPart]: BodyPart,
    [TopLevelFilter.HealthCategory]: HealthCategory,
    [TopLevelFilter.Goal]: Goal,
    [TopLevelFilter.Wellness]: Wellness,
};

type FilterValueArray =
    | Interest[]
    | BodyPart[]
    | HealthCategory[]
    | Goal[]
    | Wellness[];

export interface CoreMetric {
    id: string;
    defaultTitle: string;
    inputTypes: CoreInputType[];
    unitTypes: CoreUnitType[];
    defaultMultiSelectOptions?: string[];
    filters: Partial<Record<TopLevelFilter, FilterValueArray>>;
}


export enum MetricPackType {
    Nutrition = "Nutrition",
    Exercise = "Exercise",
    Hormones = "Hormones",
    Sleep = "Sleep",
}

export interface CoreMetricPack {
    id: string;
    packType: MetricPackType;
    inputTypes: CoreInputType[];
    title: string;
    subtitle: string;
    iconKey: string;
}
