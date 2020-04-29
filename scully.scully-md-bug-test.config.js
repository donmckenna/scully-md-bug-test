exports.config = {
  projectRoot: "./src",
  projectName: "scully-md-bug-test",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};