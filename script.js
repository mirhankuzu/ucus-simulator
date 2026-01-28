
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
  shouldAnimate: true
});

let position = Cesium.Cartesian3.fromDegrees(36.9, 37.1, 2000);

const plane = viewer.entities.add({
  position: position,
  model: {
    uri: "https://cesium.com/downloads/cesiumjs/releases/1.111/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
    minimumPixelSize: 80
  }
});

viewer.trackedEntity = plane;

let speed = 0.0003;

window.addEventListener("keydown", (e) => {
  let carto = Cesium.Cartographic.fromCartesian(position);

  if (e.key === "w") carto.latitude += speed;
  if (e.key === "s") carto.latitude -= speed;
  if (e.key === "a") carto.longitude -= speed;
  if (e.key === "d") carto.longitude += speed;
  if (e.key === "q") carto.height += 200;
  if (e.key === "e") carto.height -= 200;

  position = Cesium.Cartesian3.fromRadians(
    carto.longitude,
    carto.latitude,
    carto.height
  );

  plane.position = position;
});
