// @ts-ignore
import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine, Serie } from "@nivo/line";
import React, { useEffect, useState } from "react";
import { Container } from "../style";

import { LastPoint } from "./LastPoint";

interface DataPoint {
  x: number;
  y: number;
}

interface Props {
  color?: string;
  colors?: string[];
  data?: DataPoint[] | null;
  datasets?: Array<DataPoint[]> | null;
  height?: number;
  lineWidth?: number;
  areaOpacity?: number;
}

export function TrendChart({
  areaOpacity = 0.15,
  color,
  lineWidth = 2,
  colors = [],
  data,
  datasets,
}: Props) {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    if (datasets) {
      setSeries(
        datasets.map((dataset, index) => ({
          id: `dataset-${index}`,
          data: dataset.map((d, i) => ({ x: i, y: d.y })),
        }))
      );
    }

    if (data) {
      setSeries([{ id: "data", data: data.map((d) => ({ x: d.x, y: d.y })) }]);
    }
  }, [data, datasets]);

  return (
    <Container>
      <ResponsiveLine
        animate={false}
        areaOpacity={areaOpacity}
        axisBottom={null}
        axisLeft={null}
        colors={color || colors}
        curve="cardinal"
        data={series}
        enableArea
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        defs={[
          linearGradientDef("gradient", [
            { offset: 0, color: "inherit" },
            { offset: 100, color: "inherit", opacity: 0 },
          ]),
        ]}
        fill={[{ match: "*", id: "gradient" }]}
        layers={[
          "grid",
          "markers",
          "axes",
          "areas",
          "crosshair",
          "lines",
          "points",
          "slices",
          "mesh",
          "legends",
          LastPoint,
        ]}
        lineWidth={lineWidth}
        margin={{ top: 20, bottom: 20, right: 10 }}
      />
    </Container>
  );
}