module.exports = {
    collectCoverageFrom: [
        "app/**/*.{js,jsx}",
        "!/*.{test.js}",
        "!**/coverage/**"
    ],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
}