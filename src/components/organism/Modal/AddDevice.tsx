import { addDevice, getHistory } from '@/services/user';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DeviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (device: { name: string; type: string; deviceGuid: string; longitude: string; latitude: string }) => void;
}

const DeviceModal: React.FC<DeviceModalProps> = ({ isOpen, onClose, onSave }) => {
  const router = useRouter();
  const [deviceName, setDeviceName] = useState('');
  const [deviceGuid, setDeviceGuid] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [deviceType, setDeviceType] = useState('');

  const handleSave = async () => {
    onSave({ name: deviceName, type: deviceType, deviceGuid: deviceGuid, longitude: longitude, latitude: latitude, });
    console.log({ name: deviceName, type: deviceType, deviceGuid: deviceGuid, longitude: longitude, latitude: latitude, });
    
    const token: any = localStorage.getItem('token');
    try {
      const response = await addDevice(token, { companyGuid: 'COMPANY-59463305-0abe-4c64-a4f5-533527956e43-2024',
      userGuid: 'USER-8048130b-4847-404a-9b6c-56a6958a94b3-2024',
      name: deviceName, type: deviceType,
      deviceGuid: deviceGuid,
      longitude: longitude,
      latitude: latitude, });
      console.log('Response:',response);
      router.push('/admin/devices')
  
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Tambah Device</h3>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          placeholder="Nama Device"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          placeholder="Guid Device"
          value={deviceGuid}
          onChange={(e) => setDeviceGuid(e.target.value)}
        />
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <div className="w-full mb-4">
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option value="" disabled>Select Type Device</option>
            <option value="sensor-camera">Sensor-Camera</option>
            <option value="sensor">Sensor</option>
            <option value="aktuator">Aktuator</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceModal;