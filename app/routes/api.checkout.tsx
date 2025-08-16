import { type ActionFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";
import { createCheckoutUrl } from "~/models/checkout.server";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const buyerIP = (context.ip as string) || undefined;
  const formData = await request.formData();
  const shopifyId = formData.get("shopifyId");
  invariant(typeof shopifyId === "string", "Missing shopifyId");
  const checkoutUrl = await createCheckoutUrl({ buyerIP, shopifyId });
  if (!checkoutUrl) {
    return redirect("/error");
  }
  return redirect(checkoutUrl);
};
