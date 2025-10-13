import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2">MyLogo</div>

          {/* Kanan - Menu */}
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <hr />

        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="p-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>

        <hr />

        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 text-center">
          <div className="bg-gray-200 p-6 rounded">
            Basic
            <br />
            Rp 50.000
          </div>
          <div className="bg-gray-200 p-6 rounded">
            Pro
            <br />
            Rp 100.000
          </div>
          <div className="bg-gray-200 p-6 rounded">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>

        <hr />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen">
          <header className="bg-gray-300 p-4">Header</header>
          <aside className="bg-gray-200 p-4">Sidebar</aside>
          <main className="bg-white p-4 border">Content</main>
          <footer className="bg-gray-300 p-4">Footer</footer>
        </div>

        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border rounded-lg w-64">
          {/* Gambar */}
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Produk"
            className="h-40 w-full object-cover rounded-t-lg"
          />

          {/* Content */}
          <div className="p-4 bg-red-100">
            <h3 className="text-lg font-semibold mb-4">{course.title}</h3>

            <div className="bg-red-50 p-2 rounded-lg">
              <div className="text-sm text-gray-500 mt-2 flex justify-between">
                <span>👥 123 users</span>
                <span>⏱ 60 mins</span>
              </div>

              {/* Author */}
              <div className="mt-3 flex items-center gap-2">
                <img
                  src="https://www.placehold.co/50x50"
                  alt="Author's Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Author's Name</p>
                  <p className="text-xs text-gray-500">Designer</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center">
              <div className="bg-white py-2 px-4 rounded">$123</div>
              <button className="bg-red-700 text-white px-4 py-2 rounded text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
