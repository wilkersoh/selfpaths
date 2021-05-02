const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "tsx", "md", "mdx"], // under pages folder it will compile md and mdx to html
});
