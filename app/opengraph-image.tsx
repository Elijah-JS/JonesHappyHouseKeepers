import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} - Home & Office Cleaning in Fontana, CA`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#2c2a26",
        }}
      >
        {/* ImageResponse requires a standard img element. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=630&q=80"
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
            objectPosition: "center 38%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(44,42,38,0.18) 0%, rgba(44,42,38,0.28) 42%, rgba(44,42,38,0.78) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "64px 72px 68px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                border: "1px solid rgba(250,248,244,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FAF8F4",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              J
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#FAF8F4",
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Jones Happy Housekeepers
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 26,
              color: "rgba(250,248,244,0.86)",
              letterSpacing: "-0.01em",
            }}
          >
            Home & Office Cleaning in Fontana
          </div>
        </div>
      </div>
    ),
    size,
  );
}
