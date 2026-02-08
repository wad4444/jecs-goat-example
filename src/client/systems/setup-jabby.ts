import jabby from "@rbxts/jabby";
import { Phase } from "@rbxts/planck";
import { ContextActionService } from "@rbxts/services";
import type { ClientState } from "client/main.client";

function system({ world }: ClientState) {
	const jabby_client = jabby.obtain_client();

	function create_widget(_: string, state: Enum.UserInputState) {
		if (state !== Enum.UserInputState.Begin) return;
		jabby_client.spawn_app(jabby_client.apps.home);
	}

	ContextActionService.BindAction(
		"Open Jabby Home",
		create_widget,
		false,
		Enum.KeyCode.F4,
	);

	jabby.register({
		applet: jabby.applets.world,
		name: "world",
		configuration: { world },
	});
}

export default { name: "Setup Jabby", system, phase: Phase.Startup };
