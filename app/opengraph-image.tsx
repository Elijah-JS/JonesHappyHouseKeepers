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
      </div>
    ),
    size,
  );
}
