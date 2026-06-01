export const siteConfig = {
  name: "StudyMate",
  url: "https://studymate-seo.vercel.app",
  description:
    "StudyMate is a student productivity app, study planner, academic task manager, and deadline tracker for organizing coursework and focused study.",
  email: "hello@studymate.app",
};

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}
