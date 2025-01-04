// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS and JSX files
    './public/index.html'         // Include your HTML file
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-33': '20px', // Your custom font size
      },
      width: {
        '40p': '40%',
        '10p': '10%',
      },
    },
  },
  plugins: [],
};
