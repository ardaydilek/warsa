"use client";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  MapRef,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import React from "react";
import PropertiesCard from "@/components/properties-card";
import { CompassIcon } from "lucide-react";

type PropertiesMapReactProps = {
  initialViewState: any;
  properties: any[];
};

export default function PropertiesMapReact({
  initialViewState,
  properties,
}: PropertiesMapReactProps) {
  const [popupInfo, setPopupInfo] = React.useState(null);

  const mapRef = React.useRef<MapRef>();

  const checkIfPositionInViewport = (lat: number, lng: number) => {
    if (!mapRef.current) return false;
    const bounds = mapRef.current.getBounds();
    return bounds!.contains([lng, lat]);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `₺${(price / 1000000).toFixed(0)}m`;
    }
    return price.toLocaleString("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
    });
  };
  const markers = React.useMemo(
    () =>
      properties.map((property) => (
        <Marker
          key={`marker-${property.slug}`}
          longitude={property.longitude}
          latitude={property.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(property);
          }}
        >
          <div className="flex flex-col items-center">
            <p
              className={
                "relative -bottom-0.5 rounded-full bg-white px-2 py-0.5 font-sans text-base font-bold text-sky-800"
              }
            >
              {formatPrice(property.price)}
            </p>

            <div className={"size-2 rounded-full bg-primary"} />
          </div>
        </Marker>
      )),
    [properties]
  );

  return (
    <Map
      // @ts-ignore
      ref={mapRef}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      initialViewState={initialViewState}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <GeolocateControl position="top-right" />
      <FullscreenControl
        position="top-left"
        style={{
          borderRadius: "50%",
        }}
      />
      <NavigationControl position="top-left" />
      <ScaleControl />

      {markers}

      {popupInfo && (
        <Popup
          anchor="bottom"
          // @ts-ignore
          longitude={Number(popupInfo.longitude)}
          // @ts-ignore
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
          maxWidth="auto"
        >
          <PropertiesCard
            // @ts-ignore
            {...popupInfo}
            className={"w-72 font-sans"}
          />
        </Popup>
      )}
    </Map>
  );
}
