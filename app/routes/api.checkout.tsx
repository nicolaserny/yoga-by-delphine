import type { ActionArgs } from "@netlify/remix-runtime";
import { redirect } from "@netlify/remix-runtime";
import invariant from "tiny-invariant";
import { createCheckoutUrl } from "~/models/checkout.server";

export const action = async ({ request, context }: ActionArgs) => {
  const buyerIP = (context.ip as string) || undefined;
  const formData = await request.formData();
  const shopifyId = formData.get("shopifyId");
  invariant(typeof shopifyId === "string", "Missing shopifyId");
  const checkoutUrl = await createCheckoutUrl({ buyerIP, shopifyId });
  if (!checkoutUrl) {
    return redirect("/error", {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  }
  return redirect(checkoutUrl, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
};
