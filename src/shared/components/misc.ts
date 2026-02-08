import { component, tag } from "@rbxts/jecs";

export const lifetime = component<number>();
export const on_click = component<Callback>();
export const cleanup = component<Callback>();
export const destroy = tag();
export const processed = tag();
