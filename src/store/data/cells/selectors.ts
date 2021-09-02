import { createSelector } from "reselect";
import { State } from "./types";

export const selectCellById = createSelector(
  (state: State, id: number) => state.cells.byId[id],
  (cell) => cell
);

export const selectCellIds = createSelector(
  (state: State) => state.cells.ids,
  (ids) => ids
);

export const selectAllCells = createSelector(
  (state: State) => Object.values(state.cells.byId),
  (cells) => cells
);

export const selectActiveCell = createSelector(
  (state: State) => state.cells.active,
  (activeCell) => activeCell
);