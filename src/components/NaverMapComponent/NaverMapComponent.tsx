"use client";

import React, { useEffect, useRef } from "react";
import styles from "./NaverMapComponent.module.scss";

interface Location {
  lat: number;
  lng: number;
}

interface NaverMapComponentProps {
  location1: Location;
  location2: Location;
}

const NaverMapComponent = ({
  location1,
  location2,
}: NaverMapComponentProps) => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      const { naver } = window;

      if (!mapElement.current || !naver) return;

      const mapOptions = {
        center: new naver.maps.LatLng(location1.lat, location1.lng),
        zoom: 18,
      };

      const map = new naver.maps.Map(mapElement.current, mapOptions);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(location1.lat, location1.lng),
        map: map,
      });

      new naver.maps.Marker({
        position: new naver.maps.LatLng(location2.lat, location2.lng),
        map: map,
      });

      new naver.maps.Polyline({
        path: [
          new naver.maps.LatLng(location1.lat, location1.lng),
          new naver.maps.LatLng(location2.lat, location2.lng),
        ],
        map: map,
        strokeColor: "#FF0000",
        strokeWeight: 3,
      });
    };

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.WEB_NCLOUD_CLIENT_ID}`;
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [location1, location2]);

  return (
    <div className={styles["map-container"]}>
      <div ref={mapElement} className={styles.map} />
    </div>
  );
};

export default NaverMapComponent;
