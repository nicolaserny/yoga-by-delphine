import type { ActionFunctionArgs } from "react-router";
import { createCheckoutUrl } from "~/models/checkout.server";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  try {
    const buyerIP = (context.ip as string) || undefined;
    const formData = await request.formData();
    const shopifyId = formData.get("shopifyId");

    // Improved validation with better error messages
    if (!shopifyId || typeof shopifyId !== "string") {
      throw new Response("Missing or invalid shopifyId", { status: 400 });
    }

    const checkoutUrl = await createCheckoutUrl({ buyerIP, shopifyId });
    if (!checkoutUrl) {
      throw new Response("Failed to create checkout URL", { status: 500 });
    }

    return Response.redirect(checkoutUrl, 302);
  } catch (error) {
    // Better error handling for React Router 7
    if (error instanceof Response) {
      throw error;
    }
    console.error("Checkout action error:", error);
    throw new Response("Internal server error", { status: 500 });
  }
};
