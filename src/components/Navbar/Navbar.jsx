function NavBar() {
  return (
    <nav className="bg-gray-900 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white text-lg font-bold">
            QR Create
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-600">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
