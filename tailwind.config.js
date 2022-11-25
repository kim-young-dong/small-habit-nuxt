/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: ['light', 'dark'],
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
    },
    colors: {
      'card-100': {
        light: '#B8B1F0',
        DEFAULT: '#887DE5',
      },
      'card-200': {
        light: '#EAA2A6',
        DEFAULT: '#887DE5',
      },
      'card-300': {
        light: '#A8DDAD',
        DEFAULT: '#55BAA8',
      },
      'card-400': {
        light: '#FFD98E',
        DEFAULT: '#F5BD4E',
      },
      'card-500': {
        light: '#AFC2FF',
        DEFAULT: '#7191F8',
      },
      'card-600': {
        light: '#95DFD2',
        DEFAULT: '#55BAA8',
      },
      'card-700': {
        light: '#FFBAAA',
        DEFAULT: '#F29782',
      },
      'card-800': {
        light: '#FFB6F2',
        DEFAULT: '#E28BD2',
      },
    },
  },
}
