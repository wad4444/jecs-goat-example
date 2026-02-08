import type { ServerState } from "server/main.server";
import { ct } from "shared/components";

function system({ world }: ServerState) {
	for (const [, humanoid, position] of world.query(ct.humanoid, ct.position)) {
		if (humanoid.WalkToPoint === position) continue;
		humanoid.MoveTo(position);
	}
}

export default { name: "Move Objects", system };
