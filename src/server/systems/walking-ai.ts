import { ChildOf, pair } from "@rbxts/jecs";
import { Goats } from "server/controllers/goats";
import type { ServerState } from "server/main.server";
import { ct } from "shared/components";
import { delay } from "shared/utilities/ecs";

function system({ world }: ServerState) {
	for (const [entity, position, humanoid] of world
		.query(ct.position, ct.humanoid)
		.with(ct.walking)
		.without(pair(ct.processed, ct.walking))) {
		world.add(entity, pair(ct.processed, ct.walking));

		const new_position = Goats.get_wandering_spot(position);
		world.set(entity, ct.position, new_position);

		const difference = new_position.sub(position);
		const distance = difference.Magnitude;
		const time_to_reach = distance / humanoid.WalkSpeed;

		const wait_duration = time_to_reach + math.random(3, 6);
		const timer_entity = delay(world, wait_duration, () => {
			world.remove(entity, pair(ct.processed, ct.walking));
		});
		world.add(timer_entity, pair(ChildOf, entity));
	}
}

export default { name: "Walking AI", system };
