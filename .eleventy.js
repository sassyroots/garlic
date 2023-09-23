const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/img": "img"});

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  //shortcodes
  eleventyConfig.addShortcode('icon', (arg) => `<i class="${arg}"></i>`);
  eleventyConfig.addShortcode('logo', (arg) => `<img src="/img/site/logo-${arg}.png" />`);


  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}