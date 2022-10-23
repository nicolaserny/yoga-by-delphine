[![Netlify Status](https://api.netlify.com/api/v1/badges/ba16e192-ec1f-4eb7-a751-634ec2312acc/deploy-status)](https://app.netlify.com/sites/yoga-by-delphine/deploys)

# Yoga by Delphine website

This is the website for [yogabydelphine.com](http://www.yogabydelphine.com/).

You can book online and in-studio yoga courses (only available in french).

![yogabydelphine](./screenshot.png)

This site is based on the following stack:

- [Remix](https://remix.run/): full stack web framework
- [Shopify](https://www.shopify.com/) for the e-commerce part
- [Netlify](https://www.netlify.com/) for CI/CD/hosting + serverless functions
- [Cloudinary](https://cloudinary.com/) to manage images
- [Tailwindcss](https://tailwindcss.com/)

## Design

You can find the website design in Figma [here](https://www.figma.com/file/wioiqeZX8Z0hOK0UsHxMAG/YogaByDelphine?node-id=4%3A10)

## Development

> **NOTE:** a Shopify partner account is required.

- Clone the repo:

```bash
$ git clone https://github.com/nicolaserny/yoga-by-delphine.git
```

- Install [pnpm](https://pnpm.io/)

- Go to the project directory and install dependencies:

```bash
$ cd yoga-by-delphine && pnpm install
```

- Configure env variables by creating a _.env.development_ file (use the template file)
- Run the development server:

```bash
$ pnpm run dev
```

## License

[MIT License](https://raw.githubusercontent.com/nicolaserny/yoga-by-delphine/master/LICENSE)
