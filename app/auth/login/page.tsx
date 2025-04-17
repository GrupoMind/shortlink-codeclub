import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { ParallaxItem } from "@/components/page-transition";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-16">
      <ParallaxItem index={0}>
        <div className="inline-block max-w-2xl text-center justify-center mb-4">
          <h1 className="text-5xl font-bold mb-3">Welcome Back</h1>
          <p className="text-default-500 text-xl">
            Login to access your account and manage your shortened links
          </p>
        </div>
      </ParallaxItem>

      <ParallaxItem index={1}>
        <Card className="w-full max-w-[380px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[700px] backdrop-blur-sm bg-background/70 shadow-xl border-1 border-white/10">
          <CardHeader className="flex flex-col gap-2 pb-2 pt-6 px-8">
            <h2 className="text-2xl font-bold">Login</h2>
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
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                size="lg"
                type="email"
                variant="bordered"
              />
              <Input
                isRequired
                classNames={{
                  base: "max-w-full",
                  input: "text-base",
                  inputWrapper: "border-1 border-default-200 data-[hover=true]:border-primary",
                }}
                label="Password"
                labelPlacement="outside"
                placeholder="Enter your password"
                size="lg"
                type="password"
                variant="bordered"
              />
              <div className="pt-2">
                <Button 
                  className="w-full font-medium text-base h-12" 
                  color="primary" 
                  type="submit" 
                  size="lg"
                >
                  Login
                </Button>
              </div>
              <div className="text-center text-base mt-2">
                <span className="text-default-500">
                  Don&apos;t have an account?{" "}
                </span>
                <Link className="text-primary font-medium" href="/auth/register">
                  Register
                </Link>
              </div>
            </form>
          </CardBody>
        </Card>
      </ParallaxItem>
    </section>
  );
}
