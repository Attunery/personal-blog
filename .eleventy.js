module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Add a collection for blog posts
  eleventyConfig.addCollection("post", function(collection) {
    return collection.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    }
  };
}; 