import {
  PlusCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import axios from "axios";
import { NavbarAdmin } from "../../../component/Navbar/NavbarAdmin";
import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import Footer from "../../../component/Footer/Footer";
import { Link } from "react-router-dom";

export function DaftarDevice() {
  const [devices, setDevices] = useState([]);

  const getDevices = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      const jwtToken = atob(token);

      const data = {
        page: "1",
        limit: "10",
      };

      const response = await axios.post(
        "https://hydro-connect.pptik.id/api/api.v1/devices/getalldevice",
        data,
        {
          headers: {
            "x-access-token": jwtToken,
          },
        }
      );
      setDevices(response.data.device);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  useEffect(() => {
    getDevices();
  }, [getDevices]);

  const TABLE_HEAD = [
    "No",
    "Nama Device",
    "Type Device",
    "Longitude",
    "Latitude",
    "Unit",
    "Aksi",
  ];

  const TABLE_ROWS = devices.map((device, index) => ({
    no: index + 1,
    name: device.name,
    type: device.type_device,
    longitude: device.longitude,
    latitude: device.latitude,
    unit: device.unit,
    guid_user: device.guid_user,
  }));


  return (
    <>
      <NavbarAdmin />
      <section className="p-6 mt-6">
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Daftar Device
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link to="/admin/tambah-device">
                  <Button
                    className="flex items-center gap-3 bg-blue-400"
                    size="sm"
                  >
                    <PlusCircleIcon strokeWidth={2} className="h-4 w-4" /> Add
                    Device
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  ({ no, name, type, longitude, latitude, unit }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex flex-col">
                            {no !== undefined && (
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {no}
                              </Typography>
                            )}
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            {name !== undefined && (
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                            )}
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            {type !== undefined && (
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {type}
                              </Typography>
                            )}
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            {longitude !== undefined && (
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {longitude}
                              </Typography>
                            )}
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            {latitude !== undefined && (
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {latitude}
                              </Typography>
                            )}
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            {unit !== undefined && (
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {unit}
                              </Typography>
                            )}
                          </div>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit Device">
                            <Link to="/admin/edit-device/${device.id}">
                              <IconButton variant="text">
                                <PencilSquareIcon className="h-4 w-4 text-blue-700" />
                              </IconButton>
                            </Link>
                          </Tooltip>
                          <Tooltip content="Delete Device">
                            <IconButton variant="text">
                              <TrashIcon className="h-4 w-4 text-red-500" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
      <Footer />
    </>
  );
}
