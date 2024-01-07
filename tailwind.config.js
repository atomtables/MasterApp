/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "weather-cyan": "rgb(0, 255, 240)",
                "weather-blue": "rgb(0, 163, 255)",
            }
        },

    },
    plugins: [],
    darkMode: "class"
}