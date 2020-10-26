import { writable } from "svelte/store";

export const audioSrc = writable("none");
export const count = writable(0);
export const firstLoad = writable(true);
