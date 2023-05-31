import React, { useState } from 'react';

// Component for adding a new room
const AddRoomForm = ({ addRoom }) => {
  const [roomName, setRoomName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomName.trim()) {
      addRoom(roomName);
      setRoomName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button type="submit">Add Room</button>
    </form>
  );
};

// Component for managing the devices in a room
const RoomDevices = ({ room, devices, updateDevice }) => {
  return (
    <div>
      <h3>{room}</h3>
      {devices.map((device) => (
        <div key={device.id}>
          <span>{device.name}</span>
          <button onClick={() => updateDevice(device.id)}>Toggle</button>
        </div>
      ))}
    </div>
  );
};

// Admin Panel component
const AdminPanel = () => {
  const [rooms, setRooms] = useState([]);
  const [devices, setDevices] = useState([]);

  // Function to add a new room
  const addRoom = (roomName) => {
    setRooms((prevRooms) => [...prevRooms, roomName]);
  };

  // Function to toggle the device status
  const updateDevice = (deviceId) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === deviceId ? { ...device, status: !device.status } : device
      )
    );
  };

  // Simulated initial data
  useState(() => {
    // Assuming devices are fetched from the backend
    const initialDevices = [
      { id: 1, name: 'Light Bulb', status: false },
      { id: 2, name: 'Fan', status: false },
      { id: 3, name: 'AC', status: false },
    ];
    setDevices(initialDevices);
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <AddRoomForm addRoom={addRoom} />
      {rooms.map((room) => (
        <RoomDevices
          key={room}
          room={room}
          devices={devices}
          updateDevice={updateDevice}
        />
      ))}
    </div>
  );
};

export default AdminPanel;
