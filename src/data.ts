export type Priority = "High" | "Medium" | "Low";

export type Task = {
  title: string;
  due: string;
  priority: Priority;
  course: string;
  completed?: boolean;
};

export const tasks: Task[] = [
  { title: "ST101 Assignment", due: "15 May 2025", priority: "High", course: "Software Theory" },
  { title: "DNE Notes Review", due: "16 May 2025", priority: "Medium", course: "Digital Networks" },
  { title: "Research Chapter 2", due: "20 May 2025", priority: "Low", course: "Research Methods" },
  { title: "UI/UX Case Study", due: "20 May 2025", priority: "Low", course: "Interaction Design" },
  { title: "Group Presentation Slides", due: "22 May 2025", priority: "Medium", course: "Business Analysis" },
];

export const subtasks = [
  { name: "Research topic", completed: true },
  { name: "Write introduction", completed: true },
  { name: "Complete content", completed: false },
  { name: "Review and edit", completed: false },
];

export const calendarEvents = [
  { date: "15 May", title: "ST101 Assignment", time: "All day", priority: "High" as Priority },
  { date: "16 May", title: "DNE Notes Review", time: "14:00 - 15:00", priority: "Medium" as Priority },
  { date: "20 May", title: "Research Chapter 2", time: "16:00 - 18:00", priority: "Low" as Priority },
];
