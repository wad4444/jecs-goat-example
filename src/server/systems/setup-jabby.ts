import jabby from "@rbxts/jabby";
import { Phase } from "@rbxts/planck";
import type { ServerState } from "server/main.server";

function system({ world }: ServerState) {
	jabby.register({
		applet: jabby.applets.world,
		name: "world",
		configuration: { world },
	});
}

export default { name: "Setup Jabby", system, phase: Phase.Startup };
