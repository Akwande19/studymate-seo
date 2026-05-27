import type { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { BatteryFull, CalendarDays, ChevronRight, Clock3, Home, ListChecks, Signal, UserRound, Wifi } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import type { Priority, Task } from "../data";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="prototype-stage">
      <div className="phone-frame">
        <StatusBar />
        <div className="phone-content">{children}</div>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="status-bar" aria-label="Device status">
      <time>9:41</time>
      <div className="status-icons" aria-hidden="true">
        <Signal size={15} />
        <Wifi size={15} />
        <BatteryFull size={18} />
      </div>
    </div>
  );
}

const navItems = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/tasks", label: "Tasks", icon: ListChecks },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/profile", label: "Profile", icon: UserRound },
];

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="App navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            aria-label={item.label}
          >
            <Icon size={22} strokeWidth={2} />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`primary-button ${className}`} {...props}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`secondary-button ${className}`} {...props}>
      {children}
    </button>
  );
}

export function PriorityChip({ priority }: { priority: Priority }) {
  return <span className={`priority-chip priority-${priority.toLowerCase()}`}>{priority} Priority</span>;
}

export function TaskCard({ task, compact = false, onSelect }: { task: Task; compact?: boolean; onSelect?: () => void }) {
  const content = (
    <>
      <div className="task-main">
        <span className={`task-marker marker-${task.priority.toLowerCase()}`} aria-hidden="true" />
        <div>
          <h3>{task.title}</h3>
          <p>
            <Clock3 size={13} aria-hidden="true" /> Due {task.due}
          </p>
        </div>
      </div>
      <PriorityChip priority={task.priority} />
    </>
  );

  if (onSelect) {
    return (
      <button className={`task-card ${compact ? "compact" : ""}`} onClick={onSelect} aria-label={`View ${task.title}`}>
        {content}
      </button>
    );
  }

  return <article className={`task-card ${compact ? "compact" : ""}`}>{content}</article>;
}

type FieldProps = {
  label: string;
  error?: string;
  optional?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputField({ label, error, optional, id, ...props }: FieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="field-label" htmlFor={fieldId}>
      <span>
        {label} {optional && <small>(Optional)</small>}
      </span>
      <input
        id={fieldId}
        className={`form-input ${error ? "input-error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        {...props}
      />
      {error && (
        <span className="field-error" id={`${fieldId}-error`} role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

type TextAreaProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({ label, id, ...props }: TextAreaProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label className="field-label" htmlFor={fieldId}>
      <span>{label}</span>
      <textarea id={fieldId} className="form-input textarea" {...props} />
    </label>
  );
}

export function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="progress-panel" aria-label={`${label}: ${value}%`}>
      <div className="progress-label">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function ProgressRing({ value }: { value: number }) {
  return (
    <div className="progress-ring" style={{ "--progress": `${value}%` } as CSSProperties} aria-label={`${value}% completed`}>
      <div>
        <strong>{value}%</strong>
        <small>Complete</small>
      </div>
    </div>
  );
}

export function ProfileMenuItem({
  icon,
  label,
  danger = false,
}: {
  icon: ReactNode;
  label: string;
  danger?: boolean;
}) {
  return (
    <button className={`profile-menu-item ${danger ? "danger" : ""}`} aria-label={label}>
      <span className="menu-icon">{icon}</span>
      <span>{label}</span>
      <ChevronRight size={18} className="menu-arrow" />
    </button>
  );
}

export function CalendarEventCard({
  event,
}: {
  event: { date: string; title: string; time: string; priority: Priority };
}) {
  return (
    <article className="calendar-event">
      <div className="event-date">{event.date}</div>
      <div className="event-details">
        <h3>{event.title}</h3>
        <p>{event.time}</p>
      </div>
      <PriorityChip priority={event.priority} />
    </article>
  );
}

export function FloatingAddButton() {
  const navigate = useNavigate();
  return (
    <button className="floating-add" onClick={() => navigate("/add-task")} aria-label="Add new task">
      +
    </button>
  );
}

export function ScreenHeader({
  title,
  back,
  action,
}: {
  title: string;
  back?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <header className="screen-header">
      <div>{back}</div>
      <h1>{title}</h1>
      <div>{action}</div>
    </header>
  );
}

export function FeedbackLayout({
  icon,
  title,
  message,
  children,
  tone,
}: {
  icon: ReactNode;
  title: string;
  message: string;
  children: ReactNode;
  tone: "success" | "offline";
}) {
  return (
    <main className={`feedback-screen ${tone}`}>
      <div className="feedback-icon">{icon}</div>
      <h1>{title}</h1>
      <p>{message}</p>
      <div className="feedback-actions">{children}</div>
    </main>
  );
}
