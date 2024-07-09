<template>
  <div style="height: 600px; width: 800px">
    <LMap ref="map" v-model:zoom="zoom" v-model:center="center">
      <l-geo-json
        v-model:geojson="geojson"
        v-model:geojsonOptions="geojsonOptions"
      />
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></LTileLayer>
    </LMap>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LGeoJson } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  data() {
    return {
      zoom: 13,
      center: [-14.22, -42.78],
      geojson: {
        type: "Feature",
        geometry: {
          type: "MultiPoint",
          coordinates: [
            [-42.78, -14.22],
            [-42.79, -14.23],
          ],
        },
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
    };
  },
};
</script>

<style></style>