import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BoxList() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('boxes') || '[]');
    setBoxes(stored);
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-[80vh]">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-3">
        <h2 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
          List of Boxes
        </h2>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 text-sm sm:text-base rounded hover:bg-blue-700 w-full sm:w-auto text-center"
        >
          + Add New Box
        </Link>
      </div>

      {boxes.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center text-gray-600">
          No boxes added yet.
        </div>
      ) : (
        <>
          <div className="hidden sm:block overflow-x-auto bg-white p-4 rounded shadow">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-2">Receiver Name</th>
                  <th className="px-4 py-2 text-center">Weight (kg)</th>
                  <th className="px-4 py-2 text-center">Box Colour</th>
                  <th className="px-4 py-2 text-center">Destination</th>
                  <th className="px-4 py-2 text-center">Shipping Cost (INR)</th>
                </tr>
              </thead>
              <tbody>
                {boxes.map((box) => (
                  <tr key={box.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{box.receiver}</td>
                    <td className="px-4 py-2 text-center">
                      {box.weight.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div
                        className="w-6 h-6 mx-auto rounded border"
                        style={{ backgroundColor: box.color }}
                      />
                    </td>
                    <td className="px-4 py-2 text-center">{box.destination}</td>
                    <td className="px-4 py-2 text-center">
                      ₹{box.cost.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sm:hidden space-y-4">
            {boxes.map((box) => (
              <div
                key={box.id}
                className="bg-white p-4 rounded shadow text-sm border border-gray-100"
              >
                <div className="flex justify-between">
                  <span className="font-medium">Receiver:</span>
                  <span>{box.receiver}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-medium">Weight:</span>
                  <span>{box.weight.toFixed(2)} kg</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-medium">Destination:</span>
                  <span>{box.destination}</span>
                </div>
                <div className="flex justify-between mt-1 items-center">
                  <span className="font-medium">Color:</span>
                  <div
                    className="w-5 h-5 rounded border"
                    style={{ backgroundColor: box.color }}
                  />
                </div>
                <div className="flex justify-between mt-2 font-semibold text-blue-700">
                  <span>Cost:</span>
                  <span>₹{box.cost.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
