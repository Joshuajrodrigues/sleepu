# Sleepu

A cute little desktop app that shuts down your computer after a timer. 
Set it, play YouTube, fall asleep. Sleepu handles the rest.


## Download

Grab the latest release from [Releases](../../releases):

| Platform | File |
|----------|------|
| Windows | `.msi` or `.exe` |
| Ubuntu/Debian | `.deb` |
| Any Linux (AppImage) | `.AppImage` |

---

## Installation

### Windows
Download the `.msi` and run it. Done.

### Ubuntu / Debian
```bash
sudo dpkg -i sleepu_*.deb
```

### Arch Linux — Build from Source (recommended, no bloat)

AppImages are large. Building from source gives you a native binary.

**Prerequisites:**
```bash
sudo pacman -S rust nodejs pnpm webkit2gtk base-devel
```

**Build:**
```bash
git clone https://github.com/yourusername/sleepu.git
cd sleepu
pnpm install
pnpm tauri build
```

**Install the binary:**
```bash
sudo cp src-tauri/target/release/sleepu /usr/local/bin/
# or without sudo:
cp src-tauri/target/release/sleepu ~/.local/bin/
```

Or install the `.deb` equivalent built output from:
```
src-tauri/target/release/bundle/
```

---

## Usage

1. Open Sleepu
2. Set your timer in hours and minutes
3. Press start
4. Fall asleep — your PC shuts down when the timer hits zero

---

## Contributing

Windows support is included. If you run into issues on Windows, open an issue.

PRs welcome for:
- AUR package (`PKGBUILD`)
- macOS support
- Additional themes

---

## Built with

- [Tauri](https://tauri.app) — Rust desktop app framework
- [Preact](https://preactjs.com) — lightweight UI
- [Vite](https://vitejs.dev) — frontend build tool
