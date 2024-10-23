import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
		flowbite.content(),
	],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  darkMode: 'class',
	theme: {
		fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
		extend: {
			colors: {
        'accent': '#5a97cc',
        'accent-light': '#8aa5e3',
        'accent-dark': '#0e568c',
        'accent-button': '#063875',
        'black': '#323232',
        'black-100': '#2b2d33',
        'white-txt': '#c2c2d1',
        'gray-black': '#151519'
      },
		},
	},
	plugins: [
		require('flowbite/plugin'),
		flowbite.plugin(),
	],
}
