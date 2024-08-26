import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">School Management</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/add-school" className="hover:text-gray-300">Add Schools</Link>
          </li>
          <li>
            <Link to="/list-schools" className="hover:text-gray-300">List Schools</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
