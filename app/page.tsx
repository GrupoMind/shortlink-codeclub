import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";

import { subtitle } from "@/components/primitives";

export default function Home() {
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
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="Long URL"
              placeholder="https://example.com/very-long-url"
              type="url"
              variant="bordered"
            />
            <Input
              label="Custom Alias (Optional)"
              placeholder="my-custom-url"
              type="text"
              variant="bordered"
            />
            <Button color="primary" type="submit">
              Shorten URL
            </Button>
          </form>
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
