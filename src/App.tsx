import { Navigate, Route, Routes } from "react-router-dom";

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

export default function App() {
  return (
    <PhoneFrame>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/welcome" element={<SplashScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/tasks" element={<TaskListScreen />} />
        <Route path="/add-task" element={<AddTaskScreen />} />
        <Route path="/task-detail" element={<TaskDetailScreen />} />
        <Route path="/calendar" element={<CalendarScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
        <Route path="/validation" element={<ValidationScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/offline" element={<OfflineScreen />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </PhoneFrame>
  );
}
