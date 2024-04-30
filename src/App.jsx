import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import logo from "./images/matura.jpg";
import "@fontsource/poppins";
import "@fontsource/roboto";

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const renderContent = () => {
    switch (activeNavItem) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-light min-h-screen text-gray-800">
      {/* Header */}
      <header className="text-white py-8 text-center flex flex-col justify-center items-center rounded">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Welcome to My Personal Website
        </h1>
        <h2 className="text-lg lg:text-xl mt-5">
          Explore my profile, projects, and get in touch!
        </h2>
        <br />
        <a
          href="#main"
          className="p-5 rounded-full bg-secondary hover:bg-accent font-bold mt-2"
        >
          More
        </a>
      </header>

      {/* Main Content with Sidebar */}
      <div
        className=" mx-auto px-4 lg:px-8 py-8 lg:flex mt-[110px] h-full md:px-2"
        id="main"
      >
        {/* Sidebar */}
        <aside className="lg:w-1/4 bg-primary text-white p-6 rounded-lg shadow-lg h-[700px] sm:w-full">
          <img
            src={logo}
            alt="Your Name"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <div className="text-center">
            <h2 className="text-3xl font-bold">Dario Jakovleski</h2>
            <h3 className="text-lg mt-2">Web Developer</h3>
            <div className="bg-blue-50 rounded-lg py-5 mt-6 info text-black">
              <p className="text-sm mt-2 ">
                Phone:{" "}
                <span className="font-bold text-sm hover:text-lg">
                  +123456789
                </span>
              </p>
              <p className="text-sm mt-2">
                Email:{" "}
  
                  <a href="mailto:dariojakovleski10@gmail.com" className="font-bold text-sm  hover:text-lg">
                    dariojakovleski10@gmail.com
                  </a>
                
              </p>
              <p className="text-sm mt-2">
                Location:{" "}
                <span className="font-bold text-sm hover:text-lg">
                  Kicevo, Macedonia
                </span>
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:w-3/4 lg:ml-8 sm:w-full sm:h-full">
          {/* Navigation */}
          <nav className="bg-primary sm:mt-6 lg:m-0 min-[330px]:mt-6 text-white text-center py-4 mb-8 rounded-lg">
            <ul className="flex justify-center items-center lg:space-x-12 md:space-x-10 sm:space-x-5 min-[330px]:space-x-2">
              <li
                className={`hover:bg-violet-50  hover:text-secondary  ${
                  activeNavItem === "home" ? "text-secondary bg-violet-50" : ""
                }`}
              >
                <button
                  className={`lg:text-xl font-semibold hover:text-secondary focus:outline-none `}
                  onClick={() => handleNavItemClick("home")}
                >
                  Home
                </button>
              </li>
              <li
                className={`hover:bg-violet-50  hover:text-secondary ${
                  activeNavItem === "about" ? "text-secondary bg-violet-50" : ""
                }`}
              >
                <button
                  className={`lg:text-xl font-semibold hover:text-secondary focus:outline-none`}
                  onClick={() => handleNavItemClick("about")}
                >
                  About
                </button>
              </li>
              <li
                className={`hover:bg-violet-50  hover:text-secondary ${
                  activeNavItem === "portfolio"
                    ? "text-secondary bg-violet-50"
                    : ""
                }`}
              >
                <button
                  className={`lg:text-xl font-semibold hover:text-secondary focus:outline-none `}
                  onClick={() => handleNavItemClick("portfolio")}
                >
                  Portfolio
                </button>
              </li>
              <li
                className={`hover:bg-violet-50 hover:text-secondary ${
                  activeNavItem === "contact"
                    ? "text-secondary bg-violet-50"
                    : ""
                }`}
              >
                <button
                  className={`lg:text-xl font-semibold hover:text-secondary focus:outline-none `}
                  onClick={() => handleNavItemClick("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Render Dynamic Content */}
          <div className="lg:mt-12 sm:mt-10 mt-6"> {renderContent()}</div>
        </main>
      </div>
      <div className="mt-[300px]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
