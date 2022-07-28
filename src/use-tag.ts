import { Tag as windowTag } from "./tag";

declare global {
  interface window {
    Tag: typeof windowTag;
  }
}

// @ts-ignore
window.Tag = windowTag;
