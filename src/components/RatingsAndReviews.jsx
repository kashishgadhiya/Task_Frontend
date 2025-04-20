import React from "react";

const RatingsAndReviews = () => {
  const ratingStats = [
    { stars: 5, percent: 58 },
    { stars: 4, percent: 17 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 5 },
    { stars: 1, percent: 14 },
  ];

  const userSatisfaction = [
    { label: "Response", percent: 90 },
    { label: "Quality", percent: 100 },
    { label: "Delivery", percent: 100 },
  ];

  const reviews = [
    {
      name: "Satendra Dhakar",
      location: "Jhundpura, Madhya Pradesh",
      product: "Chlorantraniliprole",
      date: "27 March, 2025",
    },
    {
      name: "Satendra Dhakar",
      location: "Jhundpura, Madhya Pradesh",
      product: "Chlorantraniliprole",
      date: "27 March, 2025",
    },
    {
      name: "Satendra Dhakar",
      location: "Jhundpura, Madhya Pradesh",
      product: "Chlorantraniliprole",
      date: "27 March, 2025",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Ratings & Reviews
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
        <div className="text-4xl font-bold text-yellow-500">5/5</div>
        <p className="text-gray-600 mb-6">Reviewed by 111 Users</p>
        <div className="flex-1">
          <div className="space-y-3">
            {ratingStats.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <span className="w-6 text-sm">{item.stars}★</span>
                <div className="flex-1 bg-gray-200 h-2 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <span className="w-10 text-sm text-gray-600">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">
            User Satisfaction
          </h3>
          <div className="space-y-4">
            {userSatisfaction.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="w-24 text-sm font-medium">{item.label}</span>
                <div className="flex-1 bg-gray-200 h-2 rounded">
                  <div
                    className="h-2 bg-emerald-500 rounded"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <span className="w-10 text-sm">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-6 text-gray-800">
        Most Relevant Reviews
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-md shadow-sm p-4 space-y-2 hover:shadow-md transition"
          >
            <div className="flex justify-between text-sm text-gray-500">
              <span className="text-yellow-500 font-medium">★★★★★</span>
              <span>{review.date}</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{review.name}</p>
              <p className="text-sm text-gray-600">{review.location}</p>
              <p className="text-sm mt-1">
                <span className="font-medium">Product Name :</span>{" "}
                {review.product}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-2 rounded border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer">
          View More Reviews
        </button>
      </div>
    </section>
  );
};

export default RatingsAndReviews;
