import { useMemo } from "react";
import Map, { Source, Layer } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

// Coordenadas reales de los municipios clave de Jalisco
const municipioCoords = {
  "Guadalajara": { lng: -103.3496, lat: 20.6597 },
  "Zapopan": { lng: -103.4068, lat: 20.7214 },
  "Tlaquepaque": { lng: -103.3138, lat: 20.6409 },
  "Tonala": { lng: -103.2347, lat: 20.6240 },
  "Tlajomulco": { lng: -103.4441, lat: 20.4749 },
  "El Salto": { lng: -103.1851, lat: 20.5186 },
  "Puerto Vallarta": { lng: -105.2353, lat: 20.6534 },
  "Lagos de Moreno": { lng: -101.9313, lat: 21.3544 },
  "Tepatitlan": { lng: -102.7614, lat: 20.8175 },
  "Ocotlan": { lng: -102.7708, lat: 20.3467 },
  "Autlan": { lng: -104.3642, lat: 19.7717 },
  "Ameca": { lng: -104.0461, lat: 20.5496 },
  "Cihuatlan": { lng: -104.5728, lat: 19.2386 },
  "Ixtlahuacan de los M.": { lng: -103.1867, lat: 20.4200 },
  "Zapotlan el Grande": { lng: -103.4617, lat: 19.7081 },
};

export default function JaliscoHeatMap({ municipiosData }) {
  const heatmapData = useMemo(() => ({
    type: "FeatureCollection",
    features: municipiosData
      .filter((m) => municipioCoords[m.municipio])
      .map((m) => {
        const pop = parseInt(m.poblacion?.replace(/,/g, "")) || 50000;
        return {
          type: "Feature",
          properties: {
            // Mas poblacion + mas aprobacion = mas intensidad
            intensity: (m.aprobacion / 100) * (Math.log10(pop) / 6),
          },
          geometry: {
            type: "Point",
            coordinates: [municipioCoords[m.municipio].lng, municipioCoords[m.municipio].lat],
          },
        };
      }),
  }), [municipiosData]);

  return (
    <div className="relative w-full" style={{ height: 500 }}>
      <Map
        initialViewState={{
          longitude: -103.5,
          latitude: 20.2,
          zoom: 6.8,
        }}
        style={{ width: "100%", height: "100%", borderRadius: 4 }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        interactive={true}
        scrollZoom={true}
      >
        <Source id="heat" type="geojson" data={heatmapData}>
          <Layer
            id="heatmap-layer"
            type="heatmap"
            paint={{
              "heatmap-weight": ["get", "intensity"],
              "heatmap-intensity": 2,
              "heatmap-radius": 60,
              "heatmap-opacity": 0.7,
              "heatmap-color": [
                "interpolate",
                ["linear"],
                ["heatmap-density"],
                0, "rgba(0,0,0,0)",
                0.15, "rgba(0,0,255,0.15)",
                0.3, "rgba(0,255,200,0.4)",
                0.5, "rgba(255,255,0,0.6)",
                0.7, "rgba(255,160,0,0.75)",
                0.9, "rgba(255,60,0,0.85)",
                1, "rgba(230,57,70,1)",
              ],
            }}
          />
        </Source>
      </Map>

      {/* Leyenda */}
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-sm px-3 py-2 shadow-sm border border-gray-border">
        <p className="text-[9px] sm:text-[10px] font-semibold text-dark uppercase tracking-wider mb-1.5">Intensidad</p>
        <div className="flex items-center gap-1">
          <span className="text-[9px] text-gray-medium">Baja</span>
          <div className="w-24 h-2.5 rounded-full" style={{
            background: "linear-gradient(to right, rgba(0,0,255,0.3), rgba(0,255,200,0.5), rgba(255,255,0,0.7), rgba(255,160,0,0.85), rgba(230,57,70,1))"
          }} />
          <span className="text-[9px] text-gray-medium">Alta</span>
        </div>
      </div>
    </div>
  );
}
