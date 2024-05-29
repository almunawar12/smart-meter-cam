
'use client'
import { getDetaildevice, updateDevice } from '@/services/user';
import { useEffect, useState } from 'react';

interface EditDeviceProps {
  params: { id: string };
}
export default function EditDevice(params: EditDeviceProps) {
  const [formData, setFormData] = useState({
    deviceName: '',
    deviceGuid: '',
    longitude: '',
    latitude: '',
    deviceType: '',
  });

  const token: any = localStorage.getItem('token');

  useEffect(() => {
    console.log(params.params.id)
    const fetchDeviceData = async () => {
      try {
        const response = await getDetaildevice(token, params.params.id);
        console.log('Response:', response);
        const device = response.data;
        setFormData({
          deviceName: device.name || '',
          deviceGuid: device.deviceGuid || '',
          longitude: device.longitude.toString() || '',
          latitude: device.latitude.toString() || '',
          deviceType: device.type || '',
        });
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchDeviceData();
  }, [params.params.id, token]);


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await updateDevice(token, params.params.id, {companyGuid: 'COMPANY-59463305-0abe-4c64-a4f5-533527956e43-2024', userGuid: 'USER-8048130b-4847-404a-9b6c-56a6958a94b3-2024', name: formData.deviceName, type: formData.deviceType, deviceGuid: formData.deviceGuid, longitude: formData.longitude, latitude: formData.latitude});
      console.log('Device updated:', response);
    } catch (error) {
      console.error('Error updating device:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Device</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="deviceName" className="block text-gray-700 mb-2">Device Name</label>
            <input
              type="text"
              id="deviceName"
              name="deviceName"
              value={formData.deviceName || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deviceGuid" className="block text-gray-700 mb-2">Device Guid</label>
            <input
              type="text"
              id="deviceGuid"
              name="deviceGuid"
              value={formData.deviceGuid || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deviceType" className="block text-gray-700 mb-2">longitude</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={formData.longitude || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deviceType" className="block text-gray-700 mb-2">Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={formData.latitude || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deviceStatus" className="block text-gray-700 mb-2">Device Type</label>
            <select
              id="deviceStatus"
              name="deviceStatus"
              value={formData.deviceType || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="sensor" >Sensor</option>
              <option value="sensor-camera" >Sensor Camera</option>
              <option value="aktuator">Aktuator</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}