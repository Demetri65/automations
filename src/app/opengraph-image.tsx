import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0f172a",
          padding: "56px",
          border: "1px solid #e2e8f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              border: "1px solid #e2e8f0",
              background: "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 700 }}>
            Prompt systems, architecture thinking, and automation documentation.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.45, color: "#475569" }}>
            A flagship portfolio surface for productized automation work.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, color: "#64748b", fontSize: 22 }}>
          <span>Next.js</span>
          <span>•</span>
          <span>Prompts</span>
          <span>•</span>
          <span>Architectures</span>
          <span>•</span>
          <span>Docs</span>
        </div>
      </div>
    ),
    size,
  );
}
