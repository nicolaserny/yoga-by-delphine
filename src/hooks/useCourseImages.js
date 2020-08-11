import { useStaticQuery, graphql } from "gatsby";

const useCourseImages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        hatha: file(name: { eq: "course-1" }) {
          cloudinary: childCloudinaryAsset {
            fluid(transformations: ["c_fill"]) {
              ...CloudinaryAssetFluid
            }
          }
        }
        vinyassa: file(name: { eq: "course-2" }) {
          cloudinary: childCloudinaryAsset {
            fluid(transformations: ["c_fill"]) {
              ...CloudinaryAssetFluid
            }
          }
        }
        zoom: file(name: { eq: "course-3" }) {
          cloudinary: childCloudinaryAsset {
            fluid(transformations: ["c_fill"]) {
              ...CloudinaryAssetFluid
            }
          }
        }
        studio: file(name: { eq: "course-4" }) {
          cloudinary: childCloudinaryAsset {
            fluid(transformations: ["c_fill"]) {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
    `,
  );
  return data;
};

export default useCourseImages;
