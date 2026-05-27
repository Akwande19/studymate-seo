# SmartStudy Hub High-Fidelity Prototype

## Student Details

- **Student name:** Akwande Gqoboka
- **Student number:** ST10198519
- **Module:** INSY7311 / USAB7311

## Project Description

SmartStudy Hub is a coded high-fidelity mobile prototype for university students. The prototype demonstrates a clear academic productivity experience for planning assignments, tracking deadlines, monitoring study progress, viewing calendar events, and handling success and error states.

This submission is a frontend prototype only. It uses realistic static mock data and local interface state to demonstrate navigation and user experience decisions. It does not include backend authentication or a database.

## Technology Stack

- React with TypeScript
- Vite
- React Router for navigable prototype screens
- `lucide-react` for consistent interface icons
- Plain CSS with a mobile-first design system
- Vercel-ready SPA route rewrites

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To confirm a deployable build:

```bash
npm run build
```

## Prototype Screens

| Screen | Route | Demonstrated interaction |
| --- | --- | --- |
| Splash / Welcome | `/` or `/welcome` | Begin the prototype or log in |
| Dashboard / Home | `/dashboard` | Review streak, progress, upcoming tasks, add a task |
| Task List | `/tasks` | Browse filtered academic tasks and open a task |
| Add Task | `/add-task` | Enter task information and select priority |
| Task Detail | `/task-detail` | View progress and mark a task complete |
| Calendar | `/calendar` | Select a date and review upcoming events |
| Success Feedback | `/success` | Confirm a newly added task and continue |
| Validation / Error Prevention | `/validation` | Identify required missing fields before submission |
| Profile / Settings | `/profile` | Review student profile actions and access offline demo |
| Offline / Error State | `/offline` | Understand a connectivity problem and recover |

## Navigation Flow

- Welcome to Dashboard through **Get Started**.
- Dashboard to Add Task and Task List.
- Task List to Task Detail.
- Add Task submits to Success when required fields are complete.
- Add Task navigates to Validation when required fields are missing or through **Show validation state**.
- Bottom navigation links Home, Tasks, Calendar, and Profile.
- Profile provides a **Preview offline state** link for report screenshots.

## Design Principle Mapping

### Norman / Shneiderman / Nielsen-Style Principles

| Principle | Application in SmartStudy Hub |
| --- | --- |
| Visibility of System Status | Dashboard displays weekly progress and study streak; Task Detail displays percentage progress and completion status. |
| Consistency | All screens repeat the purple/blue colour system, rounded cards, typography, icons, button shapes, and bottom navigation. |
| Feedback | Success confirms task creation; Validation describes required corrections; Task Detail acknowledges completion; Offline communicates connectivity failure. |
| Simplicity / Minimalism | Add Task contains only fields needed to plan an academic task, a priority selector, and one main submission action. |
| Error Prevention | Validation uses red field borders, an alert icon, clear text messages, and a disabled action so meaning does not depend on colour alone. |

### LU6 Principles and Guidelines

| LU6 principle | Demonstration |
| --- | --- |
| Visual Hierarchy | Dashboard uses prominent greeting, progress feature card, section title, and task stack. |
| Consistency | Repeated visual tokens, components, navigation, spacing, and icon style across all screens. |
| Spacing and Alignment | Add Task uses aligned labels and controls; Task List applies consistent card spacing and metadata layout. |
| Colour Schemes and Contrast | Dashboard primary card, Success green confirmation, Validation red alert state, and Offline purple state remain readable and meaningful. |
| Readability and Typography | Task List and Add Task use clear type scale, short labels, and readable supporting text. |
| Touch Target Sizes | Buttons, bottom navigation links, profile rows, icon actions, chips, and form controls are designed for mobile interaction. |
| Unity | All screens belong to one academic productivity product through shared structure and visual language. |
| Balance | Dashboard balances progress with tasks; Calendar balances month grid with scheduled events. |
| Scale | Dashboard headings and progress ring emphasize high-value study status information. |
| Feedback | Success, Validation, Task Detail completion, and Offline screens show outcomes and recovery actions. |

## Accessibility Considerations

- Readable type sizes and high-contrast text on light surfaces.
- Text labels are paired with icons throughout navigation and forms.
- Primary controls meet comfortable mobile touch target sizing.
- Semantic headings, form labels, buttons, navigation landmarks, and ARIA labels are provided.
- Error states include written guidance and an alert icon as well as red styling.
- Priorities explicitly state **High Priority**, **Medium Priority**, or **Low Priority**.

## GitHub Proof

- Repository URL: `<MY_GITHUB_REPO_URL>`
- Commit evidence: add screenshots of the repository files and commit history after pushing.

## Vercel Proof

- Deployed application URL: `<MY_VERCEL_DEPLOYED_URL>`
- Deployment evidence: add a screenshot of the deployed SmartStudy Hub welcome screen and the Vercel deployment dashboard.

## Deployment on Vercel

1. Push this project to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Select framework preset **Vite**.
5. Set build command to `npm run build`.
6. Set output directory to `dist`.
7. Deploy.

The included `vercel.json` rewrite allows direct navigation to prototype routes such as `/dashboard` and `/task-detail`.

## Screenshot Checklist for the Final Report

1. Welcome screen showing SmartStudy Hub branding and call-to-action buttons.
2. Dashboard showing greeting, 7-day streak, 70% weekly progress, and upcoming tasks.
3. Task List showing tabs, visible priority labels, and multiple realistic tasks.
4. Add Task showing aligned form fields, priority controls, and main action.
5. Task Detail showing description, due date, progress, subtasks, and completion action.
6. Calendar showing selected 15 May date and academic events.
7. Success screen showing clear system feedback after task creation.
8. Validation screen showing alert icon, field-level error text, and disabled button.
9. Profile screen showing student identity, touch-friendly menu rows, and offline demo link.
10. Offline screen showing error recovery options.
11. GitHub repository and commit history as proof of coded implementation.
12. Live Vercel deployment and URL as proof of deployment.
