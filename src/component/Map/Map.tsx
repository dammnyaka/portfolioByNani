import { useContext } from "react";
import { ThemeContext } from "../theme/Theme";
import { motion } from "framer-motion";

import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: require("../../assets/img/marker.png"),
  iconSize: [35, 35],
});

const Map = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[55.75222, 37.61556]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
          url={`https://{s}.tile.jawg.io/jawg-${
            theme === "dark" ? "dark" : "light"
          }/{z}/{x}/{y}{r}.png?access-token={accessToken}`}
          accessToken={process.env.REACT_APP_MAP_ID}
        />
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            opacity: 1,
            zIndex: 10,
          }}
        >
          <Marker position={[55.75222, 37.61556]} icon={markerIcon}>
            <Popup>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit
            </Popup>
          </Marker>
        </motion.div>
      </MapContainer>
    </>
  );
};

export default Map;
