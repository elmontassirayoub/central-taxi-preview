import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

type CoordinationType = {
    lat: number,
    lng: number
}

const DirectionMap = ({ depart, arrive }: { depart: CoordinationType | null, arrive: CoordinationType | null }) => {

    const mapRef = useRef<L.Map>(null);

    const markers = [depart, arrive]

    useEffect(() => {
        if (mapRef.current && markers.length > 0) {
            const bounds = L.latLngBounds(markers.map(marker => marker));
            mapRef.current?.fitBounds(bounds);
        }
    }, [markers]);


    if (depart === null || arrive === null) return

    return (
        <MapContainer
            ref={mapRef}
            center={depart}
            zoom={6}
            bounds={[[90, 180], [-90, 180]]}
            minZoom={2}
            maxBoundsViscosity={1.0} 
            className="w-[300px] h-[300px]">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => (
                <Marker key={index} position={marker}>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default DirectionMap;
