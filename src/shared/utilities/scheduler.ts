import type { System } from "@rbxts/planck";
import type { SharedState } from "shared/systems";

export function import_systems([root, path]: readonly [Instance, string[]]) {
	let instance = root;
	for (const part of path) {
		instance = instance.WaitForChild(part);
	}

	const systems: System<[SharedState]>[] = [];
	for (const child of instance.GetChildren()) {
		if (!child.IsA("ModuleScript")) continue;
		const system = require(child) as { default: System<[SharedState]> };
		systems.push(system.default);
	}
	return systems;
}
