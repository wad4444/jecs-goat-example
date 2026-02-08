import { type World, world } from "@rbxts/jecs";
import { Scheduler } from "@rbxts/planck";
import jabby_plugin from "@rbxts/planck-jabby";
import { Plugin as runservice_plugin } from "@rbxts/planck-runservice";

import "shared/components";
import { import_systems } from "shared/utilities/scheduler";

export interface ServerState {
	readonly world: World;
	readonly scheduler: Scheduler<[ServerState]>;
}

const state = { world: world(), scheduler: undefined! };
const scheduler = new Scheduler(state);
scheduler.addPlugin(new runservice_plugin());
scheduler.addPlugin(new jabby_plugin());

const server_systems = import_systems($getModuleTree("server/systems"));
const shared_systems = import_systems($getModuleTree("shared/systems"));

scheduler.addSystems(server_systems);
scheduler.addSystems(shared_systems);

(state as Writable<ServerState>).scheduler = scheduler;
