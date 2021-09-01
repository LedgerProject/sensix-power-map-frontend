import React, { SetStateAction } from "react";

import { Rectangle, useMap } from "react-leaflet";
import { ICell } from "src/types";

interface Props {
  cell: ICell;
  setCell: React.Dispatch<SetStateAction<ICell | undefined>>;
}

export function Cell({ cell, setCell }: Props) {
  const map = useMap();

  function onClickHandler() {
    setCell(cell);
    map.setView(cell.coordinates);
  }

  return (
    <div style={{ zIndex: 99999999 }}>
      <Rectangle
        eventHandlers={{
          click: () => onClickHandler(),
        }}
        key={`${cell.coordinates.lat}-${cell.coordinates.lng}`}
        pathOptions={{
          fillColor: "red",
          stroke: false,
          fill: true,
          fillOpacity: 0.6,
          interactive: true,
        }}
        bounds={[
          [cell.coordinates.lat, cell.coordinates.lng],
          [cell.coordinates.lat + 0.3, cell.coordinates.lng + 0.5],
        ]}
      />
    </div>
  );
}
