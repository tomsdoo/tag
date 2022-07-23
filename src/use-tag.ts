import { Tag as windowTag } from "./tag";

declare global {
  interface window {
    Tag: typeof windowTag;
  }
}

window.Tag = windowTag;
