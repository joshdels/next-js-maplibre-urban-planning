var map = new maplibregl.Map({
  container: "map",
  style:
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
  center: [121.774, 12.8797],
  zoom: 9,
  attributionControl: false,
});

map.addControl(
  new maplibregl.NavigationControl({
    visualizePitch: false,
    visualizeRoll: true,
    showZoom: true,
    showCompass: false,
  }),
  "top-left",
);

function addGeojsonLayer(
  map,
  id,
  path,
  category,
  colorMap,
  geomType = "fill",
  fit = false,
  labelContainerId = null,
  colorDefault="#4d4d4d",
) {
  // 1️⃣ Add the source
  map.addSource(id, {
    type: "geojson",
    data: path,
  });

  // 2️⃣ Paint style
  let paint;
  if (geomType === "fill") {
    paint = {
      "fill-color": [
        "match",
        ["get", category],
        ...Object.entries(colorMap).flat(),
        colorDefault,
      ],
      "fill-opacity": 1,
      "fill-outline-color": "#000",
    };
  } else if (geomType === "line") {
    paint = {
      "line-color": [
        "match",
        ["get", category],
        ...Object.entries(colorMap).flat(),
        colorDefault,
      ],
      "line-width": 3,
    };
  } else if (geomType === "circle") {
    paint = {
      "circle-color": [
        "match",
        ["get", category],
        ...Object.entries(colorMap).flat(),
        colorDefault,
      ],
      "circle-radius": 6,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#000",
    };
  }

  // 3️⃣ Add the layer
  const layerId = `${id}-${geomType}`;
  map.addLayer({
    id: layerId,
    type: geomType,
    source: id,
    paint,
  });

  // 4️⃣ Optionally fit bounds
  if (fit && (geomType === "fill" || geomType === "line")) {
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        let minX = Infinity,
          minY = Infinity,
          maxX = -Infinity,
          maxY = -Infinity;

        data.features.forEach((f) => {
          const coords = f.geometry.coordinates.flat(Infinity);
          for (let i = 0; i < coords.length; i += 2) {
            const lon = coords[i];
            const lat = coords[i + 1];
            if (lon < minX) minX = lon;
            if (lon > maxX) maxX = lon;
            if (lat < minY) minY = lat;
            if (lat > maxY) maxY = lat;
          }
        });

        map.fitBounds(
          [
            [minX, minY],
            [maxX, maxY],
          ],
          { padding: 100 },
        );
      });
  }

  // 5️⃣ Add checkbox to the sidebar
  if (labelContainerId) {
    const container = document.getElementById(labelContainerId);
    if (container) {
      const div = document.createElement("div");
      div.className = "flex items-center mb-2";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;
      checkbox.id = layerId;
      checkbox.className = "mr-2";
      checkbox.addEventListener("change", (e) => {
        map.setLayoutProperty(
          layerId,
          "visibility",
          e.target.checked ? "visible" : "none",
        );
      });

      const label = document.createElement("label");
      label.htmlFor = layerId;
      label.textContent = id.charAt(0).toUpperCase() + id.slice(1);

      div.appendChild(checkbox);
      div.appendChild(label);
      container.appendChild(div);
    }
  }

  map.on("click", layerId, (e) => {
    const feature = e.features[0];
    if (!feature) return;

    const popupContent = Object.entries(feature.properties || {})
      .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
      .join("<br>");

    new maplibregl.Popup().setLngLat(e.lngLat).setHTML(popupContent).addTo(map);
  });

  map.on("mouseenter", layerId, () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", layerId, () => {
    map.getCanvas().style.cursor = "";
  });
}

map.on("load", () => {
  addGeojsonLayer(
    map,
    "boundary",
    "geojson/pitogo_brgy_boundary.geojson",
    "type",
    {
      "industrial forest plantation": "#2F7302",
    },
    "fill",
    true,
    "layers",
  );
  addGeojsonLayer(
    map,
    "forest",
    "geojson/forestland.geojson",
    "type",
    {
      "industrial forest plantation": "#2F7302",
      "forest reserved": "#1D4601",
    },
    "fill",
    true,
    "layers",
  );

  addGeojsonLayer(
    map,
    "agriculture",
    "geojson/agriculture.geojson",
    "type",
    {
      "protection agriculture zone": "#64D62F",
      "production agriculture zone": "#B7D62F",
      "agri-industrial zone": "#2FD64E",
    },
    "fill",
    true,
    "layers",
  );

  addGeojsonLayer(
    map,
    "residential",
    "geojson/existing_residentials.geojson",
    "Class",
    {
      "Residential": "#ffff00",
      "Informal Settlement": "#a5a511",
      "Socialized Housing": "#ffff2b",
    },
    "fill",
    true,
    "layers",
  );

  addGeojsonLayer(
    map,
    "commercial",
    "geojson/existing_commercialandcemetery.geojson",
    "Urban_Land",
    {
      Commercial: "#ff0000",
    },
    "fill",
    true,
    "layers",
  );

  addGeojsonLayer(
    map,
    "institutional",
    "geojson/institutional.geojson",
    "Urban_Land",
    {
      Commercial: "#ff0000",
    },
    "fill",
    true,
    "layers",
    "blue"
  );

  addGeojsonLayer(
    map,
    "road",
    "geojson/road_system.geojson",
    "Type",
    {
      "Beach Resort": "#ff9900",
    },
    "line",
    true,
    "layers",
    "#ffffff"
  );

  addGeojsonLayer(
    map,
    "tourism",
    "geojson/tourism.geojson",
    "Type",
    {
      "Beach Resort": "#ff9900"
    },
    "circle",
    true,
    "layers",
  );
});
