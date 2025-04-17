"use client";

import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { useState } from "react";

import { ParallaxItem } from "@/components/page-transition";
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
    <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-16">
      <ParallaxItem index={0}>
        <div className="inline-block max-w-2xl text-center justify-center mb-4">
          <h1 className="text-5xl font-bold mb-3">URL Shortener</h1>
          <div className="text-xl text-default-500 mt-4">
            Create short, memorable links in seconds
          </div>
        </div>
      </ParallaxItem>

      <ParallaxItem index={1}>
        <Card className="w-full max-w-[380px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[800px] backdrop-blur-sm bg-background/70 shadow-xl border-1 border-white/10">
          <CardHeader className="flex flex-col gap-2 pb-2 pt-6 px-8">
            <h2 className="text-2xl font-bold">Shorten your URL</h2>
            <p className="text-default-500">
              Enter your long URL below to get a shortened version
            </p>
          </CardHeader>
          <CardBody className="py-6 px-8">
            <form className="flex flex-col gap-6">
              <Input
                isRequired
                classNames={{
                  base: "max-w-full",
                  input: "text-base",
                  inputWrapper: "border-1 border-default-200 data-[hover=true]:border-primary",
                }}
                label="Long URL"
                labelPlacement="outside"
                placeholder="https://example.com/very-long-url"
                size="lg"
                type="url"
                variant="bordered"
              />
              <Input
                classNames={{
                  base: "max-w-full",
                  input: "text-base",
                  inputWrapper: "border-1 border-default-200 data-[hover=true]:border-primary",
                }}
                label="Custom Alias (Optional)"
                labelPlacement="outside"
                placeholder="my-custom-url"
                size="lg"
                type="text"
                variant="bordered"
              />
              <div className="pt-2">
                <Button 
                  className="w-full font-medium text-base h-12" 
                  color="primary" 
                  size="lg" 
                  type="submit"
                >
                  Shorten URL
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </ParallaxItem>

      <ParallaxItem index={2}>
        <div className="flex gap-3 mt-4">
          <Link className="text-primary text-lg font-medium" href="/auth/login">
            Login to access more features
          </Link>
        </div>
      </ParallaxItem>
    </section>
  );
}
