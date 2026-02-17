import { Skeleton } from "react-nano-skeleton";
import "react-nano-skeleton/styles.css";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  // Override skeleton CSS colors to match JS toggle (ignores OS dark mode media query)
  const skeletonOverride = dark
    ? `
      .nano-skeleton {
        background: rgba(255,255,255,0.08) !important;
      }
      .nano-skeleton-shimmer::after {
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 60%, transparent 100%) !important;
      }
    `
    : `
      .nano-skeleton {
        background: rgba(0,0,0,0.09) !important;
      }
      .nano-skeleton-shimmer::after {
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.5) 60%, transparent 100%) !important;
      }
    `;

  const t = dark
    ? {
        bg: "#0a0a0a",
        surface: "#141414",
        surfaceHover: "#1c1c1c",
        border: "#242424",
        textPri: "#f2f2f2",
        textSec: "#555",
        textTer: "#333",
        accent: "#6C63FF",
        accentBg: "#6C63FF18",
        toggleBg: "#1c1c1c",
        toggleBorder: "#2a2a2a",
        codeBg: "#1a1a1a",
        codeText: "#a78bfa",
        supportBg: "#111",
        supportBorder: "#1e1e1e",
        badgeBg: "#6C63FF15",
        badgeText: "#8b7cf8",
      }
    : {
        bg: "#fafafa",
        surface: "#ffffff",
        surfaceHover: "#f5f5f5",
        border: "#e8e8e8",
        textPri: "#111",
        textSec: "#888",
        textTer: "#ccc",
        accent: "#5B53EE",
        accentBg: "#5B53EE12",
        toggleBg: "#f0f0f0",
        toggleBorder: "#e0e0e0",
        codeBg: "#f4f3ff",
        codeText: "#5B53EE",
        supportBg: "#f7f7ff",
        supportBorder: "#e8e8ff",
        badgeBg: "#5B53EE12",
        badgeText: "#5B53EE",
      };

  return (
    <div
      style={{
        background: t.bg,
        minHeight: "100vh",
        color: t.textPri,
        fontFamily: "'DM Sans', system-ui, sans-serif",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <style>{skeletonOverride}</style>
      {/* ── Top nav ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: dark ? "rgba(10,10,10,0.85)" : "rgba(250,250,250,0.85)",
          borderBottom: `1px solid ${t.border}`,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: t.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
            }}
          >
            💀
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "-0.3px",
              color: t.textPri,
            }}
          >
            react-nano-skeleton
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="https://github.com/UtkarshK95/react-nano-skeleton"
            target="_blank"
            rel="noreferrer"
            style={{
              color: t.textSec,
              fontSize: 13,
              textDecoration: "none",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = t.textPri)}
            onMouseLeave={(e) => (e.target.style.color = t.textSec)}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>

          {/* Dark/Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            style={{
              background: t.toggleBg,
              border: `1px solid ${t.toggleBorder}`,
              borderRadius: 99,
              padding: "6px 14px",
              cursor: "pointer",
              fontSize: 13,
              color: t.textPri,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 7,
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ fontSize: 15 }}>{dark ? "☀️" : "🌙"}</span>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <div
        style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 80px" }}
      >
        {/* ── Hero ── */}
        <header style={{ textAlign: "center", marginBottom: 80 }}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 800,
              margin: "0 0 16px",
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: t.textPri,
            }}
          >
            14 skeleton components.
            <br />
            <span style={{ color: t.accent }}>One tiny package.</span>
          </h1>

          <p
            style={{
              color: t.textSec,
              fontSize: "1.05rem",
              maxWidth: 480,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            Every loading pattern you need — shimmer, pulse, wave — built for
            React with full TypeScript support.
          </p>

          {/* Install pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: t.codeBg,
              border: `1px solid ${t.border}`,
              borderRadius: 10,
              padding: "10px 20px",
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 14,
            }}
          >
            <span style={{ color: t.textSec }}>$</span>
            <a
              href="https://www.npmjs.com/package/react-nano-skeleton"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: t.codeText,
                fontWeight: 600,
              }}
            >
              npm i react-nano-skeleton
            </a>
          </div>

          {/* Theme preview hint */}
          <p
            style={{
              marginTop: 20,
              color: t.textTer,
              fontSize: 12,
              letterSpacing: "0.5px",
            }}
          >
            TOGGLE ☝️ TO SEE {dark ? "LIGHT" : "DARK"} MODE
          </p>
        </header>

        {/* ═══ SECTION 1 — Animation variants ═══ */}
        <Section
          title="Animation Variants"
          subtitle="shimmer · pulse · wave · static"
          t={t}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {["shimmer", "pulse", "wave", "static"].map((v) => (
              <Card key={v} t={t}>
                <Label t={t}>{v}</Label>
                <Skeleton variant={v} height={72} radius="md" />
              </Card>
            ))}
          </div>
        </Section>

        {/* ═══ SECTION 2 — Image ═══ */}
        <Section
          title="Skeleton.Image"
          subtitle="Aspect-ratio aware — no layout shift"
          t={t}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {[
              { ar: "16:9", label: "Widescreen 16:9" },
              { ar: "4:3", label: "Standard 4:3" },
              { ar: "1:1", label: "Square 1:1" },
              { ar: "3:4", label: "Portrait 3:4" },
              { ar: "9:16", label: "Story 9:16", narrow: true },
              { ar: "16:9", label: "Video thumbnail", showPlayIcon: true },
            ].map(({ ar, label, narrow, showPlayIcon }) => (
              <Card
                key={label}
                t={t}
                style={narrow ? { maxWidth: 160, margin: "0 auto" } : {}}
              >
                <Label t={t}>{label}</Label>
                <Skeleton.Image
                  aspectRatio={ar}
                  radius="md"
                  showPlayIcon={!!showPlayIcon}
                />
              </Card>
            ))}
          </div>
        </Section>

        {/* ═══ SECTION 3 — Card ═══ */}
        <Section
          title="Skeleton.Card"
          subtitle="Product cards — e-commerce style"
          t={t}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} t={t}>
                <Skeleton.Card imageHeight={180} lines={2} gap={12} />
              </Card>
            ))}
          </div>
        </Section>

        {/* ═══ SECTION 4 — ProductRow ═══ */}
        <Section
          title="Skeleton.ProductRow"
          subtitle="Horizontal search results — Flipkart / Amazon style"
          t={t}
        >
          <Card t={t}>
            <Skeleton.ProductRow
              items={4}
              imageWidth={120}
              imageHeight={120}
              lines={3}
              showPrice
              showRating
              showBadge
              gap={24}
            />
          </Card>
        </Section>

        {/* ═══ SECTION 5 — Text ═══ */}
        <Section
          title="Skeleton.Text"
          subtitle="Paragraph skeletons — blogs, descriptions"
          t={t}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            <Card t={t}>
              <Label t={t}>2 lines</Label>
              <Skeleton.Text lines={2} />
            </Card>
            <Card t={t}>
              <Label t={t}>4 lines</Label>
              <Skeleton.Text lines={4} />
            </Card>
            <Card t={t}>
              <Label t={t}>5 lines · pulse</Label>
              <Skeleton.Text lines={5} variant="pulse" />
            </Card>
          </div>
        </Section>

        {/* ═══ SECTION 6 — AvatarText ═══ */}
        <Section
          title="Skeleton.AvatarText"
          subtitle="User rows — profiles, followers, mentions"
          t={t}
        >
          <Card t={t}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[48, 40, 56].map((sz, i) => (
                <Skeleton.AvatarText
                  key={i}
                  avatarSize={sz}
                  lines={2}
                  variant="pulse"
                />
              ))}
            </div>
          </Card>
        </Section>

        {/* ═══ SECTION 7 — Comment ═══ */}
        <Section
          title="Skeleton.Comment"
          subtitle="Nested comment threads — Reddit / YouTube style"
          t={t}
        >
          <Card t={t}>
            <Skeleton.Comment items={3} replyCount={2} lines={2} showActions />
          </Card>
        </Section>

        {/* ═══ SECTION 8 — List ═══ */}
        <Section
          title="Skeleton.List"
          subtitle="Settings, contacts, search rows"
          t={t}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <Card t={t}>
              <Label t={t}>Avatar + divider</Label>
              <Skeleton.List items={5} showAvatar showDivider />
            </Card>
            <Card t={t}>
              <Label t={t}>Thumbnail + trailing</Label>
              <Skeleton.List
                items={5}
                showThumbnail
                thumbnailWidth={60}
                thumbnailHeight={60}
                showTrailing
                lines={2}
              />
            </Card>
          </div>
        </Section>

        {/* ═══ SECTION 9 — Table ═══ */}
        <Section
          title="Skeleton.Table"
          subtitle="Data tables, dashboards, spreadsheets"
          t={t}
        >
          <Card t={t}>
            <Skeleton.Table rows={7} cols={5} showHeader cellHeight={16} />
          </Card>
        </Section>

        {/* ═══ SECTION 10 — Stat ═══ */}
        <Section title="Skeleton.Stat" subtitle="KPI / metric cards" t={t}>
          <Skeleton.Stat
            count={4}
            showIcon
            showTrend
            cardHeight={140}
            cardBackground={t.surface}
            cardBorder={`1px solid ${t.border}`}
          />
          <div style={{ marginTop: 12 }}>
            <Skeleton.Stat
              count={4}
              showIcon={false}
              showTrend={false}
              showSparkline
              cardHeight={120}
              cardBackground={t.surface}
              cardBorder={`1px solid ${t.border}`}
            />
          </div>
        </Section>

        {/* ═══ SECTION 11 — Form ═══ */}
        <Section
          title="Skeleton.Form"
          subtitle="Login, signup, checkout, settings"
          t={t}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <Card t={t}>
              <Label t={t}>Login form</Label>
              <Skeleton.Form
                fields={2}
                fieldTypes={["input", "input"]}
                showLabel
                showSubmit
                submitWidth="100%"
              />
            </Card>
            <Card t={t}>
              <Label t={t}>Contact form — mixed types</Label>
              <Skeleton.Form
                fields={4}
                fieldTypes={["input", "input", "textarea", "checkbox"]}
                showLabel
                showSubmit
                submitWidth={160}
              />
            </Card>
          </div>
        </Section>

        {/* ═══ SECTION 12 — Button ═══ */}
        <Section title="Skeleton.Button" subtitle="Loading button states" t={t}>
          <Card t={t}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <Label t={t}>Sizes</Label>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Skeleton.Button width={100} height={36} radius="md" />
                  <Skeleton.Button width={130} height={44} radius="md" />
                  <Skeleton.Button width={160} height={52} radius="md" />
                </div>
              </div>
              <div>
                <Label t={t}>Pill buttons</Label>
                <Skeleton.Button
                  count={3}
                  width={110}
                  height={40}
                  radius="full"
                  gap={12}
                />
              </div>
              <div>
                <Label t={t}>Icon-only</Label>
                <Skeleton.Button iconOnly count={4} iconSize={44} gap={10} />
              </div>
            </div>
          </Card>
        </Section>

        {/* ═══ SECTION 13 — Chip ═══ */}
        <Section
          title="Skeleton.Chip"
          subtitle="Tags, filters, badges, categories"
          t={t}
        >
          <Card t={t}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <Label t={t}>Filter chips</Label>
                <Skeleton.Chip count={8} height={32} />
              </div>
              <div>
                <Label t={t}>Tall pills</Label>
                <Skeleton.Chip
                  count={5}
                  height={40}
                  widthCycle={[90, 70, 110, 80, 100]}
                />
              </div>
              <div>
                <Label t={t}>Square badges</Label>
                <Skeleton.Chip
                  count={6}
                  height={28}
                  radius={6}
                  widthCycle={[48, 48, 48]}
                />
              </div>
            </div>
          </Card>
        </Section>

        {/* ═══ SECTION 14 — Banner ═══ */}
        <Section
          title="Skeleton.Banner"
          subtitle="Hero sections, promotional banners, carousels"
          t={t}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <Label t={t} muted>
                Center aligned
              </Label>
              <Skeleton.Banner height={320} contentAlign="center" radius={12} />
            </div>
            <div>
              <Label t={t} muted>
                Left aligned
              </Label>
              <Skeleton.Banner
                height={240}
                contentAlign="left"
                showCta
                ctaCount={2}
                radius={12}
              />
            </div>
            <div>
              <Label t={t} muted>
                Bottom pinned
              </Label>
              <Skeleton.Banner
                height={200}
                contentAlign="bottom"
                showSubtitle={false}
                ctaCount={1}
                radius={12}
              />
            </div>
          </div>
        </Section>

        {/* ═══ SUPPORT SECTION ═══ */}
        <div
          style={{
            background: t.supportBg,
            border: `1px solid ${t.supportBorder}`,
            borderRadius: 16,
            padding: "40px 48px",
            textAlign: "center",
            marginTop: 24,
            marginBottom: 64,
            transition: "background 0.3s ease, border-color 0.3s ease",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 12 }}>☕</div>
          <h3
            style={{
              margin: "0 0 8px",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: t.textPri,
            }}
          >
            Support the Project
          </h3>
          <p
            style={{
              margin: "0 0 28px",
              color: t.textSec,
              fontSize: "0.9rem",
              maxWidth: 380,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            If react-nano-skeleton saved you time, consider showing some love!
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <SupportLink
              href="https://github.com/UtkarshK95/react-nano-skeleton"
              icon={
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              }
              label="Star on GitHub"
              t={t}
              primary
            />
            <SupportLink
              href="https://buymeacoffee.com/utkarshk95"
              icon="☕"
              label="Buy Me a Coffee"
              t={t}
            />
          </div>
        </div>

        {/* ── Footer ── */}
        <footer
          style={{
            textAlign: "center",
            paddingTop: 32,
            borderTop: `1px solid ${t.border}`,
            color: t.textSec,
            fontSize: 13,
            transition: "border-color 0.3s ease",
          }}
        >
          <p style={{ margin: "0 0 6px" }}>
            💀 <strong style={{ color: t.textPri }}>react-nano-skeleton</strong>{" "}
            · 14 components · zero dependencies · lightweight
          </p>
          <p style={{ margin: 0, opacity: 0.5, fontSize: 12 }}>
            Shimmer · Pulse · Wave · Static · Dark-mode ready · TypeScript · MIT
            license
          </p>
        </footer>
      </div>
    </div>
  );
}

/* ─── Support link button ────────────────────────────────────── */
function SupportLink({ href, icon, label, t, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 22px",
        borderRadius: 10,
        fontSize: 14,
        fontWeight: 600,
        textDecoration: "none",
        border: `1px solid ${primary ? t.accent : t.border}`,
        background: primary ? t.accent : "transparent",
        color: primary ? "#fff" : t.textPri,
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.85";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {typeof icon === "string" ? <span>{icon}</span> : icon}
      {label}
    </a>
  );
}

/* ─── Shared helpers ─────────────────────────────────────────── */
function Section({ title, subtitle, children, t }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{ marginBottom: 16 }}>
        <h2
          style={{
            fontSize: "1.15rem",
            fontWeight: 700,
            margin: 0,
            color: t.textPri,
            letterSpacing: "-0.3px",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{ margin: "3px 0 0", color: t.textSec, fontSize: "0.85rem" }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

function Card({ children, t, style = {} }) {
  return (
    <div
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: 12,
        padding: 20,
        transition: "background 0.3s ease, border-color 0.3s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Label({ children, t, muted }) {
  return (
    <p
      style={{
        margin: "0 0 10px",
        fontSize: "0.72rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        color: muted ? t.textTer : t.textSec,
      }}
    >
      {children}
    </p>
  );
}
