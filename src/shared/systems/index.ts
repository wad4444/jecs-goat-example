import type { ClientState } from "client/main.client";
import type { ServerState } from "server/main.server";

export type SharedState = ServerState | ClientState;
