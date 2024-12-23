import React from 'react';

function Header() {
  return (
    <header className="fixed right-0  left-0 flex justify-between items-center px-5 py-3 bg-white shadow-md">
      {/* Logo on the left */}
      <div className="logo">
        <h1 className="text-black font-bold text-2xl ">Logo</h1>
      </div>
      {/* Navigation list as buttons */}
      <nav className="p-4">
        <ul className="flex gap-10 list-none m-0 p-0">
          <li>
            <a
              href="#accueil"
              className="text-black bg-white px-4 py-2 rounded-md font-semibold hover:bg-lime-700 hover:text-white transition duration-300"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="text-black bg-white px-4 py-2 rounded-md font-semibold hover:bg-lime-700 hover:text-white transition duration-300"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-black bg-white px-4 py-2 rounded-md font-semibold hover:bg-lime-700 hover:text-white transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#qui-sommes-nous"
              className="text-black bg-white px-4 py-2 rounded-md font-semibold hover:bg-lime-700 hover:text-white transition duration-300"
            >
              Qui Sommes Nous
            </a>
          </li>
          <li>
            <a
              href="#nos-realisations"
              className="text-black bg-white px-4 py-2 rounded-md font-semibold hover:bg-[#4d714a] hover:text-white transition duration-300"
            >
              Nos Réalisations
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black bg-white px-4 py-2 rounded-md font-semibold hover:bg-lime-700 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
