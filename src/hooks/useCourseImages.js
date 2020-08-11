import { useStaticQuery, graphql } from "gatsby";

const useCourseImages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { name: { regex: "/course-.*/" } }) {
          nodes {
            name
            cloudinary: childCloudinaryAsset {
              fluid(transformations: ["c_fill"]) {
                ...CloudinaryAssetFluid
              }
            }
          }
        }
      }
    `,
  );
  return data.images.nodes.reduce((images, node) => {
    images[node.name] = node.cloudinary;
    return images;
  }, {});
};

export default useCourseImages;
