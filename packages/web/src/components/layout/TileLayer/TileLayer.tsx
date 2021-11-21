import { TileLayer as MapLayer, useMapEvents } from "react-leaflet";
import { useActiveTheme, useZoom, useCenter } from "hooks";

export function TileLayer() {
  const [theme] = useActiveTheme();

  const mapEvents = useMapEvents({
    moveend: () => {
      setCenter(mapEvents.getCenter());
    },
    zoom: () => {
      setZoom(mapEvents.getZoom());
    },
  });

  const [, setZoom] = useZoom();
  const [, setCenter] = useCenter();

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
      url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      subdomains="abcd"
      maxZoom={19}
    />
  );
}
