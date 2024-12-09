import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white py-6 shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Product</a>
            <a href="#" className="hover:text-blue-600">Pricing</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="space-x-4">
            <button className="text-blue-600">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Become a member</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-500 mb-6">
              We know how large objects will act, but things on a small scale can behave very differently.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded">Get Quote Now</button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/about(1).png"
              alt="About Us"
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-4xl font-bold">15K</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">150K</h3>
              <p className="text-gray-500">Monthly Visitors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">15</h3>
              <p className="text-gray-500">Countries Worldwide</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-gray-500">Top Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <img
              src="/about(2).jpg"
              alt="Video"
              className="rounded-lg w-full"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-4 text-2xl">
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
              <div  className="flex justify-center space-x-4 mt-4 text-center ">
                <img
                  src="/about(3).jpg"
                  alt="Team Member"
                  className="rounded-full mx-auto mb-4"
                />

                 <img
                  src="/about(4).jpg"
                  alt="Team Member"
                  className="rounded-full mx-auto mb-4"
                />


                <h3 className="text-lg font-bold">Username</h3>
                <p className="text-gray-500">Profession</p>
                <div className="flex justify-center space-x-4 mt-4 text-blue-600">
                  <a href="#">🔗</a>
                  <a href="#">🔗</a>
                  <a href="#">🔗</a>
                </div>
              </div>
            
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Big Companies Are Here</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <img
                key={item}
                src="https://via.placeholder.com/100x50"
                alt="Partner Logo"
                className="w-24"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Work With Us</h3>
            <p className="text-sm mb-4">
              The gradual accumulation of information about atomic-scale behavior.
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded">Button</button>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Get In Touch</h3>
            <form className="flex space-x-4">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded w-full"
              />
              <button className="bg-white text-blue-600 px-4 py-2 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
