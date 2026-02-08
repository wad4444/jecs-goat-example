import { ReplicatedStorage, Workspace } from "@rbxts/services";
import type { ServerState } from "server/main.server";
import { ct } from "shared/components";

export namespace Goats {
	function get_random_goat_position() {
		return new Vector3(math.random(-100, 100), 2, math.random(-100, 100));
	}

	export function get_wandering_spot(current: Vector3) {
		return current.add(
			new Vector3(math.random(-30, 30), 0, math.random(-30, 30)),
		);
	}

	function create_goat_model() {
		const original_model = ReplicatedStorage.assets.goat;
		const cloned_model = original_model.Clone();
		cloned_model.Parent = Workspace;

		return cloned_model;
	}

	export function create({ world }: ServerState) {
		const goat_entity = world.entity();
		world.add(goat_entity, ct.walking);

		const goat_position = get_random_goat_position();
		world.set(goat_entity, ct.position, goat_position);

		const goat_model = create_goat_model();
		goat_model.PivotTo(new CFrame(goat_position));

		world.set(goat_entity, ct.instance, goat_model);
		world.set(goat_entity, ct.humanoid, goat_model.Humanoid);

		world.set(goat_entity, ct.on_click, () => {
			world.delete(goat_entity);
		});

		return goat_entity;
	}
}
