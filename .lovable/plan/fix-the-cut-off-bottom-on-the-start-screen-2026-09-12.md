# Fix the cut-off bottom on the start screen

## What's happening

The game page itself does fill the window correctly (measured: page height exactly matches the window on a 1280x720 laptop screen). The problem is the **start screen content is taller than the window**, and since the page is locked against scrolling, everything past the bottom edge is clipped.

On a 1280x720 laptop the bottom row of menu buttons — Daily Rewards, Leaderboard, Settings, Pilot Profile — is sliced in half by the bottom of the screen. On phones the same thing happens, made worse by the browser address bar eating extra height.

## The fix

1. **Make the start screen fit the window.** Lay the menu out so the title block, callsign, description, difficulty, modifiers and all eight buttons compress to whatever height is available, instead of overflowing. Trim the oversized title and spacing when the window is short.
2. **Scale for short windows.** For heights under roughly 800px and 640px, step down the title size, paragraph, and gaps so the full menu is always reachable.
3. **Allow scrolling as a safety net.** If content still can't fit (very short or zoomed windows), let the start screen scroll vertically on its own rather than clipping, while the game canvas stays locked full-screen.
4. **Respect phone chrome.** Use dynamic viewport height and safe-area insets so the address bar and home indicator never cover buttons.
5. **Add a Fullscreen toggle.** A small button on the start screen and pause menu that puts the game into true fullscreen, which also removes browser chrome entirely.
6. **Check the other overlays** (Armory, Leaderboard, Settings, Profile, Flight manual, game over) for the same clipping at short heights and give them the same scroll/fit treatment.

## Verification

Take screenshots at 1280x720, 1366x768, and a 390x844 phone size, and confirm every start-screen button is fully visible and clickable at each size.

## Technical notes

All changes are inside `public/voidrunner.html` (its CSS and a small fullscreen handler). `html, body { overflow:hidden }` stays for the canvas; overflow handling moves onto the menu/overlay containers using `100dvh`, `min-height:0` flex children, `overflow-y:auto`, and `env(safe-area-inset-*)` padding. Add height-based media queries at 800px and 640px, plus `requestFullscreen`/`exitFullscreen` wiring for the new toggle.

Note: the live link only updates after publishing.
