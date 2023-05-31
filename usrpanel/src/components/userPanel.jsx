import React, { useState } from 'react';

// Component for controlling devices in a room
const RoomControl = ({ room, devices, toggleDevice }) => {
  return (
    <div>
      <h3>{room}</h3>
      {devices.map((device) => (
        <div key={device.id}>
          <span>{device.name}</span>
          <button onClick={() => toggleDevice(device.id)}>Toggle</button>
        </div>
      ))}
    </div>
  );
};

// User Panel component
const UserPanel = () => {
  const [rooms, setRooms] = useState([]);

  // Function to toggle the device status
  const toggleDevice = (deviceId) => {
    // Send a request to the backend to toggle the device status
    // ...
  };

  // Simulated initial data
  useState(() => {
    // Assuming room and device data is fetched from the backend
    const initialRooms = [
      {
        name: 'Room 101',
        devices: [
          { id: 1, name: 'Light Bulb' },
          { id: 2, name: 'Fan' },
          { id: 3, name: 'AC' },
        ],
      },
      {
        name: 'Room 102',
        devices: [
          { id: 4, name: 'Light Bulb' },
          { id: 5, name: 'Fan' },
          { id: 6, name: 'AC' },
        ],
      },
    ];
    setRooms(initialRooms);
  }, []);

  return (
    <div>
      <h2>User Panel</h2>
      {rooms.map((room) => (
        <RoomControl
          key={room.name}
          room={room.name}
          devices={room.devices}
          toggleDevice={toggleDevice}
        />
      ))}
    </div>
  );
};

export default UserPanel;
