import { useState, type FormEvent, type ReactNode } from "react";
import {
  AlertCircle,
  ArrowLeft,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  CloudOff,
  Filter,
  GraduationCap,
  LogOut,
  MoreVertical,
  Search,
  Settings,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { calendarEvents, subtasks, tasks, type Priority } from "./data";
import {
  BottomNav,
  CalendarEventCard,
  FeedbackLayout,
  FloatingAddButton,
  InputField,
  PrimaryButton,
  PriorityChip,
  ProfileMenuItem,
  ProgressBar,
  ProgressRing,
  ScreenHeader,
  SecondaryButton,
  TaskCard,
  TextAreaField,
} from "./components/UI";

function IconButton({ children, label, onClick }: { children: ReactNode; label: string; onClick?: () => void }) {
  return (
    <button type="button" className="icon-button" aria-label={label} onClick={onClick}>
      {children}
    </button>
  );
}

export function SplashScreen() {
  const navigate = useNavigate();

  return (
    <main className="welcome-screen">
      <div className="brand-mark" aria-hidden="true">
        <GraduationCap size={48} />
        <span className="brand-check">
          <Check size={16} />
        </span>
      </div>
      <p className="welcome-kicker">Academic productivity</p>
      <h1>SmartStudy Hub</h1>
      <p className="tagline">Stay organised. Study smarter.</p>
      <div className="welcome-art" aria-hidden="true">
        <BookOpen size={62} />
        <CalendarDays className="art-calendar" size={36} />
      </div>
      <div className="welcome-actions">
        <PrimaryButton onClick={() => navigate("/dashboard")}>Get Started</PrimaryButton>
        <SecondaryButton onClick={() => navigate("/dashboard")}>Log In</SecondaryButton>
      </div>
      <p className="prototype-note">Mobile prototype for university students</p>
    </main>
  );
}

export function DashboardScreen() {
  const navigate = useNavigate();
  const upcomingTasks = tasks.slice(0, 3);

  return (
    <main className="app-screen has-bottom-nav dashboard-screen">
      <header className="dashboard-header">
        <div>
          <p className="greeting">Hi, Akwande <span aria-hidden="true">👋</span></p>
          <h1>Here&apos;s your study overview</h1>
        </div>
        <button className="notification-button" aria-label="Notifications">
          <Bell size={21} />
          <span />
        </button>
      </header>

      <section className="overview-card" aria-label="Weekly study progress">
        <div className="streak-panel">
          <span className="streak-icon" aria-hidden="true">7</span>
          <div>
            <small>Study streak</small>
            <strong>7 days</strong>
          </div>
        </div>
        <ProgressRing value={70} />
      </section>

      <ProgressBar value={70} label="Weekly progress" />

      <section className="task-section">
        <div className="section-title-row">
          <h2>Upcoming Tasks</h2>
          <Link to="/tasks">See all</Link>
        </div>
        <div className="task-stack">
          {upcomingTasks.map((task) => (
            <TaskCard
              compact
              key={task.title}
              task={{
                ...task,
                due: task.title === "ST101 Assignment" ? "in 2 days" : task.title === "DNE Notes Review" ? "in 3 days" : "in 5 days",
              }}
              onSelect={() => navigate("/task-detail")}
            />
          ))}
        </div>
      </section>

      <PrimaryButton className="wide-action" onClick={() => navigate("/add-task")}>
        <span aria-hidden="true">+</span> Add Task
      </PrimaryButton>
      <BottomNav />
    </main>
  );
}

export function TaskListScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  return (
    <main className="app-screen has-bottom-nav task-list-screen">
      <ScreenHeader
        title="My Tasks"
        action={
          <div className="header-actions">
            <IconButton label="Search tasks"><Search size={20} /></IconButton>
            <IconButton label="Filter tasks"><Filter size={20} /></IconButton>
          </div>
        }
      />
      <div className="task-tabs" role="tablist" aria-label="Filter tasks">
        {["All", "Pending", "Completed"].map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? "selected" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className="task-count">{activeTab === "Completed" ? "No completed tasks yet" : "5 tasks scheduled"}</p>
      {activeTab !== "Completed" && (
        <section className="task-stack" aria-label="Student tasks">
          {tasks.map((task) => (
            <TaskCard key={task.title} task={task} onSelect={() => navigate("/task-detail")} />
          ))}
        </section>
      )}
      <FloatingAddButton />
      <BottomNav />
    </main>
  );
}

function TaskForm({ validation = false }: { validation?: boolean }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState<Priority>("High");

  function submitTask(event: FormEvent) {
    event.preventDefault();
    if (!title.trim() || !date) {
      navigate("/validation");
      return;
    }
    navigate("/success");
  }

  return (
    <form className="task-form" onSubmit={submitTask} noValidate>
      {validation && (
        <div className="validation-banner" role="alert">
          <AlertCircle size={19} />
          <span>Please fill in all required fields.</span>
        </div>
      )}
      <InputField
        label="Task Title"
        placeholder="e.g. ST101 Assignment"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        error={validation ? "Task title is required" : undefined}
        required
      />
      <TextAreaField
        label="Description"
        placeholder="Add notes or submission instructions"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <InputField
        label="Due Date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        error={validation ? "Please select a due date" : undefined}
        required
      />
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        <div className="priority-options">
          {(["High", "Medium", "Low"] as Priority[]).map((option) => (
            <button
              className={`priority-option ${priority === option ? `chosen chosen-${option.toLowerCase()}` : ""}`}
              type="button"
              onClick={() => setPriority(option)}
              key={option}
              aria-pressed={priority === option}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>
      <PrimaryButton type="submit" disabled={validation} className="wide-action submit-task">
        Add Task
      </PrimaryButton>
      {!validation && (
        <button className="text-action" type="button" onClick={() => navigate("/validation")}>
          Show validation state
        </button>
      )}
    </form>
  );
}

export function AddTaskScreen() {
  const navigate = useNavigate();
  return (
    <main className="app-screen form-screen">
      <ScreenHeader
        title="Add New Task"
        back={<IconButton label="Back to dashboard" onClick={() => navigate("/dashboard")}><ArrowLeft size={21} /></IconButton>}
        action={<IconButton label="More options"><MoreVertical size={21} /></IconButton>}
      />
      <p className="screen-subtitle">Plan a new academic task and set a deadline.</p>
      <TaskForm />
    </main>
  );
}

export function ValidationScreen() {
  const navigate = useNavigate();
  return (
    <main className="app-screen form-screen">
      <ScreenHeader
        title="Add New Task"
        back={<IconButton label="Back to task form" onClick={() => navigate("/add-task")}><ArrowLeft size={21} /></IconButton>}
        action={<IconButton label="More options"><MoreVertical size={21} /></IconButton>}
      />
      <p className="screen-subtitle">Required information keeps deadlines accurate.</p>
      <TaskForm validation />
    </main>
  );
}

export function TaskDetailScreen() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  return (
    <main className="app-screen detail-screen">
      <ScreenHeader
        title="Task Detail"
        back={<IconButton label="Back to tasks" onClick={() => navigate("/tasks")}><ArrowLeft size={21} /></IconButton>}
        action={<IconButton label="More task options"><MoreVertical size={21} /></IconButton>}
      />
      {completed && (
        <div className="completion-banner" role="status">
          <CheckCircle2 size={18} /> Task marked as completed.
        </div>
      )}
      <section className="detail-card">
        <div className="detail-heading">
          <h1>ST101 Assignment</h1>
          <PriorityChip priority="High" />
        </div>
        <div className="due-card">
          <CalendarDays size={19} />
          <div>
            <small>Due Date</small>
            <strong>15 May 2025</strong>
          </div>
        </div>
        <h2>Description</h2>
        <p>Complete the ST101 assignment and submit on myUnisa.</p>
        <ProgressBar value={completed ? 100 : 70} label="Progress" />
      </section>
      <section className="subtasks">
        <h2>Subtasks</h2>
        {subtasks.map((subtask, index) => {
          const isDone = completed || subtask.completed;
          return (
            <div className="subtask-row" key={subtask.name}>
              <span className={`checkbox ${isDone ? "checked" : ""}`}>
                {isDone && <Check size={14} />}
              </span>
              <span className={isDone ? "crossed" : ""}>{subtask.name}</span>
              <small>{index + 1}/4</small>
            </div>
          );
        })}
      </section>
      <PrimaryButton className="wide-action" onClick={() => setCompleted(true)} disabled={completed}>
        {completed ? "Completed" : "Mark as Completed"}
      </PrimaryButton>
    </main>
  );
}

const calendarWeeks = [
  ["27", "28", "29", "30", "1", "2", "3"],
  ["4", "5", "6", "7", "8", "9", "10"],
  ["11", "12", "13", "14", "15", "16", "17"],
  ["18", "19", "20", "21", "22", "23", "24"],
  ["25", "26", "27", "28", "29", "30", "31"],
];

export function CalendarScreen() {
  const [selectedDay, setSelectedDay] = useState("15");

  return (
    <main className="app-screen has-bottom-nav calendar-screen">
      <ScreenHeader
        title="Calendar"
        action={<IconButton label="Calendar options"><MoreVertical size={21} /></IconButton>}
      />
      <section className="calendar-card" aria-label="May 2025 calendar">
        <div className="month-select">
          <button aria-label="Previous month"><ChevronLeft size={18} /></button>
          <h2>May 2025</h2>
          <button aria-label="Next month"><ChevronRight size={18} /></button>
        </div>
        <div className="weekday-grid" aria-hidden="true">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
        </div>
        <div className="date-grid">
          {calendarWeeks.flat().map((day, index) => (
            <button
              className={`${index < 4 ? "muted" : ""} ${selectedDay === day && index >= 4 ? "selected" : ""}`}
              onClick={() => index >= 4 && setSelectedDay(day)}
              key={`${day}-${index}`}
              aria-label={`May ${day}, 2025`}
              aria-pressed={selectedDay === day && index >= 4}
            >
              {day}
            </button>
          ))}
        </div>
      </section>
      <section className="events-section">
        <div className="section-title-row">
          <h2>Upcoming events</h2>
          <span>3 scheduled</span>
        </div>
        <div className="event-stack">
          {calendarEvents.map((event) => <CalendarEventCard key={event.title} event={event} />)}
        </div>
      </section>
      <FloatingAddButton />
      <BottomNav />
    </main>
  );
}

export function SuccessScreen() {
  const navigate = useNavigate();
  return (
    <FeedbackLayout
      tone="success"
      icon={<CheckCircle2 size={74} />}
      title="Task added successfully!"
      message="Your task has been saved to your study planner."
    >
      <PrimaryButton onClick={() => navigate("/tasks")}>View All Tasks</PrimaryButton>
      <button className="text-action" onClick={() => navigate("/add-task")}>Add Another Task</button>
    </FeedbackLayout>
  );
}

export function ProfileScreen() {
  return (
    <main className="app-screen has-bottom-nav profile-screen">
      <ScreenHeader title="Profile" action={<IconButton label="Settings"><Settings size={21} /></IconButton>} />
      <section className="profile-card" aria-label="Student profile">
        <div className="avatar">AG</div>
        <h1>Akwande Gqoboka</h1>
        <p>akwandegqoboka@gmail.com</p>
      </section>
      <section className="profile-menu" aria-label="Profile options">
        <ProfileMenuItem label="Study Goals" icon={<Target size={20} />} />
        <ProfileMenuItem label="Statistics" icon={<TrendingUp size={20} />} />
        <ProfileMenuItem label="Settings" icon={<Settings size={20} />} />
        <ProfileMenuItem label="Help & Support" icon={<CircleHelp size={20} />} />
        <ProfileMenuItem label="Log Out" icon={<LogOut size={20} />} danger />
      </section>
      <Link className="offline-demo-link" to="/offline">Preview offline state</Link>
      <BottomNav />
    </main>
  );
}

export function OfflineScreen() {
  const navigate = useNavigate();
  return (
    <FeedbackLayout
      tone="offline"
      icon={<CloudOff size={70} />}
      title="No Internet Connection"
      message="Please check your connection and try again."
    >
      <PrimaryButton onClick={() => navigate("/dashboard")}>Retry</PrimaryButton>
      <button className="text-action" onClick={() => navigate("/tasks")}>Go Offline</button>
    </FeedbackLayout>
  );
}
