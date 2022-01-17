import { useStaticQuery, graphql } from "gatsby";

const useCourseImages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allCloudinaryImage(filter: { name: { regex: "/course-.*/" } }) {
          nodes {
            name
            gatsbyImageData(
              width: 600
              quality: 80
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    `,
  );
  return data.images.nodes.reduce((images, node) => {
    images[node.name] = node.gatsbyImageData;
    return images;
  }, {});
};

export default useCourseImages;
