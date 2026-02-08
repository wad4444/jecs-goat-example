import { Phase } from "@rbxts/planck";
import { ct } from "shared/components";
import type { SharedState } from ".";

function system({ world }: SharedState) {
	world.removed(ct.instance, (entity) => {
		const instance = world.get(entity, ct.instance);
		instance?.Destroy();
	});

	world.removed(ct.click_detector, (entity) => {
		const detector = world.get(entity, ct.click_detector);
		detector?.Destroy();
	});

	world.removed(ct.cleanup, (entity) => {
		if (!world.has(entity, ct.destroy)) return;
		const cleanup = world.get(entity, ct.cleanup);
		cleanup?.();
	});
}

export default { name: "Bootstrap Components", system, phase: Phase.Startup };
