import React from "react";

const PricingPage = () => {
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

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-500 mb-8">
            Problems trying to resolve the conflict between Newtonian mechanics and other fields.
          </p>
          <div className="flex justify-center mb-6">
            <button className="bg-gray-200 px-4 py-2 rounded-l">Monthly</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r">Yearly <span className="ml-2 bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded">Save 25%</span></button>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Free Plan */}
            <div className="bg-white p-6 shadow-md rounded-md w-72">
              <h3 className="text-xl font-bold">FREE</h3>
              <p className="text-gray-500 mb-4">Organize across all apps by hand</p>
              <div className="text-4xl font-bold mb-4">0$</div>
              <p className="text-gray-500 mb-4">Per Month</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Unlimited product updates
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">Get Started</button>
            </div>
            {/* Standard Plan */}
            <div className="bg-blue-600 text-white p-6 shadow-md rounded-md w-72">
              <h3 className="text-xl font-bold">STANDARD</h3>
              <p className="text-blue-200 mb-4">Organize across all apps by hand</p>
              <div className="text-4xl font-bold mb-4">9.99$</div>
              <p className="text-blue-200 mb-4">Per Month</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-200 mr-2">✔</span> Unlimited product updates
                </li>
              </ul>
              <button className="bg-white text-blue-600 px-4 py-2 w-full rounded">Get Started</button>
            </div>
            {/* Premium Plan */}
            <div className="bg-white p-6 shadow-md rounded-md w-72">
              <h3 className="text-xl font-bold">PREMIUM</h3>
              <p className="text-gray-500 mb-4">Organize across all apps by hand</p>
              <div className="text-4xl font-bold mb-4">19.99$</div>
              <p className="text-gray-500 mb-4">Per Month</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> Unlimited product updates
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing FAQs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <span className="text-blue-600">➤</span>
                <p>
                  <strong>The quick fox jumps over the lazy dog</strong>
                  <br />
                  Met minim Mollie non desert Alamo est.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-gray-500">Start your 14 days free trial</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Try it free now</button>
          <div className="flex justify-center space-x-4 text-blue-600">
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
