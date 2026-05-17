import { NavBar } from "./index";
import {
  render,
  screen,
  userEvent,
  waitFor,
  within,
} from "~/../test/test-utils";

const primaryLinks = [
  { name: /accueil/i, href: "/" },
  { name: /programme/i, href: "/schedule" },
  { name: /cartes-cadeaux/i, href: "/gift-cards" },
  { name: /vidéos/i, href: "/videos" },
  { name: /a propos/i, href: "/about" },
  { name: /contact/i, href: "/contact" },
];

describe("NavBar", () => {
  it("renders all primary navigation links in the desktop nav", () => {
    render(<NavBar />);
    const nav = within(screen.getByRole("navigation"));

    for (const { name, href } of primaryLinks) {
      expect(nav.getByRole("link", { name })).toHaveAttribute("href", href);
    }
    expect(nav.getByRole("link", { name: /réserver/i })).toHaveAttribute(
      "href",
      "/schedule",
    );
    expect(
      nav.getByRole("link", { name: /yoga by delphine/i }),
    ).toHaveAttribute("href", "/");
  });

  it("does not show the mobile menu by default", () => {
    render(<NavBar />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens the mobile menu when the burger button is clicked", async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    await user.click(screen.getByRole("button", { name: /menu/i }));

    const dialog = within(await screen.findByRole("dialog"));
    for (const { name, href } of primaryLinks) {
      expect(dialog.getByRole("link", { name })).toHaveAttribute("href", href);
    }
    expect(dialog.getByRole("link", { name: /réserver/i })).toHaveAttribute(
      "href",
      "/schedule",
    );
  });

  it("dismisses the mobile menu when a menu link is clicked", async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    await user.click(screen.getByRole("button", { name: /menu/i }));
    const dialog = await screen.findByRole("dialog");
    await user.click(within(dialog).getByRole("link", { name: /contact/i }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("dismisses the mobile menu via the close button", async () => {
    const user = userEvent.setup();
    render(<NavBar />);

    await user.click(screen.getByRole("button", { name: /menu/i }));
    const dialog = await screen.findByRole("dialog");
    await user.click(within(dialog).getByRole("button", { name: /menu/i }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("exposes an accessible name for the burger control", () => {
    render(<NavBar />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
