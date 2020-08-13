import React from "react";
import { SEO } from "../components";
import { Layout, PageTitle } from "../components";
import { graphql } from "gatsby";
import Image from "gatsby-image";

export const query = graphql`
  query {
    image: file(name: { eq: "about" }) {
      cloudinary: childCloudinaryAsset {
        fluid(transformations: ["c_fill", "g_auto:subject"]) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`;

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <PageTitle>A propos...</PageTitle>
    <section className="md:grid md:grid-cols-2 md:col-gap-12 my-4 md:my-8 lg:my-12">
      <div className="text-base lg:text-lg font-normal text-gray-800 leading-relaxed md:mr-4">
        <h2 className="text-lg lg:text-xl font-semibold leading-normal mb-3 md:mb-5 lg:mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          distinctio sunt
        </h2>
        <p className="mb-3 md:mb-5 lg:mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos
          soluta eveniet non tempore molestiae impedit? Doloribus totam, itaque
          cumque dolorum iusto vero, vitae rem, consequatur corrupti harum
          distinctio recusandae.
        </p>
        <p className="mb-3 md:mb-5 lg:mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolor autem, magni vitae dignissimos cupiditate reprehenderit
          assumenda amet recusandae dicta enim omnis quae aut repellat dolores
          facilis nulla rem minus?
        </p>
        <p className="mb-3 md:mb-5 lg:mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          accusamus unde praesentium. Illo ab omnis consectetur fugiat voluptas,
          maiores reprehenderit nesciunt alias sint nobis velit quia vel
          voluptatem minus culpa!
        </p>
      </div>
      <Image
        className="md:ml-8 rounded-lg object-fill md:object-contain lg:object-fill self-start"
        fluid={data.image.cloudinary.fluid}
        alt="Photo de profile"
      />
    </section>
  </Layout>
);

export default About;
