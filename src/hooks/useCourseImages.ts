import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type AllCourseImageQuery = {
  images: {
    nodes: Array<CourseImage>;
  };
};

type CourseImage = { name: string; gatsbyImageData: IGatsbyImageData };

const useCourseImages = () => {
  const data = useStaticQuery<AllCourseImageQuery>(
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
  }, {} as Record<string, IGatsbyImageData>);
};

export default useCourseImages;
