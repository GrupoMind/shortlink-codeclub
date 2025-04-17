import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Button } from "@heroui/button";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl">
        <h1>Dashboard</h1>
        <p className="text-default-500">Manage your shortened URLs</p>
      </div>

      <Card>
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Your URLs</h2>
          <Button color="primary" href="/">
            Create New URL
          </Button>
        </CardHeader>
        <CardBody>
          <Table aria-label="URLs table">
            <TableHeader>
              <TableColumn>Original URL</TableColumn>
              <TableColumn>Short URL</TableColumn>
              <TableColumn>Clicks</TableColumn>
              <TableColumn>Created</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>https://example.com/very-long-url</TableCell>
                <TableCell>short.url/abc123</TableCell>
                <TableCell>42</TableCell>
                <TableCell>2024-04-17</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button color="primary" size="sm" variant="flat">
                      Analytics
                    </Button>
                    <Button color="danger" size="sm" variant="flat">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </section>
  );
}
