import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { multipliers } from '../utils/constants';

export default function AddBox() {
  const [receiver, setReceiver] = useState('');
  const [weight, setWeight] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [destination, setDestination] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const validate = () => {
    const newErrors = {};

    if (!receiver.trim()) newErrors.receiver = 'Receiver name is required.';

    if (weight === '' || isNaN(weight)) {
      newErrors.weight = 'Please enter a valid weight.';
    } else if (Number(weight) < 0) {
      newErrors.weight = 'Negative values are not allowed. Reset to 0.';
      setWeight(0); // default to zero
    } else if (Number(weight) === 0) {
      newErrors.weight = 'Weight must be greater than zero.';
    }

    if (!destination)
      newErrors.destination = 'Destination country is required.';

    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const multiplier = multipliers[destination];
    const cost = Number((Number(weight) * multiplier).toFixed(2));

    const newBox = {
      id: Date.now().toString(),
      receiver,
      weight: Number(weight),
      color: hexToRgb(color),
      destination,
      cost,
    };

    const existing = JSON.parse(localStorage.getItem('boxes') || '[]');
    localStorage.setItem('boxes', JSON.stringify([...existing, newBox]));

    setReceiver('');
    setWeight('');
    setColor('#ffffff');
    setDestination('');
    setErrors({});
    navigate('/boxes');
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Box</h2>

        <div className="space-y-4">
          {/* Receiver */}
          <label className="block">
            <span className="text-sm font-medium">Receiver Name</span>
            <input
              type="text"
              placeholder="Receiver Name"
              className={`mt-1 border w-full p-2 rounded ${
                errors.receiver ? 'border-red-500' : 'border-gray-300'
              }`}
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
            {errors.receiver && (
              <p className="text-red-500 text-xs mt-1">{errors.receiver}</p>
            )}
          </label>

          {/* Weight */}
          <label className="block">
            <span className="text-sm font-medium">Weight (kg)</span>
            <input
              type="number"
              placeholder="Weight (kg)"
              className={`mt-1 border w-full p-2 rounded ${
                errors.weight ? 'border-red-500' : 'border-gray-300'
              }`}
              value={weight}
              onChange={(e) => {
                const val = e.target.value;
                if (val < 0) {
                  setWeight(0);
                  setErrors({
                    ...errors,
                    weight:
                      'Negative values are not permitted. Value reset to 0.',
                  });
                } else {
                  setWeight(val);
                  setErrors({ ...errors, weight: '' });
                }
              }}
            />
            {errors.weight && (
              <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
            )}
          </label>

          {/* Color */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">Box Colour:</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-10 border rounded"
            />
            <span className="text-sm text-gray-600">{hexToRgb(color)}</span>
          </div>

          {/* Destination */}
          <label className="block">
            <span className="text-sm font-medium">Destination Country</span>
            <select
              className={`mt-1 border w-full p-2 rounded ${
                errors.destination ? 'border-red-500' : 'border-gray-300'
              }`}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              {Object.keys(multipliers).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.destination && (
              <p className="text-red-500 text-xs mt-1">{errors.destination}</p>
            )}
          </label>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
