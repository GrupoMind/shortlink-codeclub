import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1>Welcome Back</h1>
        <p className="text-default-500">Login to access your account</p>
      </div>

      <Card className="max-w-md w-full">
        <CardHeader className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Login</h2>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="Email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
            />
            <Input
              isRequired
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <Button color="primary" type="submit">
              Login
            </Button>
            <div className="text-center text-sm">
              <span className="text-default-500">Dont have an account? </span>
              <Link className="text-primary" href="/auth/register">
                Register
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}
