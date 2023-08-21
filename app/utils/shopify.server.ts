import invariant from "tiny-invariant";

export type ShopifyNode<NodeType> = {
  node: NodeType;
};

export type ShopifyEdges<NodeType> = {
  edges: Array<ShopifyNode<NodeType>>;
};

const ShopifyApiVersion = "2022-10";

type ShopifyResponseType<ResponseDataType> = {
  data?: ResponseDataType;
  errors: unknown;
};

export async function postToShopify<ResponseDataType, VariablesType = {}>({
  query,
  variables,
  buyerIP,
}: {
  query: string;
  buyerIP?: string;
  variables?: VariablesType;
}): Promise<ResponseDataType | undefined> {
  const storefrontAccessToken = process.env.SHOPIFY_DELEGATE_ACCESS_TOKEN;
  invariant(storefrontAccessToken, "The storefront api token is required");
  const shopName = process.env.SHOP_NAME;
  invariant(shopName, "The shop name is required");
  console.log("buyerIP", buyerIP);
  try {
    const response = await fetch(
      `https://${shopName}.myshopify.com/api/${ShopifyApiVersion}/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Shopify-Storefront-Private-Token": storefrontAccessToken,
          ...(buyerIP && { "Shopify-Storefront-Buyer-IP": buyerIP }),
        },
        body: JSON.stringify({ query, variables: variables || {} }),
      },
    );
    const result =
      (await response.json()) as ShopifyResponseType<ResponseDataType>;

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

export async function postToAdminShopify<ResponseDataType, VariablesType = {}>({
  query,
  variables,
}: {
  query: string;
  variables?: VariablesType;
}): Promise<ResponseDataType | undefined> {
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

    const result =
      (await response.json()) as ShopifyResponseType<ResponseDataType>;

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
