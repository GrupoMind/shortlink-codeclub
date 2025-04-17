import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";

export default function Analytics() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl">
        <h1>Analytics</h1>
        <p className="text-default-500">Track your URL performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardBody>
            <div className="text-center">
              <p className="text-sm text-default-500">Total Clicks</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <p className="text-sm text-default-500">Unique Visitors</p>
              <p className="text-2xl font-bold">892</p>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="text-center">
              <p className="text-sm text-default-500">Average Click Rate</p>
              <p className="text-2xl font-bold">68%</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Click History</h2>
        </CardHeader>
        <CardBody>
          <Table aria-label="Analytics table">
            <TableHeader>
              <TableColumn>Timestamp</TableColumn>
              <TableColumn>IP Address</TableColumn>
              <TableColumn>Location</TableColumn>
              <TableColumn>Device</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-04-17 15:30:45</TableCell>
                <TableCell>192.168.1.1</TableCell>
                <TableCell>New York, USA</TableCell>
                <TableCell>Chrome / Windows</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </section>
  );
}
