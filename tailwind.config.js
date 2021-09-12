module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          'serif': ['Cormorant', 'Georgia', 'Times New Roman', 'serif'],
          'sans': ['Poppins', 'Arial', 'Helvetica', 'sans']
        },
        colors: {
          'cadet': {
            DEFAULT: '#556871',
          },
          'olive': {
            DEFAULT: '#3D2F00',
          },
          'bone': {
            DEFAULT: '#EFEDE6',
          },
          'mauve': {
            DEFAULT: '#3E363F',
          },
          'sienna': {
            DEFAULT: '#340A09',
          },
          'eggplant': {
            DEFAULT: '#0E0606',
          }
        },
      }
    },
    variants: {},
    plugins: [],
  }