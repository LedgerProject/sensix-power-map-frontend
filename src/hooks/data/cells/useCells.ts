import { selectAllCells } from "store/data/cells";
import { useSelector, useDispatch } from "hooks";
import { getCells } from "store/data/cells";
import { ICell } from "types";

export function useCells(): [ICell[], () => void] {
  const dispatch = useDispatch();

  const data = useSelector((state) => selectAllCells(state.data.cells));

  function handler() {
    dispatch(getCells());
  }

  return [data, handler];
}
