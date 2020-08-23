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
    <section className="md:grid md:grid-cols-2 md:gap-x-12 my-4 md:my-8 lg:my-12">
      <div className="text-base lg:text-lg font-normal text-gray-800 leading-relaxed md:mr-4">
        <h2 className="text-lg lg:text-xl font-semibold leading-normal mb-3 md:mb-5 lg:mb-8">
          Le yoga est un style de vie
        </h2>
        <p className="mb-3 md:mb-5 lg:mb-8">
          Mes cours représente ma pratique personnelle. Ils évoluent donc avec
          ce que j'explore, découvre et expérimente.
        </p>
        <div className="mb-3 md:mb-5 lg:mb-8">
          <span className="font-medium">Mes influences actuelles :</span>
          <ol className="list-disc list-inside mt-1 leading-loose">
            <li>hatha yoga, vinyasa yoga</li>
            <li>CSV (core strength vinyasa) yoga et yoga shred</li>
            <li>LYT yoga method</li>
            <li>Primal vinyasa yoga</li>
            <li>Budokon yoga</li>
            <li>Animal flow</li>
          </ol>
        </div>
        <div className="mb-3 md:mb-5 lg:mb-8">
          <span className="font-medium">Mes formations :</span>
          <ol className="list-disc list-inside mt-1 leading-loose">
            <li>
              Hatha yoga:{" "}
              <a
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
                href="https://ecolefrancaisedeyoga.fr"
                target="_blank"
                rel="noreferrer noopener"
              >
                EFY, école française du yoga
              </a>
            </li>
            <li>
              Yoga alchimique, avec{" "}
              <a
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
                href="https://www.dayogaschool.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Mira Jamadi
              </a>
            </li>
            <li>
              <a
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
                href="https://www.running-yogis.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Running yoga
              </a>
            </li>
            <li>
              En cours de formation :{" "}
              <a
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
                href="https://lytyoga.com/about-us/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LYT yoga method
              </a>
            </li>
          </ol>
        </div>
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
