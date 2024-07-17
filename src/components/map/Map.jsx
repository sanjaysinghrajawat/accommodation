import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import "./map.scss";

function Map({ items }) {
  return (
    <div className="space">
      <MapContainer className="map" center={[52.4797, -1.90269]} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {items.map(item => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
