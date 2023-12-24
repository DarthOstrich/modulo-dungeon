import { writable } from "svelte/store";

export const audioPlayer = writable()

export const activeTrackURL = writable("prologue-the-traveler")
export const activeTrackTitle = writable("Prologue - The Traveler")
export const activeTrackIndex = writable(0)
