import { Navigate, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";

import { PhoneFrame } from "./components/UI";
import {
  AddTaskScreen,
  CalendarScreen,
  DashboardScreen,
  OfflineScreen,
  ProfileScreen,
  SplashScreen,
  SuccessScreen,
  TaskDetailScreen,
  TaskListScreen,
  ValidationScreen,
} from "./screens";
import {
  ArticlePage,
  BlogPage,
  ContactPage,
  FeaturesPage,
  HomePage,
  PricingPage,
} from "./website";

function PrototypeShell({ children }: { children: ReactNode }) {
  return <PhoneFrame>{children}</PhoneFrame>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<ArticlePage />} />
      <Route path="/welcome" element={<PrototypeShell><SplashScreen /></PrototypeShell>} />
      <Route path="/dashboard" element={<PrototypeShell><DashboardScreen /></PrototypeShell>} />
      <Route path="/tasks" element={<PrototypeShell><TaskListScreen /></PrototypeShell>} />
      <Route path="/add-task" element={<PrototypeShell><AddTaskScreen /></PrototypeShell>} />
      <Route path="/task-detail" element={<PrototypeShell><TaskDetailScreen /></PrototypeShell>} />
      <Route path="/calendar" element={<PrototypeShell><CalendarScreen /></PrototypeShell>} />
      <Route path="/success" element={<PrototypeShell><SuccessScreen /></PrototypeShell>} />
      <Route path="/validation" element={<PrototypeShell><ValidationScreen /></PrototypeShell>} />
      <Route path="/profile" element={<PrototypeShell><ProfileScreen /></PrototypeShell>} />
      <Route path="/offline" element={<PrototypeShell><OfflineScreen /></PrototypeShell>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
