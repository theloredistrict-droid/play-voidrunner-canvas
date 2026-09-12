import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VOIDRUNNER: Overdrive Edition" },
      { name: "description", content: "Pilot an upgradeable starfighter through asteroid sectors, elite threats, and cinematic boss battles." },
      { property: "og:title", content: "VOIDRUNNER: Overdrive Edition" },
      { property: "og:description", content: "A high-speed 3D deep-space arcade game with progression, abilities, and boss battles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
