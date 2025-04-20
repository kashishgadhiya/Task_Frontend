import React, { useState } from "react";
import { X } from "lucide-react";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    unit: "",
    form: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className="mt-20 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-2xl p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-12 font-sans">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">
            Tell us what you need, and we’ll help you get the best quotes 🌿
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-300 border-4 border-blue-100 cursor-pointer"
          >
            Submit Requirement
          </button>
        </div>

        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg w-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📍 Reach Us</h3>
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-start">
              <span className="mr-2">📌</span>
              <span>
                306 Sama Savli Road, Orchid Plaza,
                <br />
                Vemali, Vadodara - 390008, Gujarat, India
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🧭</span>
              <a
                href="https://maps.google.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">👤</span>
              <span>
                <strong>Owner:</strong> Prakashbhai Vaghasiya
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <span>
                <strong>Contact:</strong> +1 234 567 890
              </span>
            </li>
          </ul>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full z-[999] flex justify-center items-start pt-20 px-4 md:px-10 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl relative p-6 md:p-10 flex flex-col md:flex-row gap-6 animate-fade-in-up border border-gray-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={24} />
            </button>

            <div className="flex-1 flex items-center justify-center">
              <img
                src="/image1.jpg"
                alt="Product"
                className="w-48 h-60 object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="flex-1">
              {step === 1 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">🧪 Select Product</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Gibberellic Acid 90% (GA3) TC",
                      "Cytokinin 90% (6BA)",
                      "Rhizobium Liquid Bio-Fertilizer",
                      "Silicon Super Spreader",
                      "Organic Flowering Stimulant",
                    ].map((item) => (
                      <button
                        key={item}
                        className={`px-4 py-2 text-sm rounded-lg border font-medium ${
                          formData.product === item
                            ? "bg-green-500 text-white"
                            : "hover:bg-green-100"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, product: item }))
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">📦 Enter Quantity</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <input
                      type="number"
                      className="border px-4 py-2 rounded-lg w-full"
                      placeholder="Enter value"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          quantity: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex gap-4">
                    {["KG", "Liter"].map((unit) => (
                      <label key={unit} className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="unit"
                          value={unit}
                          checked={formData.unit === unit}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              unit: e.target.value,
                            }))
                          }
                        />
                        {unit}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">💧 Select Form</h3>
                  <div className="flex gap-4">
                    {["Liquid", "Powder", "Granules"].map((form) => (
                      <label key={form} className="flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          name="form"
                          value={form}
                          checked={formData.form === form}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              form: e.target.value,
                            }))
                          }
                        />
                        {form}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between items-center">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="text-sm text-gray-500 hover:underline"
                  >
                    ⬅ Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    onClick={nextStep}
                    className="ml-auto bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
                  >
                    Next ➡
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      console.log(formData);
                      setShowModal(false);
                    }}
                    className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer"
                  >
                    Submit ✅
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
