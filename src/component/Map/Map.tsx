import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { ThemeContext } from "../theme/Theme";
type Props = {};

const Map = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[55.75222, 37.61556]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.jawg.io/jawg-${
            theme === "dark" ? "dark" : "light"
          }/{z}/{x}/{y}{r}.png?access-token={accessToken}`}
          accessToken={process.env.REACT_APP_MAP_ID}
        />
        <Marker position={[55.75222, 37.61556]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
