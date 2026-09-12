# VOIDRUNNER: Overdrive Edition

## Goal
Turn the uploaded single-file space game into a more cinematic, responsive, and replayable browser game while preserving its neon deep-space identity, progression, controls, and local save data.

## Opening and presentation
1. Replace the plain loading line with a staged boot sequence, animated telemetry, progress bar, and skip control.
2. Add a cinematic title reveal with scanline/glitch accents and a stronger ship fly-in.
3. Add a launch briefing showing selected hull, difficulty, modifiers, and expected rewards.
4. Add a 3–2–1–LAUNCH countdown before hazards begin.
5. Add difficulty descriptions, reward multipliers, and danger ratings.
6. Add a rotating “sector intel” panel and first-run control prompts.
7. Add ambient background structures, warp streaks, and a reactive star tunnel.
8. Improve responsive menu composition for phone, tablet, and desktop.

## Gameplay upgrades
9. Add a heat meter so sustained fire requires timing instead of unlimited shooting.
10. Add perfect-cooldown timing for a brief empowered volley.
11. Add a graze meter and rewards for controlled near-misses.
12. Add score-combo decay with clear timing feedback.
13. Add kill-streak callouts and escalating rewards.
14. Add collectible salvage shards with rarity tiers.
15. Add temporary weapon levels during each run.
16. Add homing missile pickups.
17. Add a defensive pulse ability charged by grazes.
18. Add destructible boss drones before the boss core becomes vulnerable.
19. Add boss phases with telegraphed spread, sweep, and aimed attacks.
20. Add multiple asteroid formations instead of only random single spawns.
21. Add mine hazards with warning rings.
22. Add repair-gate encounters that reward precise flight.
23. Add sector-specific visual palettes and hazard mixes.
24. Add an elite enemy health indicator.
25. Add floating damage numbers and critical-hit feedback.
26. Add stronger explosion shockwaves and debris.
27. Add dynamic music intensity during combos, low health, and bosses.
28. Add gamepad movement, firing, dash, beam, and pause support.

## Progression and replayability
29. Add run modifiers that offer risk/reward bonuses before launch.
30. Add a three-choice upgrade draft after each cleared sector.
31. Add rotating daily mission dates and claimable rewards.
32. Add streak rewards that cannot be claimed repeatedly.
33. Add more achievements tied to skillful play.
34. Add detailed run records and personal-best categories.
35. Add pause-safe save checkpoints and crash recovery.
36. Add import/export/reset controls for local progress.
37. Add callsign persistence from the profile.

## Quality, accessibility, and fixes
38. Fix the non-working auto-fire and colorblind radar settings.
39. Fix mobile multi-touch firing conflicts and improve touch target sizing.
40. Add keyboard audio unlock, focus styles, labels, and keyboard-friendly dialogs.
41. Add colorblind symbols as well as colors for radar targets and pickups.
42. Respect reduced motion across camera shake, particles, title effects, and transitions.
43. Add adaptive visual quality and object caps for smoother mobile play.
44. Correct near-miss depth detection, collision fairness, and dash timing feedback.
45. Improve HUD legibility, timer indicators, and ability-ready alerts.

## Technical approach
- Keep the game as a self-contained HTML experience and serve it at the app’s main address.
- Preserve existing local save keys and migrate missing fields safely.
- Extend the current Three.js scene and Web Audio system without external accounts or stored user data.
- Use the existing visual language: near-black void, cyan, violet, rose, gold, Unbounded, Manrope, and JetBrains Mono.
- Verify menu flow, launch sequence, gameplay, pause/retry, settings, and mobile layout in a real browser.
