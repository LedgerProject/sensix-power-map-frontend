import { TileLayer as MapLayer, useMap } from "react-leaflet";
import { useActiveTheme, useZoom, useCenter } from "hooks";

export function TileLayer() {
  const [, setZoom] = useZoom();
  const [, setCenter] = useCenter();

  const map = useMap();

  map.addEventListener("zoom", (e) => {
    setZoom(e.target._zoom);
    setCenter(e.target._renderer._center);
  });

  map.addEventListener("dragend", (e) => {
    setCenter(e.target._renderer._center);
  });

  const [theme] = useActiveTheme();
  if (theme === "light")
    return (
      <MapLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
      />
    );
  return (
    <MapLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    />
  );
}