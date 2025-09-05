// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'cyber-bg': '#0D0F18',
                'cyber-surface': '#151823',
                'cyber-primary': '#00F5FF', // Neon Cyan
                'cyber-secondary': '#FF00E5', // Neon Magenta
                'cyber-accent': '#7FFF00', // Neon Lime
                'cyber-text-primary': '#EAEAEA',
                'cyber-text-secondary': '#A0A0A0',
            },
            fontFamily: {
                txt: ['Orbitron', 'sans-serif'],
                title: ['Chakra Petch', 'ui-monospace', 'monospace'],
            }
        }
    }
}
