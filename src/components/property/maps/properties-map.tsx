"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl, { FullscreenControl, NavigationControl } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

type PropertiesMapProps = {
  properties: any;
  initialViewState: any;
};

export default function PropertiesMap({
  properties,
  initialViewState,
}: PropertiesMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>();
  const map = useRef<mapboxgl.Map>();
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const [filteredProperties, setFilteredProperties] =
    useState<any[]>(properties);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [initialViewState.long, initialViewState.lat],
      zoom: initialViewState.zoom,
    });

    map.current.addControl(new FullscreenControl(), "top-left");
    map.current.addControl(new NavigationControl(), "top-left");

    map.current.on("click", handleMapClick);
    map.current.on("dragstart", closePopup);

    return () => {
      if (map.current) {
        map.current.off("click", handleMapClick);
        map.current.off("dragstart", closePopup);
        map.current.remove();
        map.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    const filtered = properties;
    setFilteredProperties(filtered);

    if (map.current) {
      // Remove existing markers
      document.querySelectorAll(".marker").forEach((el) => el.remove());
      // Add new markers
      addMarkersToMap(filtered);
    }
  }, [properties]);

  const addMarkersToMap = (props = filteredProperties) => {
    props.forEach((property) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.innerHTML = `$${property.price.toLocaleString()}`;
      el.style.backgroundColor = "white";
      el.style.color = "black";
      el.style.padding = "5px 10px";
      el.style.borderRadius = "20px";
      el.style.fontWeight = "bold";
      el.style.fontSize = "12px";
      el.style.display = "flex";
      el.style.justifyContent = "center";
      el.style.alignItems = "center";
      el.style.cursor = "pointer";

      el.addEventListener("click", (e) => {
        e.stopPropagation();
        setSelectedProperty(property);
      });

      new mapboxgl.Marker(el)
        .setLngLat([property.longitude, property.latitude])
        .addTo(map.current!);
    });
  };

  const handleMapClick = (e: mapboxgl.MapMouseEvent) => {
    const features = map.current?.queryRenderedFeatures(e.point, {
      layers: ["gl-draw-polygon-fill-active.cold"],
    });
    if (features && features.length === 0) {
      closePopup();
    }
  };

  const closePopup = () => {
    setSelectedProperty(null);
  };

  // console.log(properties);

  return (
    <div className="land-map-container">
      {/* Map */}
      <div className="map-and-list">
        <div
          className="map-container"
          ref={mapContainerRef}
        />
      </div>
      {selectedProperty && (
        <div
          className="property-popup"
          style={{
            position: "absolute",
            left: `${
              map.current?.project([
                selectedProperty.longitude,
                selectedProperty.latitude,
              ]).x - 50
            }px`,
            top: `${
              map.current!.project([
                selectedProperty.longitude,
                selectedProperty.latitude,
              ]).y - 150
            }px`,
          }}
        >
          <img
            src={selectedProperty.imageUrl}
            alt={selectedProperty.location}
          />
          <h3>${selectedProperty.price.toLocaleString()}</h3>
          <p>{selectedProperty.acres} acres</p>
          <p>{selectedProperty.location}</p>
        </div>
      )}
      <style jsx>{`
        .land-map-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .search-filters {
          padding: 10px;
          background: #f0f0f0;
        }
        .filters {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
        .map-and-list {
          display: flex;
          height: 100%;
        }
        .map-container {
          flex: 2;
          height: 100%;
        }
        .property-popup {
          background: white;
          padding: 10px;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 200px;
        }
        .property-popup img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          border-radius: 4px;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}
