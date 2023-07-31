/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        gray: {
          50: 'var(--color-gray-50)', // #F9FAFB
          100: 'var(--color-gray-100)', // #F3F4F6
          200: 'var(--color-gray-200)', // #E5E7EB
          300: 'var(--color-gray-300)', // #D1D5DB
          400: 'var(--color-gray-400)', // #9CA3AF
          DEFAULT: 'var(--color-gray)', // #6B7280
          600: 'var(--color-gray-600)', // #4B5563
          700: 'var(--color-gray-700)', // #374151
          800: 'var(--color-gray-800)', // #1F2937
          900: 'var(--color-gray-900)', // #111827
        },
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          DEFAULT: 'var(--color-primary)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          light: 'var(--color-primary-200)',
          lighter: 'var(--color-primary-50)',
          dark: 'var(--color-primary-800)',
          darker: 'var(--color-primary-900)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          DEFAULT: 'var(--color-secondary)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          light: 'var(--color-secondary-200)',
          lighter: 'var(--color-secondary-50)',
          dark: 'var(--color-secondary-800)',
          darker: 'var(--color-secondary-900)',
        },
        tertiary: {
          50: 'var(--color-tertiary-50)',
          100: 'var(--color-tertiary-100)',
          200: 'var(--color-tertiary-200)',
          300: 'var(--color-tertiary-300)',
          400: 'var(--color-tertiary-400)',
          DEFAULT: 'var(--color-tertiary)',
          600: 'var(--color-tertiary-600)',
          700: 'var(--color-tertiary-700)',
          800: 'var(--color-tertiary-800)',
          900: 'var(--color-tertiary-900)',
          light: 'var(--color-tertiary-200)',
          lighter: 'var(--color-tertiary-50)',
          dark: 'var(--color-tertiary-800)',
          darker: 'var(--color-tertiary-900)',
        },
        complementary: {
          50: 'var(--color-complementary-50)',
          100: 'var(--color-complementary-100)',
          200: 'var(--color-complementary-200)',
          300: 'var(--color-complementary-300)',
          400: 'var(--color-complementary-400)',
          DEFAULT: 'var(--color-complementary)',
          600: 'var(--color-complementary-600)',
          700: 'var(--color-complementary-700)',
          800: 'var(--color-complementary-800)',
          900: 'var(--color-complementary-900)',
          light: 'var(--color-complementary-200)',
          lighter: 'var(--color-complementary-50)',
          dark: 'var(--color-complementary-800)',
          darker: 'var(--color-complementary-900)',
        },
      },
      screens: {
        xs: '480px', // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      },
    },
  },
  variants: {},
  plugins: [require('flowbite/plugin')],
  content: [
    // other files...
    './node_modules/flowbite.{js,ts}',
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    },
  },
}
