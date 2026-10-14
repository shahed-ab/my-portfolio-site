import { ImageResponse } from "next/og";
import { profileData } from "@/data/profile";

export const alt = `${profileData.identity.name} — Full-Stack Engineer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
          padding: "60px",
          border: "12px solid #141414",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            border: "2px solid rgba(52, 211, 153, 0.4)",
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            color: "#34d399",
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >
          A
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          {profileData.identity.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "26px",
            color: "#34d399",
            marginBottom: "16px",
            fontFamily: "monospace",
          }}
        >
          {`${profileData.identity.role} · ${profileData.location.city}, ${profileData.location.country}`}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#a1a1aa",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          {profileData.identity.tagline}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
