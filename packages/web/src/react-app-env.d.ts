/// <reference types="node" />
/// <reference types="react-scripts" />

declare namespace NodeJS {
	interface ProcessEnv {
		REACT_APP_HOSTNAME: string;
	}
}
