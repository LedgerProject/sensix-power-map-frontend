import { createSelector } from 'reselect';
import { State } from './types';

export const selectCellById = createSelector(
	(state: State, id: string | undefined) => (id ? state.cells.byId[id] : undefined),
	(cell) => cell
);

export const selectCellIds = createSelector(
	(state: State) => state.cells.ids,
	(ids) => ids
);

export const selectAllCells = createSelector(
	(state: State) => Object.values(state.cells.overview),
	(cells) => cells
);

export const selectActiveCell = createSelector(
	(state: State) => state.cells.active,
	(activeCell) => activeCell
);
