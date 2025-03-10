import cssVariables from "./css/variables.module.scss";
import { AppProps } from "./types";
import { FontFamilyValues } from "./element/types";

export const APP_NAME = "Excalidraw";

export const DRAGGING_THRESHOLD = 10; // px
export const LINE_CONFIRM_THRESHOLD = 8; // px
export const ELEMENT_SHIFT_TRANSLATE_AMOUNT = 5;
export const ELEMENT_TRANSLATE_AMOUNT = 1;
export const TEXT_TO_CENTER_SNAP_THRESHOLD = 30;
export const SHIFT_LOCKING_ANGLE = Math.PI / 12;
export const CURSOR_TYPE = {
  TEXT: "text",
  CROSSHAIR: "crosshair",
  GRABBING: "grabbing",
  GRAB: "grab",
  POINTER: "pointer",
  MOVE: "move",
  AUTO: "",
};
export const POINTER_BUTTON = {
  MAIN: 0,
  WHEEL: 1,
  SECONDARY: 2,
  TOUCH: -1,
} as const;

export enum EVENT {
  COPY = "copy",
  PASTE = "paste",
  CUT = "cut",
  KEYDOWN = "keydown",
  KEYUP = "keyup",
  MOUSE_MOVE = "mousemove",
  RESIZE = "resize",
  UNLOAD = "unload",
  FOCUS = "focus",
  BLUR = "blur",
  DRAG_OVER = "dragover",
  DROP = "drop",
  GESTURE_END = "gestureend",
  BEFORE_UNLOAD = "beforeunload",
  GESTURE_START = "gesturestart",
  GESTURE_CHANGE = "gesturechange",
  POINTER_MOVE = "pointermove",
  POINTER_UP = "pointerup",
  STATE_CHANGE = "statechange",
  WHEEL = "wheel",
  TOUCH_START = "touchstart",
  TOUCH_END = "touchend",
  HASHCHANGE = "hashchange",
  VISIBILITY_CHANGE = "visibilitychange",
  SCROLL = "scroll",
  // custom events
  EXCALIDRAW_LINK = "excalidraw-link",
}

export const ENV = {
  TEST: "test",
  DEVELOPMENT: "development",
};

export const CLASSES = {
  SHAPE_ACTIONS_MENU: "App-menu__left",
};

// 1-based in case we ever do `if(element.fontFamily)`
export const FONT_FAMILY = {
  Virgil: 1,
  Helvetica: 2,
  Cascadia: 3,
  muyao: 4,
};

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const WINDOWS_EMOJI_FALLBACK_FONT = "Segoe UI Emoji";

export const DEFAULT_FONT_SIZE = 20;
export const DEFAULT_FONT_FAMILY: FontFamilyValues = FONT_FAMILY.Virgil;
export const DEFAULT_TEXT_ALIGN = "left";
export const DEFAULT_VERTICAL_ALIGN = "top";
export const DEFAULT_VERSION = "{version}";

export const CANVAS_ONLY_ACTIONS = ["selectAll"];

export const GRID_SIZE = 20; // TODO make it configurable?

export const MIME_TYPES = {
  excalidraw: "application/vnd.excalidraw+json",
  excalidrawlib: "application/vnd.excalidrawlib+json",
  json: "application/json",
  svg: "image/svg+xml",
  "excalidraw.svg": "image/svg+xml",
  png: "image/png",
  "excalidraw.png": "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  binary: "application/octet-stream",
} as const;

export const EXPORT_DATA_TYPES = {
  excalidraw: "excalidraw",
  excalidrawClipboard: "excalidraw/clipboard",
  excalidrawLibrary: "excalidrawlib",
} as const;

export const EXPORT_SOURCE =
  window.EXCALIDRAW_EXPORT_SOURCE || window.location.origin;

// time in milliseconds
export const IMAGE_RENDER_TIMEOUT = 500;
export const TAP_TWICE_TIMEOUT = 300;
export const TOUCH_CTX_MENU_TIMEOUT = 500;
export const TITLE_TIMEOUT = 10000;
export const TOAST_TIMEOUT = 5000;
export const VERSION_TIMEOUT = 30000;
export const SCROLL_TIMEOUT = 100;
export const ZOOM_STEP = 0.1;
export const HYPERLINK_TOOLTIP_DELAY = 300;

// Report a user inactive after IDLE_THRESHOLD milliseconds
export const IDLE_THRESHOLD = 60_000;
// Report a user active each ACTIVE_THRESHOLD milliseconds
export const ACTIVE_THRESHOLD = 3_000;

export const MODES = {
  VIEW: "viewMode",
  ZEN: "zenMode",
  GRID: "gridMode",
};

export const THEME_FILTER = cssVariables.themeFilter;

export const URL_QUERY_KEYS = {
  addLibrary: "addLibrary",
} as const;

export const URL_HASH_KEYS = {
  addLibrary: "addLibrary",
} as const;

export const DEFAULT_UI_OPTIONS: AppProps["UIOptions"] = {
  canvasActions: {
    changeViewBackgroundColor: true,
    clearCanvas: true,
    export: { saveFileToDisk: true },
    loadScene: true,
    saveToActiveFile: true,
    theme: true,
    saveAsImage: true,
  },
};

export const MQ_MAX_WIDTH_PORTRAIT = 730;
export const MQ_MAX_WIDTH_LANDSCAPE = 1000;
export const MQ_MAX_HEIGHT_LANDSCAPE = 500;

export const MAX_DECIMALS_FOR_SVG_EXPORT = 2;

export const EXPORT_SCALES = [1, 2, 3];
export const DEFAULT_EXPORT_PADDING = 10; // px

export const DEFAULT_MAX_IMAGE_WIDTH_OR_HEIGHT = 1440;

export const ALLOWED_IMAGE_MIME_TYPES = [
  MIME_TYPES.png,
  MIME_TYPES.jpg,
  MIME_TYPES.svg,
  MIME_TYPES.gif,
] as const;

export const MAX_ALLOWED_FILE_BYTES = 2 * 1024 * 1024;

export const SVG_NS = "http://www.w3.org/2000/svg";

export const ENCRYPTION_KEY_BITS = 128;

export const VERSIONS = {
  excalidraw: 2,
  excalidrawLibrary: 2,
} as const;

export const BOUND_TEXT_PADDING = 5;

export const VERTICAL_ALIGN = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",
};

export const ELEMENT_READY_TO_ERASE_OPACITY = 20;
