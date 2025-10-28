import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex flex-col sm:flex-row sm:justify-between items-center px-4 py-3 shadow-md">
      <h1 className="text-lg font-semibold">ShipEasy</h1>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <Link to="/" className="hover:underline">
          Add Box
        </Link>
        <Link to="/boxes" className="hover:underline">
          Shipments
        </Link>
      </div>
    </nav>
  );
}
