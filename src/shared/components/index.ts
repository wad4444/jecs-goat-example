import { meta, Name } from "@rbxts/jecs";
import * as instance_components from "./instance";
import * as object_components from "./objects";
import * as positional_components from "./positional";
import * as misc_components from "./misc";

export const ct = {
	...object_components,
	...positional_components,
	...instance_components,
	...misc_components,
} as const;

for (const [name, value] of pairs(ct)) {
	meta(value, Name, name);
}
