const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      // in the content prop you should put all the files
      // that are using tailwindcss classes, for example:
      // content: ["./src/**/*.jsx", "./public/index.html"],
      content: [],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
};