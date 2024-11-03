import fetch from "@remix-run/web-fetch";
import * as dotenv from "dotenv";
import invariant from "tiny-invariant";

dotenv.config({ path: ".env" });

const ShopifyApiVersion = "2023-10";

async function postToAdminShopify({ query, variables }) {
  const adminAccessToken = process.env.SHOPIFY_ADMIN_API_PASSWORD;
  invariant(adminAccessToken, "The admin api token is required");
  const shopName = process.env.SHOP_NAME;
  invariant(shopName, "The shop name is required");

  try {
    const response = await fetch(
      `https://${shopName}.myshopify.com/admin/api/${ShopifyApiVersion}/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": adminAccessToken,
        },
        body: JSON.stringify({ query, variables: variables || {} }),
      },
    );

    const result = await response.json();

    if (result.errors) {
      console.error({ errors: result.errors });
    } else if (!result || !result.data) {
      console.warn({ result });
      return undefined;
    }

    return result.data;
  } catch (error) {
    console.error(error);
  }
}

async function generateToken() {
  const response = await postToAdminShopify({
    query: `
mutation delegateAccessTokenCreate($input: DelegateAccessTokenInput!){
  delegateAccessTokenCreate(input: $input){
    delegateAccessToken {
      accessToken
    }
    shop {
      id
    }
    userErrors {
      field
      message
    }
  }
}
      `,
    variables: {
      input: {
        delegateAccessScope: [
          "read_product_listings",
          "read_files",
          "read_products",
          "read_product_feeds",
          "unauthenticated_write_checkouts",
          "unauthenticated_read_product_listings",
          "unauthenticated_read_product_tags",
          "unauthenticated_read_product_inventory",
          "unauthenticated_read_product_pickup_locations",
          "unauthenticated_write_customers",
          "unauthenticated_read_customer_tags",
          "unauthenticated_write_checkouts",
          "unauthenticated_read_content",
          "unauthenticated_read_selling_plans",
          "unauthenticated_read_customers",
          "unauthenticated_read_checkouts",
        ],
      },
    },
  });

  if (!response?.delegateAccessTokenCreate) {
    console.log(JSON.stringify(response, null, 2));
    console.error("No delegate access token");
  } else {
    console.log(
      response.delegateAccessTokenCreate.delegateAccessToken.accessToken,
    );
  }
}

generateToken();
