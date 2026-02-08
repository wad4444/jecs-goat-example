import type { World } from "@rbxts/jecs";
import { ct } from "shared/components";

export function delay(world: World, seconds: number, callback: () => void) {
	const timer = world.entity();
	world.set(timer, ct.lifetime, seconds);
	world.set(timer, ct.cleanup, callback);
	return timer;
}
