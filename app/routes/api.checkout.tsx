import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { createCheckoutUrl } from "~/models/checkout.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const buyerIP = request.headers.get("x-nf-client-connection-ip") || undefined;
  const formData = await request.formData();
  const shopifyId = formData.get("shopifyId");
  invariant(typeof shopifyId === "string", "Missing shopifyId");
  const checkoutUrl = await createCheckoutUrl({ buyerIP, shopifyId });
  if (!checkoutUrl) {
    return redirect("/error");
  }
  return redirect(checkoutUrl);
};
