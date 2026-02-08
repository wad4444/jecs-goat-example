import { ct } from "shared/components";
import type { SharedState } from ".";

function system({ world, scheduler }: SharedState) {
	const delta_time = scheduler.getDeltaTime();

	for (const [entity] of world.query(ct.destroy)) {
		world.delete(entity);
	}

	for (const [entity, lifetime] of world
		.query(ct.lifetime)
		.without(ct.destroy)) {
		if (lifetime <= 0) world.add(entity, ct.destroy);
		world.set(entity, ct.lifetime, math.max(0, lifetime - delta_time));
	}
}

export default { name: "Lifetimes", system };
