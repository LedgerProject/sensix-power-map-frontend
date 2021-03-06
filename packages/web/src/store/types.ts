import { ApiFactory } from '@sensix-map/api';
import { ThunkAction, ThunkDispatch as Dispatch } from 'redux-thunk';
import { Actions as ThemeActions } from './ui/theme';
import { Actions as FilterActions } from './ui/filters';
import { Actions as CellActions } from './data/cells';
import { ApplicationState } from './root';

export type ApplicationActions = ThemeActions | FilterActions | CellActions;

export type Thunk = ThunkAction<Promise<void>, ApplicationState, ThunkContext, ApplicationActions>;
export type ThunkDispatch = Dispatch<ApplicationState, ThunkContext, ApplicationActions>;

export interface ThunkContext {
	api: ApiFactory;
}
