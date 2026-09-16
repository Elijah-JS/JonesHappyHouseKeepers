import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F1EB",
          color: "#1B1A17",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              border: "1px solid #1B1A1730",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            J
          </div>
          Jones Happy Housekeepers
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 820,
            }}
          >
            House cleaning in Fontana, CA
          </div>
          <div style={{ fontSize: 28, color: "#5C574E" }}>
            4.8-star customer rating · Home and office cleaning
          </div>
        </div>
      </div>
    ),
    size,
  );
}
