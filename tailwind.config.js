/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                leaf: {
                    50: '#F0FDF4',  // Lightest Green
                    100: '#DCFCE7', // Pale Green
                    200: '#BBF7D0', // Soft Green
                    300: '#86EFAC', // Light Green
                    400: '#4ADE80',
                    500: '#22C55E', // Bright vibrant green
                    600: '#16A34A',
                },
                forest: {
                    800: '#065F46',
                    900: '#022C22', // Very dark/black green for text
                },
                mint: {
                    50: '#F0FDF4', // Very light mint for backgrounds
                    100: '#DCFCE7',
                },
                alabaster: '#F6FBF7', // Subtle minty white background
                paper: '#FFFFFF',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
