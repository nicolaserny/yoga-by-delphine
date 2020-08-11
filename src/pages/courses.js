import React from "react";
import { SEO, Layout, PageTitle } from "../components";
import Image from "gatsby-image";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    image: file(name: { eq: "course-1" }) {
      cloudinary: childCloudinaryAsset {
        fluid(transformations: ["c_fill"]) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`;

const Courses = ({ data }) => (
  <Layout mainCentered={false}>
    <SEO title="Courses" />
    <PageTitle>Mes cours de yoga à découvrir</PageTitle>
    <div className="grid grid-cols-2 col-gap-24 items-center my-16 w-full">
      <div>
        <h2 className="mb-4 text-xl font-semibold font-normal text-gray-800">
          Hatha yoga
        </h2>
        <p className="text-gray-800 text-base font-normal leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          consectetur rem sed accusamus? Facilis a itaque sint? Facilis officia
          ab molestiae assumenda ullam cumque obcaecati. Adipisci mollitia odio
          repudiandae ipsa!
        </p>
        <p className="mt-4 text-gray-800 text-base font-normal leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam
          perferendis dignissimos quibusdam aperiam nobis possimus, quod magnam
          natus consequatur non incidunt quas similique exercitationem beatae
          eveniet! Rem, quibusdam minus?
        </p>
      </div>
      <Image
        className="rounded-lg"
        fluid={data.image.cloudinary.fluid}
        alt="Hatha yoga"
      />
    </div>
  </Layout>
);

export default Courses;
