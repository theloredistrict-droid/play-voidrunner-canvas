import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VOIDRUNNER: Overdrive Edition — Deep-space arcade combat" },
      { name: "description", content: "Play VOIDRUNNER free in your browser: pilot an upgradeable starfighter through asteroid sectors, elite threats, and cinematic boss battles." },
      { property: "og:title", content: "VOIDRUNNER: Overdrive Edition — Deep-space arcade combat" },
      { property: "og:description", content: "Play VOIDRUNNER free in your browser: a high-speed 3D arcade shooter with progression, abilities, and boss battles." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://play-prime-canvas.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://play-prime-canvas.lovable.app/" }],
  }),
  component: VoidrunnerGame,
});

function VoidrunnerGame() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background">
      <h1 className="sr-only">VOIDRUNNER: Overdrive Edition</h1>
      <iframe
        className="h-full w-full border-0"
        src="/voidrunner.html"
        title="Play VOIDRUNNER: Overdrive Edition"
        allow="fullscreen; autoplay; gamepad"
      />
    </main>
  );
}
