"use client";

import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { useState } from "react";

import { subtitle } from "@/components/primitives";
import { LocationDetector } from "@/components/location-detector";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [location, setLocation] = useState<{
    city: string;
    country: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para acortar el URL
    // Por ahora solo simulamos la respuesta
    setShortenedUrl("shrt.ly/abc123");

    // Obtener la ubicación actual
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      setLocation({
        city: data.city,
        country: data.country_name,
      });
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1>URL Shortener</h1>
        <div className={subtitle({ class: "mt-4" })}>
          Create short, memorable links in seconds
        </div>
      </div>

      <Card className="max-w-xl w-full">
        <CardHeader className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Shorten your URL</h2>
          <p className="text-sm text-default-500">
            Enter your long URL below to get a shortened version
          </p>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              isRequired
              label="Long URL"
              placeholder="https://example.com/very-long-url"
              type="url"
              value={longUrl}
              variant="bordered"
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <Input
              label="Custom Alias (Optional)"
              placeholder="my-custom-url"
              type="text"
              value={customAlias}
              variant="bordered"
              onChange={(e) => setCustomAlias(e.target.value)}
            />
            <Button color="primary" type="submit">
              Shorten URL
            </Button>
          </form>

          {/* Mostrar la ubicación detectada */}
          <div className="mt-4">
            <LocationDetector />
          </div>

          {/* Mostrar el URL acortado y la ubicación si existe */}
          {shortenedUrl && (
            <div className="mt-4 p-4 bg-default-100 rounded-lg">
              <div className="font-medium">URL Acortado:</div>
              <div className="text-primary">{shortenedUrl}</div>
              {location && (
                <div className="mt-2 text-sm text-default-500">
                  Ubicación de creación: {location.city}, {location.country}
                </div>
              )}
            </div>
          )}
        </CardBody>
      </Card>

      <div className="flex gap-3 mt-4">
        <Link className="text-primary" href="/auth/login">
          Login to access more features
        </Link>
      </div>
    </section>
  );
}
