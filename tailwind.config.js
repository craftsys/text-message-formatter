module.exports = {
  content: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.md"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        whatsapp: {
          "light-green": "#25D366",
          "chat-bg": "#e5ddd5",
          "chat-bg-dark": "#0d1519",
          "input-bg-dark": "#2c393f",
          "outgoing-chat-bg": "#DCF8C6",
          "outgoing-chat-bg-dark": "#056162",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
