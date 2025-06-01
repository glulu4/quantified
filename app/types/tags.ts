export const TAGS = [
    'Body System',
    'Measurement Unit',
    'Specialty',
    'Tracking Method',
    'Health Domain',
    'Wellness Pillar',
    'Area of Optimization',
    'Trending Topics',
] as const;

export type Tag = typeof TAGS[number];

export const SUBTAGS = {
    'Body System': [
        'Brain',
        'Skin',
        'Hair',
        'Liver',
        'Musculoskeletal',
        'Heart',
        'Gut',
        'Lungs',
        'Blood',
        'Hormones',
        'Urinary',
    ] as const,

    'Measurement Unit': [
        'Length & Circumference',
        'Weight',
        'Volume',
        'Calories',
        'Concentration',
        'Time',
        'Distance',
        'Temperature',
        'Rating',
        'Percentage (%)',
        'Speed',
        'Quantity',
        'Other',
    ] as const,

    'Specialty': [
        'Cardiology',
        'Dermatology',
        'Endocrinology',
        'Gastroenterology',
        'Neurology',
        'Obstetrics & Gynecology (OB/GYN)',
        'Orthopedics',
        'Psychiatry',
        'Pulmonology',
        'Rheumatology',
        "Nephrology",
        'Hematology',
        'Urology',
    ] as const,

    'Tracking Method': [
        'Wearable',
        'Manual',
        'Lab test',
        'Imaging',
        'Survey',
        'Scale',
        "Food lookup",
        'App integration',
    ] as const,

    'Health Domain': [
        'Physiological',
        'Biochemical',
        'Behavioral',
        'Psychological',
        'Cognitive',
        'Symptoms',
        'Environmental',
    ] as const,

    'Wellness Pillar': [
        'Exercise & Movement',
        'Nutrition & Hydration',
        'Social',
        'Emotional',
        'Spiritual',
        'Intellectual',
        'Environmental',
        'Reproductive Health',
        "Pain Management",

    ] as const,

    'Area of Optimization': [
        'Longevity',
        'Aesthetics',
        'Physical Performance',
        'Weight Management',
        'Mental Well-Being',
        'Energy Optimization',
        'Recovery',
        'Cognitive Performance',
        'Sleep Quality',
        'Body Composition',
        'Metabolic Health',
        'Hormonal Balance',
        'Immune Resilience',
        "Digestion",
    ] as const,

    'Trending Topics': [
        'Gut Health',
        'Hormone Health',
        'Toxin Exposure',
        'Biohacking',
        'Longevity',
        'Metabolic Health',
        'Sleep Optimization',
        'Mental Health',
        'Fitness & Performance',
    ] as const,
} satisfies Record<Tag, readonly string[]>;

// 3) Helper type: for a given Tag T, SubtagOf<T> is the union of its possible subtags
export type SubtagsMap = typeof SUBTAGS;
export type SubtagOf<T extends Tag> = SubtagsMap[T][number];

export type SubTag = SubtagOf<Tag>;


// export interface FilterTag {
//     tag: Tag;
//     subtag: SubtagsMap[Tag][number];
// }

// All possible subtag values as a union type
export type AllSubtags = SubtagsMap[Tag][number];

// Enumerate all subtags for a tag at runtime (e.g. to build a dropdown):
// const bodySystemOptions: readonly SubtagOf<'Body System'>[] = SUBTAGS['Body System'];


// {tag: "Body System", subtag: "Thyroid"},
//             {tag: "Body System", subtag: "Bone"},

