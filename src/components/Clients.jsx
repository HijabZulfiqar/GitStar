import React from "react";

const clientImages = [
  "/cl1.png",
  "/cl2.png",
  "/cl3.png",
  "/cl4.png",
  "/cl5.png",
  "/cl6.png",
  "/cl7.png",
  "/cl8.png",
  "/cl9.png",
  "/cl10.png",
  "/cl11.png",
  "/cl12.png",
];

const ClientLogo = ({ src }) => (
  <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2 cursor-pointer transition-transform hover:scale-105">
    <div className="client-logo">
      <img
        src={src}
        alt="Client Logo"
        className="w-24 h-24 object-cover rounded-lg shadow-md mx-auto"
      />
    </div>
  </div>
);

const Clients = () => {
  return (
    <section id="clients" className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold text-gray-800">Clients</h3>
        <p className="text-gray-600">Become One Of Our Clients</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:max-w-6xl mx-auto">
        {clientImages.map((src, index) => (
          <ClientLogo src={src} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
