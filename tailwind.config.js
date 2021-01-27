const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.md"],
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      whatsapp: {
        "light-green": "#25D366",
        "chat-bg": "#ECE5DD",
        "chat-bg-dark": "#121c23",
        "input-bg-dark": "#2c393f",
        "outgoing-chat-bg": "#DCF8C6",
        "outgoing-chat-bg-dark": "#128C7E",
      },
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
