import { query_count } from "@rbxts/jecs-utils";
import { Goats } from "server/controllers/goats";
import type { ServerState } from "server/main.server";
import { ct } from "shared/components";

const MAX_GOATS = 20;
const SPAWN_THRESHOLD_MIN = 10;
const SPAWN_THRESHOLD_MAX = 20;

function system(state: ServerState) {
	let next_spawn = 0;
	return () => {
		const { world } = state;
		if (next_spawn > tick()) return;

		next_spawn = tick() + math.random(SPAWN_THRESHOLD_MIN, SPAWN_THRESHOLD_MAX);

		const current_goats = query_count(world.query(ct.walking));
		if (current_goats >= MAX_GOATS) return;

		print(`Spawning goat... (${current_goats + 1}/${MAX_GOATS})`);
		Goats.create(state);
	};
}

export default { name: "Spawn Goats", system };
