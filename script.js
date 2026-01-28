// 🔑 Cesium Token
Cesium.Ion.defaultAccessToken = "BURAYA_TOKEN_YAPISTIR";

// 🌍 Viewer
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: Cesium.Terrain.fromWorldTerrain(),
  shouldAnimate: true
});

// ✈️ Başlangıç konumu (Türkiye üstü)
let position = Cesium.Cartesian3.fromDegrees(35, 39, 3000);
let heading = 0;
let pitch = 0;
let roll = 0;

// ✈️ Uçak entity
const airplane = viewer.entities.add({
  position: position,
  model: {
    uri: "https://cdn.jsdelivr.net/gh/CesiumGS/cesium@main/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
    minimumPixelSize: 128,
    maximumScale: 200
  }
});

// 🎥 Kamera uçağı takip etsin
viewer.trackedEntity = airplane;

// 🎮 Kontroller
document.addEventListener("keydown", (e) => {
  const speed = 50;

  if (e.key === "w") pitch += 0.02;
  if (e.key === "s") pitch -= 0.02;
  if (e.key === "a") heading += 0.03;
  if (e.key === "d") heading -= 0.03;
  if (e.key === "q") position = Cesium.Cartesian3.add(position, new Cesium.Cartesian3(0, 0, 100), new Cesium.Cartesian3());
  if (e.key === "e") position = Cesium.Cartesian3.add(position, new Cesium.Cartesian3(0, 0, -100), new Cesium.Cartesian3());

  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    new Cesium.HeadingPitchRoll(heading, pitch, roll)
  );

  airplane.position = position;
  airplane.orientation = orientation;
});


