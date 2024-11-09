import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "GitStar’s team is highly responsive. Claim submissions on DHS MTS are faster with reduced technical rejections. They are our success partners, and we look forward to continued collaboration.",
      company: "GNP group, Jeddah KSA",
      author: "Dr. Khalid Labib",

      position: "Group Insurance Manager",
    },
  ];

  const clients = [
    { id: 1, logo: "/cl1.png", name: "Client 1", url: "#" },
    { id: 2, logo: "/cl2.png", name: "Client 2", url: "#" },
    { id: 3, logo: "/cl4.png", name: "Client 3", url: "#" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">
                What Our
                <br />
                <span className="text-emerald-500">Customers Says</span>
              </h2>
              <p className="text-gray-600">
                Here is some of our customers and their valuable experience with
                us.
              </p>
            </div>

            {/* Client Logos Slider */}
            <div className="relative">
              <div className="flex overflow-hidden space-x-4">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="flex-none w-32 h-32 flex items-center justify-center"
                  >
                    <a
                      href={client.url}
                      className=" border p-2 rounded-lg hover:shadow-lg transition-shadow w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-24 h-24 object-contain" // Fixed size for logos
                      />
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2 mt-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full border hover:bg-gray-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full border hover:bg-gray-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="relative h-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0"
                  }`}
                >
                  <blockquote className="text-lg text-gray-700 mb-6">
                    {testimonial.text}
                  </blockquote>
                  <p className="text-gray-600 italic mb-8">
                    {testimonial.company}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                      <img
                        src="/t.webp"
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.author}
                      </h4>
                      <h5 className="text-gray-600">{testimonial.position}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
