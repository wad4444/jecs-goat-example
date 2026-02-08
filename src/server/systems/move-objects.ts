import { query_changed } from "@rbxts/jecs-utils";
import type { ServerState } from "server/main.server";
import { ct } from "shared/components";

function system({ world }: ServerState) {
	const on_humanoid_move = query_changed(
		world.query(ct.humanoid, ct.position).with(ct.walking),
	);

	return () => {
		for (const entity of on_humanoid_move) {
			const humanoid = world.get(entity, ct.humanoid);
			const position = world.get(entity, ct.position);
			assert(humanoid, "Humanoid not found");
			assert(position, "Position not found");

			humanoid.MoveTo(position);
		}
	};
}

export default { name: "Move Objects", system };
