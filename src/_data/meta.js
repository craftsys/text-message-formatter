const appVersion = process.env.npm_package_version;
const siteURL = "https://text-message-formatter.netlify.com";
module.exports = {
  siteURL,
  version: appVersion,
  appName: "Text Formatter",
  siteName: "Text Message Formatter",
  description:
    "Format your text messages for WhatsApp to send beautiful and readable message to your clients for easy sharing.",
  keywords:
    "whatsapp message formatter, whatsapp text formatter, how to format whatsapp message",
  lang: "en",
  locale: "en_in",
  authorName: "Sudhir Mitharwal",
  twitterCreator: "@sudhirmith",
  ogImageUrl: `${siteURL}/assets/images/og-image.png?v=${appVersion}`,
};
