import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../theme/Theme";
import { motion } from "framer-motion";

import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: require("../../assets/img/marker.png"),
  iconSize: [35, 35],
});

const light = "https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}";
const dark = "https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}";

const Map = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setUrl(theme === "light" ? light : dark);
    }
  }, [theme]);

  return (
    <>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[55.75222, 37.61556]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          ref={ref}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
          url={theme === "light" ? light : dark}
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
          <Marker position={[55.75222, 37.62157]} icon={markerIcon}>
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
