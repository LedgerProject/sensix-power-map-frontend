import { Action } from 'redux';

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
	{
		[K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
	}[Keys];

export type Map<K extends number | string, V> = { [k in K]: V };

export interface ActionWithPayload<T, P> extends Action<T> {
	payload: P;
}
