interface ReplicatedStorage extends Instance {
	TS: Folder & {
		components: ModuleScript & {
			objects: ModuleScript;
			instance: ModuleScript;
			positional: ModuleScript;
		};
	};
	assets: Folder & {
		goat: Model & {
			["Left Leg"]: Part & {
				Mesh: BlockMesh;
			};
			Humanoid: Humanoid;
			["Right Leg"]: Part & {
				Mesh: BlockMesh;
			};
			NoseWeld: Part & {
				Mesh: BlockMesh;
			};
			Torso: Part & {
				Tail: Decal;
				Mesh: BlockMesh;
			};
			HumanoidRootPart: Part & {
				["Left Leg"]: Weld;
				["Right Leg"]: Weld;
				["Right Arm"]: Weld;
				["Left Arm"]: Weld;
				NoseWeld: Weld;
				Torso: Weld;
				Middle: Weld;
				FakeHead: Weld;
			};
			FakeHead: Part & {
				Mesh: BlockMesh;
			};
			["Right Arm"]: Part & {
				Mesh: BlockMesh;
			};
			["Left Arm"]: Part & {
				Mesh: BlockMesh;
			};
			Middle: Part;
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				["jecs-utils"]: Folder & {
					jecs: ModuleScript;
					src: ModuleScript & {
						["is-a"]: ModuleScript;
						common: ModuleScript;
						["query-changed"]: ModuleScript;
						collect: ModuleScript;
						["query-count"]: ModuleScript;
						["query-entities"]: ModuleScript;
						["query-monitor"]: ModuleScript;
						observers: ModuleScript;
						interval: ModuleScript;
						ref: ModuleScript;
						["query-first"]: ModuleScript;
						["query-random"]: ModuleScript;
					};
				};
				jecs: Folder & {
					jecs: ModuleScript;
				};
				["planck-runservice"]: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							planck: Folder & {
								out: ModuleScript & {
									hooks: ModuleScript;
									Pipeline: ModuleScript;
									Scheduler: ModuleScript;
									Phase: ModuleScript;
									conditions: ModuleScript;
									DependencyGraph: ModuleScript;
									utils: ModuleScript;
								};
							};
						};
					};
					out: ModuleScript;
				};
				services: ModuleScript;
				planck: Folder & {
					src: ModuleScript & {
						hooks: ModuleScript;
						Pipeline: ModuleScript;
						Scheduler: ModuleScript;
						utils: ModuleScript;
						Phase: ModuleScript;
						conditions: ModuleScript;
						DependencyGraph: ModuleScript;
						__tests__: Folder & {
							["conditions.test"]: ModuleScript;
							["hooks.test"]: ModuleScript;
							["systems.test"]: ModuleScript;
							["InitializerSystems.test"]: ModuleScript;
							["Scheduler.test"]: ModuleScript;
						};
					};
				};
				["compiler-types"]: Folder & {
					types: Folder;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
			};
		};
	};
}
