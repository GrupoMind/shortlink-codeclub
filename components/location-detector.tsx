"use client";

import { useState, useEffect } from "react";

interface LocationData {
    country: string;
    city: string;
    ip: string;
}

export function LocationDetector() {
    const [location, setLocation] = useState<LocationData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const detectLocation = async () => {
            try {
                // Usando ipapi.co para la detección de ubicación
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.reason || "Error al detectar ubicación");
                }

                setLocation({
                    country: data.country_name,
                    city: data.city,
                    ip: data.ip,
                });
            } catch (err) {
                setError("No se pudo detectar la ubicación");
                console.error("Error detecting location:", err);
            } finally {
                setLoading(false);
            }
        };

        detectLocation();
    }, []);

    if (loading) {
        return (
            <div className="text-sm text-default-500">Detectando ubicación...</div>
        );
    }

    if (error) {
        return <div className="text-sm text-danger">{error}</div>;
    }

    return (
        <div className="text-sm text-default-500">
            Ubicación detectada: {location?.city}, {location?.country}
            <div className="text-xs mt-1">IP: {location?.ip}</div>
        </div>
    );
}
