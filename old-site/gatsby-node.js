const { generateImageData } = require("gatsby-plugin-image");
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils");
const fetch = require(`node-fetch`);

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

const siteImages = [
  {
    name: "about",
    src: "/v1598175700/yoga-by-delphine/about.jpg",
    width: 1920,
    height: 2876,
  },
  {
    name: "course-yoga-balles",
    src: "/v1614518066/yoga-by-delphine/course-yoga-balles.jpg",
    width: 1920,
    height: 1305,
  },
  {
    name: "course-1",
    src: "/v1598175700/yoga-by-delphine/course-1.jpg",
    width: 1920,
    height: 1280,
  },
  {
    name: "course-2",
    src: "/v1598175700/yoga-by-delphine/course-2.jpg",
    width: 1920,
    height: 1280,
  },
  {
    name: "course-3",
    src: "/v1598175700/yoga-by-delphine/course-3.jpg",
    width: 1920,
    height: 1280,
  },
  {
    name: "course-4",
    src: "/v1598175700/yoga-by-delphine/course-4.jpg",
    width: 1920,
    height: 1280,
  },
  {
    name: "course-5",
    src: "/v1598175700/yoga-by-delphine/course-5.jpg",
    width: 1920,
    height: 1280,
  },
];

async function getBase64ImageUrl(imageId) {
  const response = await fetch(
    `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_100/e_blur:1000,q_auto,f_webp${imageId}`,
  );
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  return `data:image/jpeg;base64,${data}`;
}

const generateImageSource = (baseURL, width, height, format, fit, options) => {
  const src = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_${width}/q_auto,f_auto${baseURL}`;
  return { src, width, height, format };
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
	type CloudinaryImage implements Node @dontInfer {
	  id: ID!
	  name: String!
	  src: String!
	  width: Int!
	  height: Int!
	} 
  `);
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  siteImages.forEach((image) => {
    const nodeMeta = {
      id: createNodeId(`cloudinary-${image.name}`),
      parent: null,
      children: [],
      internal: {
        type: `CloudinaryImage`,
        contentDigest: createContentDigest(image),
      },
    };

    const node = Object.assign({}, image, nodeMeta);
    createNode(node);
  });
};

const resolveGatsbyImageData = async (image, options) => {
  const filename = image.src;

  const sourceMetadata = {
    width: image.width,
    height: image.height,
  };
  const imageDataArgs = {
    ...options,
    pluginName: `cloudinary-plugin`,
    sourceMetadata,
    filename,
    generateImageSource,
    options,
  };
  if (options.placeholder === "blurred") {
    imageDataArgs.placeholderURL = await getBase64ImageUrl(filename);
  }
  const result = generateImageData(imageDataArgs);
  return result;
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    CloudinaryImage: {
      gatsbyImageData: getGatsbyImageResolver(resolveGatsbyImageData, {
        quality: "Int",
        placeholder: "ImagePlaceholder",
      }),
    },
  });
};
