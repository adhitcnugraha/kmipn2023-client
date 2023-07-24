import React from "react";
import { Link } from "react-router-dom";
import LogoLandingPage from "../../assets/logolandingpage.PNG";

const LandingPage = () => {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">MarketDUS</span>
              <img className="h-32 w-auto" src={LogoLandingPage} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12"></div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/client/register"
              className="text-sm font-semibold leading-6 text-gray-900 mr-3"
              style={{ paddingRight: "20px" }}
            >
              Register
            </Link>
            <Link
              to="/client/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <Link
                    to="/client/register"
                    className="-mx-3 block font-poppins rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Register
                  </Link>
                  <Link
                    to="/client/login"
                    className="-mx-3 block font-poppins rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[rgba(35, 125, 27, 0.84)] to-[#2D9A23] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-poppins tracking-tight text-custom-green sm:text-6xl">
              MarketDUS
            </h1>
            <p className="mt-6 font-poppins font-bold text-lg leading-8 text-gray-600">
              From SAMPAH to RUPIAH
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/client/login"
                className="rounded-md font-poppins bg-custom-two px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-gray-800 mb-16 mt-3 text-center">
            Why Choose MarketDUS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-md">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="https://cdn.idntimes.com/content-images/community/2020/03/daurulang-9fe8c6f667e535a05bf9d945cf90a410_600x400.jpg"
                alt="Benefits"
              />
            </div>
            <div className="max-w-md">
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800 font-poppins">
                    Recycle and contribute to a greener planet.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800 font-poppins">
                    Find unique and creative items from recycled materials.
                  </p>
                </li>
                {/* Add more benefits here */}
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800 font-poppins">
                    As a place for the promotion of recyclable waste.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800 font-poppins">
                    Be able to increase the local economy.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800 font-poppins">
                    Raise awareness in protecting our earth environment.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-md">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="https://example.com/how-it-works-image.jpg"
                alt="How It Works"
              />
            </div>
            <div className="max-w-md">
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800">
                    Sellers list their recycled items on MarketDUS.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800">
                    Buyers browse and purchase the items they like.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-custom-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-800">
                    MarketDUS facilitates the transaction and ensures a smooth
                    experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Admin Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-poppins font-bold text-gray-800 mb-8 text-center">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Admin 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 font-poppins">
              <h3 className="text-base font-semibold text-gray-800">
                Miftahul Jannah
              </h3>
              <p className="text-gray-600 mt-3">+62 822 8362 3928</p>
              {/* You can add more contact information here */}
            </div>

            {/* Contact Admin 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 font-poppins">
              <h3 className="text-base font-poppins font-semibold text-gray-800">
                Adhitia Cahya Nugraha
              </h3>
              <p className="text-gray-600 mt-3">+62 898 8264 433</p>
              {/* You can add more contact information here */}
            </div>

            {/* Contact Admin 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 font-poppins">
              <h3 className="text-base font-semibold text-gray-800">
                Ulam Muhammad Rapy
              </h3>
              <p className="text-gray-600 mt-3">+62 838 0252 1183</p>
              {/* You can add more contact information here */}
            </div>
          </div>
        </div>
      </section>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LandingPage;
