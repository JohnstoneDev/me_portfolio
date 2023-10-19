/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      regular : ['Inter', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['60px', {
          lineHeight : '50px',
          letterSpacing : '0px',
          fontWeight : '800',
        }
      ],
    'section' : ['24px', {
        lineHeight : '32px',
        letterSpacing : '0px',
        fontWeight : '600',
      }
     ],
   'button' : ['20px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '500',
      }
    ],
    'regular' : ['18px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
    'small' : ['16px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
  },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },

    colors : {
      'navy' : '#0a192f',
      'slate' : '#8892b0',
      'white' : '#e6f1ff',
      'green' : '#64ffda',
      'transparent' : 'transparent',
      'light-navy' : '#112240',
      'light-slate' : '#a8b2d1',
      'lightest-navy' : '#233554',
      'lightest-slate' : '#ccd6f6',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
