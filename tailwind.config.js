/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#9333ea',
                secondary: '#c084fc',
                tertiary: '#d8b4fe',
                hover: '#f3f4f6'
            }
        }
    },
    variants: {},
    plugins: []
}
