import { ct } from "shared/components";
import type { SharedState } from ".";

function system({ world }: SharedState) {
	for (const [entity, on_click, instance] of world
		.query(ct.on_click, ct.instance)
		.without(ct.click_detector)) {
		const detector_instance = new Instance("ClickDetector");
		detector_instance.Parent = instance;

		world.set(entity, ct.click_detector, detector_instance);
		detector_instance.MouseClick.Connect(on_click);
	}

	for (const [entity] of world.query(ct.click_detector).without(ct.on_click)) {
		world.remove(entity, ct.click_detector);
	}
}

export default { name: "Clickables", system };
