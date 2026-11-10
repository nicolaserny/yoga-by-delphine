import ScheduleRoute from "./schedule";
import { coursesFixture } from "~/../test/fixtures/courses";
import { render, screen, userEvent, within } from "~/../test/test-utils";

const bookableRegularCoursesCount = coursesFixture.filter(
  (course) => course.type === "REGULAR" && course.category !== "studio",
).length;

describe("ScheduleRoute", () => {
  it("renders the page title", async () => {
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    expect(
      await screen.findByRole("heading", {
        name: /programme des cours de yoga/i,
      }),
    ).toBeVisible();
  });

  it("renders online and studio sections", async () => {
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    expect(
      await screen.findByRole("heading", { name: /en ligne/i }),
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: /en studio/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /autres/i })).toBeVisible();
  });

  it("shows courses in their respective sections", async () => {
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    expect(
      await screen.findByText(/Cours de hatha yoga pour tous niveaux/i),
    ).toBeVisible();
    expect(screen.getByText(/Vinyasa flow dynamique/i)).toBeVisible();
  });

  it("shows buy buttons with correct labels for bookable regular courses", async () => {
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    const buttons = await screen.findAllByRole("button", { name: /réserver/i });
    expect(buttons.length).toBe(bookableRegularCoursesCount);
  });

  it("shows no courses message when section is empty", async () => {
    render(<ScheduleRoute />, { path: "/schedule", loader: () => [] });
    await screen.findByRole("heading", {
      name: /programme des cours de yoga/i,
    });
    const messages = screen.getAllByText(/aucun cours pour le moment/i);
    expect(messages.length).toBeGreaterThan(0);
  });

  it("shows studio courses without price nor buy button, with the association link", async () => {
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    const studio = within(
      (await screen.findByRole("heading", { name: /en studio/i })).closest(
        "section",
      ) as HTMLElement,
    );
    expect(studio.getByText(/Vinyasa flow dynamique/i)).toBeVisible();
    expect(studio.queryByRole("button")).toBeNull();
    expect(studio.queryByText("€", { exact: false })).toBeNull();
    expect(
      studio.getByRole("link", { name: /s'inscrire sur asepgi92\.fr/i }),
    ).toHaveAttribute("href", "https://asepgi92.fr/yoga/");
    expect(
      studio.getByRole("link", { name: /demander un cours d'essai/i }),
    ).toHaveAttribute("href", "/contact");
  });

  it("groups courses by month with the subscription first", async () => {
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    const online = within(
      (await screen.findByRole("heading", { name: /en ligne/i })).closest(
        "section",
      ) as HTMLElement,
    );
    expect(online.getByRole("heading", { name: /mars 2025/i })).toBeVisible();
    const titles = online
      .getAllByRole("heading", { level: 4 })
      .map((heading) => heading.textContent);
    expect(titles[0]).toMatch(/abonnement mars/i);
    expect(titles[1]).toMatch(/hatha yoga/i);
  });

  it("filters sections with the category chips", async () => {
    const user = userEvent.setup();
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    const onlineChip = await screen.findByRole("button", { name: "En ligne" });
    await user.click(onlineChip);
    expect(onlineChip).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { name: /en ligne/i })).toBeVisible();
    expect(screen.queryByRole("heading", { name: /en studio/i })).toBeNull();
    expect(screen.queryByRole("heading", { name: /autres/i })).toBeNull();
  });
});
