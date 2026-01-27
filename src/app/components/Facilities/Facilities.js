import React from 'react'

const Facilities = () => {
  const facilities = [
    {
      title: "Emergency & Trauma Care",
      desc: "24/7 emergency services with trained medical professionals.",
      icon: "🚑",
    },
    {
      title: "ICU / NICU",
      desc: "Advanced intensive care units with continuous monitoring.",
      icon: "🛏",
    },
    {
      title: "Operation Theaters",
      desc: "Modern modular OTs with high safety standards.",
      icon: "🏥",
    },
    {
      title: "Diagnostics & Lab",
      desc: "Accurate and timely diagnostic services using modern equipment.",
      icon: "🔬",
    },
    {
      title: "Radiology",
      desc: "CT, MRI, X-ray and ultrasound facilities.",
      icon: "🩻",
    },
    {
      title: "Pharmacy",
      desc: "In-house pharmacy for patient convenience.",
      icon: "💊",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Facilities</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Modern infrastructure and patient-focused facilities designed
          to deliver quality healthcare.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Need Medical Assistance?
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Facilities