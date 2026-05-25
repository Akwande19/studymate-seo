import { ImageResponse } from "next/og";

export const alt = "StudyMate student productivity and study planner app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(120deg, #eef2ff, #ffffff 48%, #e0e7ff)",
          color: "#0f172a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "980px" }}>
          <div style={{ alignItems: "center", color: "#4f46e5", display: "flex", fontSize: 28, fontWeight: 700 }}>
            <span
              style={{
                alignItems: "center",
                background: "#4f46e5",
                borderRadius: "16px",
                color: "white",
                display: "flex",
                height: "56px",
                justifyContent: "center",
                marginRight: "18px",
                width: "56px",
              }}
            >
              S
            </span>
            StudyMate
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 1.1,
              marginTop: "60px",
            }}
          >
            Study with a plan.
            <br />
            Finish with confidence.
          </div>
          <div style={{ color: "#475569", fontSize: 26, marginTop: "28px" }}>
            The productivity app designed for students.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
