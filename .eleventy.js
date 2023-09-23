const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/img": "img"});

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );

  //shortcodes
  eleventyConfig.addShortcode('icon', (arg) => `<i class="${arg}"></i>`);
  eleventyConfig.addShortcode('logo', (arg) => `<img src="/img/site/logo-${arg}.png" />`);

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  // base folder structure
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