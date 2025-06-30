exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type FeaturesJson implements Node {
      id: ID
      title: String
      description: String
      image: File @fileByRelativePath
    }
      
  `);
};
