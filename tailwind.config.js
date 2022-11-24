/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      // {
      //   mytheme: {
      //     primary: '#421482',
      //     secondary: '#63a3ee',
      //     accent: '#EBDC99',
      //     neutral: '#7D7259',
      //     'base-100': '#FFFFFF',
      //     info: '#2463EB',
      //     success: '#16A249',
      //     warning: '#DB7706',
      //     error: '#FF0000',
      //   },
      // },
      'light',
      'dark',
    ],
  },

  theme: {
    fontFamily: {
      sans: [
        'Noto Sans KR',
        'Pretendard',
        'Malgun Gothic',
        '맑은 고딕',
        'Apple SD Gothic Neo',
        'sans-serif',
      ],
    },
    extend: {
      fontSize: {
        '3xl': ['30px', '2.25rem'], //글자체 크기 폴백
        '2xl': ['26px', '2rem'],
        xl: ['22px', '1.75'],
        lg: ['20px', '1.4'],
        base: ['18px', '1.4'],
        sm: ['16px', '1.6'],
        xs: ['14px', '1.4'],
        xxs: ['12px', '1.5'],
      },
      colors: {
        primary: '#421482',
        secondary: '#63a3ee',
        accent: '#EBDC99',
        neutral: '#7D7259',
        'base-100': '#FFFFFF',
        info: '#2463EB',
        success: '#16A249',
        warning: '#DB7706',
        error: '#FF0000',
      },
    },
  },
}
