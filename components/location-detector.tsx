"use client";

import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

interface LocationData {
    country: string;
    city: string;
    country_code: string;
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
                    country_code: data.country_code,
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
            <div className="flex items-center gap-2 text-sm text-default-500">
                <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse" />
                Detectando ubicación...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center gap-2 text-sm text-danger">
                <div className="w-5 h-5 rounded-full bg-red-100" />
                {error}
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3 text-sm text-default-500">
            {location?.country_code && (
                <ReactCountryFlag
                    svg
                    countryCode={location.country_code}
                    style={{
                        width: "1.5em",
                        height: "1.5em",
                    }}
                    title={location.country}
                />
            )}
            <div>
                <span className="font-medium">{location?.city}</span>
                <span className="mx-1">,</span>
                <span>{location?.country}</span>
            </div>
        </div>
    );
}
