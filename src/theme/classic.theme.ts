import { Sizes, StickyPositions, Variants } from "./types";

export const ButtonCommon = {
  borderRadius: "5px",
  border: 0,
  cursor: "pointer",
};

export const stickyPosition: StickyPositions = {
  "top-left": {
    position: "fixed",
    top: ".85em",
    left: ".85em",
  },
  "top-right": {
    position: "fixed",
    top: ".85em",
    right: ".85em",
  },
  "bottom-left": {
    position: "fixed",
    bottom: ".85em",
    left: ".85em",
  },
  "bottom-right": {
    position: "fixed",
    bottom: ".85em",
    right: ".85em",
  },
};

export const variants: Variants = {
  primary: {
    backgroundColor: "#1775c8",
    color: "white",
    boxShadow: "0px 5px #2347a8",
  },
  secondary: {
    backgroundColor: "#6610f2",
    color: "white",
    boxShadow: "0px 5px #4610f2",
  },
  error: {
    backgroundColor: "#dc3545",
    color: "white",
    boxShadow: "0px 5px #ac3545",
  },
  success: {
    backgroundColor: "#28a745",
    color: "white",
    boxShadow: "0px 5px rgb(35, 126, 13)",
  },
  orange: {
    backgroundColor: "#fd7e14",
    color: "white",
    boxShadow: "0px 5px #cd7e14",
  },
};

export const sizes: Sizes = {
  small: {
    minWidth: "3em",
    fontSize: "calc(10px + .5vmin)",
    padding: ".85em",
  },
  medium: {
    minWidth: "4em",
    fontSize:  "calc(10px + 1.5vmin)",
    padding: ".85em",
  },
  large: {
    minWidth: "4em",
    fontSize:  "calc(10px + 2.5vmin)",
    padding: ".85em",
  },
};


