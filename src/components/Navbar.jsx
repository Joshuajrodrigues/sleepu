import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

const Navbar = () => {
  return (
    <>
      <div class="titlebar">
        <div data-tauri-drag-region class="titlebar-drag-region">
          <span class="app-title">Sleepu</span>
        </div>
        <div class="controls">
          <button
            onClick={() => appWindow.minimize()}
            id="titlebar-minimize"
            title="minimize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M19 13H5v-2h14z" />
            </svg>
          </button>
          <button
            onClick={() => appWindow.close()}
            id="titlebar-close"
            title="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
