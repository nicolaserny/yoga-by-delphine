import ScheduleRoute from "./schedule";
import { coursesFixture } from "~/../test/fixtures/courses";
import { render, screen } from "~/../test/test-utils";

const regularCoursesCount = coursesFixture.filter(
  (course) => course.type === "REGULAR",
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

  it("shows buy buttons with correct labels for regular courses", async () => {
    render(<ScheduleRoute />, {
      path: "/schedule",
      loader: () => coursesFixture,
    });
    const buttons = await screen.findAllByRole("button", { name: /réserver/i });
    expect(buttons.length).toBe(regularCoursesCount);
  });

  it("shows no courses message when section is empty", async () => {
    render(<ScheduleRoute />, { path: "/schedule", loader: () => [] });
    await screen.findByRole("heading", {
      name: /programme des cours de yoga/i,
    });
    const messages = screen.getAllByText(/aucun cours pour le moment/i);
    expect(messages.length).toBeGreaterThan(0);
  });
});
