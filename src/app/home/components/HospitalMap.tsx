import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function HospitalsMap() {
  return (
    <MapContainer
      center={[30.0444, 31.2357]}
      zoom={12}
      style={{ height: 200, width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={[30.05, 31.25]}>
        <Popup>City Hospital</Popup>
      </Marker>

      <Marker position={[30.03, 31.22]}>
        <Popup>Green Valley Hospital</Popup>
      </Marker>
    </MapContainer>
  );
}
