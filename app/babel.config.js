module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            [
                'babel-preset-expo',
                // remove the following line if you want to use the React compiler
                {
                    reactCompiler: true,
                    jsxImportSource: "nativewind"
                }, // Correct way to enable React Compiler
                // {jsxImportSource: "nativewind"},

            ],
            "nativewind/babel",
        ],
        plugins: [
            // Ensure 'react-native-reanimated/plugin' is last
            'react-native-reanimated/plugin',
        ],
    };
};
