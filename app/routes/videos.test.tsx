import VideosRoute from "./videos";
import { render, screen } from "~/../test/test-utils";

const expectedVideos = [
  {
    title: "Yoga mini routine",
    src: "https://www.youtube.com/embed/Ha5i6OoZ-tc",
  },
  {
    title: "Hatha yoga - vers upavistha konasana",
    src: "https://www.youtube.com/embed/gF4w_TZI-Cg",
  },
  {
    title: "Yoga Vinyasa tout niveau",
    src: "https://www.youtube.com/embed/oSmYigfg8nQ",
  },
  { title: "Yoga Balles", src: "https://www.youtube.com/embed/JZuqoCZU2pg" },
];

describe("VideosRoute", () => {
  it("renders the page title", async () => {
    render(<VideosRoute />, { path: "/videos" });
    expect(
      await screen.findByRole("heading", { name: /cours de yoga en vidéo/i }),
    ).toBeVisible();
  });

  it("embeds every video with its title and YouTube source", async () => {
    const { container } = render(<VideosRoute />, { path: "/videos" });
    await screen.findByRole("heading", { name: /cours de yoga en vidéo/i });

    const iframes = container.querySelectorAll("iframe");
    expect(iframes).toHaveLength(expectedVideos.length);

    for (const { title, src } of expectedVideos) {
      const iframe = screen.getByTitle(title);
      expect(iframe).toHaveAttribute("src", src);
    }
  });
});
