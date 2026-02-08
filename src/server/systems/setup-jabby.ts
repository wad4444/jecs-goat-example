import jabby from "@rbxts/jabby";
import { Phase } from "@rbxts/planck";
import type { ClientState } from "client/main.client";

function system({ world }: ClientState) {
	jabby.register({
		applet: jabby.applets.world,
		name: "world",
		configuration: { world },
	});
}

export default { name: "Setup Jabby", system, phase: Phase.Startup };
