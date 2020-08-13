import React from "react";
import { SEO } from "../components";
import { Layout, PageTitle } from "../components";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="md:grid md:grid-cols-2 md:col-gap-12 mb-12">
      <div className="text-base lg:text-lg font-normal text-gray-800 leading-normal md:mr-4">
        <PageTitle>Me contacter</PageTitle>
        <p className="mt-4 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos
          soluta eveniet non tempore molestiae impedit.
        </p>
        <form name="contactme" data-netlify="true">
          <div className="flex w-full">
            <div className="mb-6 flex-auto mr-4">
              <label className="input-label" htmlFor="firstname">
                Prénom
              </label>
              <input
                className="styled-input"
                name="firstname"
                id="firstname"
                type="text"
              />
            </div>
            <div className="mb-6 flex-auto ml-4">
              <label className="input-label" htmlFor="lastname">
                Nom
              </label>
              <input
                className="styled-input"
                name="lastname"
                id="lastname"
                type="text"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              className="styled-input"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-6">
            <div className="flex">
              <label className="input-label flex-auto" htmlFor="message">
                Message
              </label>
              <div className="flex-auto text-base font-medium text-right text-gray-600 mb-1">
                Max. 500 caractères
              </div>
            </div>
            <textarea
              className="styled-input h-32"
              maxLength="500"
              name="message"
              id="message"
            />
          </div>
          <div className="flex flex-row-reverse">
            <button className="primary" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  </Layout>
);

export default Contact;
