import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VOIDRUNNER: Overdrive Edition — Free space shooter game" },
      { name: "description", content: "Play VOIDRUNNER free in your browser: a space shooter game with an upgradeable starfighter, asteroid sectors, elite threats and cinematic boss battles." },
      { property: "og:title", content: "VOIDRUNNER: Overdrive Edition — Free space shooter game" },
      { property: "og:description", content: "Play VOIDRUNNER free in your browser: a high-speed 3D space shooter game with progression, abilities and boss battles." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://play-voidrunner-canvas.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://play-voidrunner-canvas.lovable.app/" }],
  }),
  component: VoidrunnerGame,
});

function VoidrunnerGame() {
  return (
    <main className="min-h-dvh w-full bg-background">
      <div className="h-dvh w-full overflow-hidden">
        <iframe
          className="h-full w-full border-0"
          src="/voidrunner.html"
          title="Play VOIDRUNNER: Overdrive Edition"
          allow="fullscreen; autoplay; gamepad"
        />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-12 text-foreground">
        <h1 className="text-3xl font-bold tracking-tight">
          VOIDRUNNER: Overdrive Edition
        </h1>
        <p className="mt-4 text-muted-foreground">
          VOIDRUNNER is a free space shooter game you can play instantly in your
          browser — no download, no account. You pilot a starfighter through
          deep-space sectors packed with drifting asteroids, explosive hazards
          and elite enemy formations that get faster and smarter the further you
          push your run.
        </p>
        <p className="mt-4 text-muted-foreground">
          Every sector you clear earns salvage you can spend on your ship:
          stronger weapons, tougher shields, faster thrusters, and abilities
          like the Void Pulse that clears the screen when you are boxed in. Heat
          builds as you fire, so knowing when to hold the trigger matters as
          much as aim. Grazing past enemy fire charges your meter and rewards
          risky, close-quarters flying.
        </p>

        <h2 className="mt-10 text-xl font-semibold">What makes it different</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          <li>Cinematic boss battles that close out each sector with multi-stage attack patterns.</li>
          <li>An upgradeable starfighter with weapon levels, shields, abilities and unlockable skins.</li>
          <li>Risk and reward modifiers that raise the score multiplier when you accept harder conditions.</li>
          <li>Checkpoints, missions, achievements and a local leaderboard to chase.</li>
          <li>Keyboard, gamepad and touch controls, plus a fullscreen mode (press F).</li>
        </ul>
      </section>
    </main>
  );
}
