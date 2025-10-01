import React, { useEffect, useState } from "react";
import HeadingComponent from "./Header";
import Footer from "./Footer";

const Blog = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const foodReviews = [
    "I absolutely loved the cheese burst pizza 🍕. The crust was crispy, and the extra cheese made it heavenly!",
    "The chicken biryani 🍗 was flavorful! The spices were perfectly balanced, and the aroma was irresistible.",
    "The momos 🥟 were soft and juicy with the perfect spicy chutney. A must-try street food experience!",
    "Had a chocolate ice cream 🍨 with brownie. It was rich, creamy, and absolutely divine!",
    "The chicken burger 🍔 was juicy and well-seasoned. Fries were crispy, but the portion could have been bigger.",
    "Tried pani puri 🌮 and it was tangy, spicy, and refreshing. Perfect street food snack!",
    "Masala dosa 🥞 was crispy and delicious, with perfect coconut chutney and sambar!",
    "The gulab jamun 🍯 melted in my mouth. Sweet, soft, and simply delightful.",
    "Veg thali 🍲 had everything! Loved the chapati, dal, and paneer sabzi combo.",
    "Chole bhature 🥘 were spicy, fluffy, and the taste reminded me of Delhi streets!",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Kolkata",
    "Chennai",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Lucknow",
    "Kochi",
    "Chandigarh",
  ];

  const getRating = () => {
    const stars = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
    return "⭐".repeat(stars) + (stars === 4 ? "☆" : "");
  };

  const generateReviews = async () => {
    try {
      setLoading(true); // show loader
      const res = await fetch("https://randomuser.me/api/?results=6&nat=IN");
      const data = await res.json();
      const users = data.results;

      const newReviews = users.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        avatar: user.picture.medium,
        review: foodReviews[Math.floor(Math.random() * foodReviews.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        rating: getRating(),
      }));

      setReviews(newReviews);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // hide loader after fetch
    }
  };

  useEffect(() => {
    generateReviews();
  }, []);

  return (
    <>
      <HeadingComponent />
      <div className="reviews-section">
        <button
          onClick={generateReviews}
          disabled={loading}
          className="refresh-button"
        >
          {loading ? "Loading..." : "⭮ Refresh Reviews"}
        </button>

        {loading ? (
          <div className="loader-container">
            <div className="simple-loader"></div>
          </div>
        ) : (
          <div className="reviews-grid">
            {reviews.map((user, index) => (
              <div key={index} className="review-card">
                <div className="user-info-header">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="user-avatar"
                  />
                  <div>
                    <h2 className="user-name">{user.name}</h2>
                    <p className="user-email">{user.email}</p>
                  </div>
                </div>
                <p className="review-text">{user.review}</p>
                <div className="review-rating">{user.rating}</div>
                <p className="user-location">📍 {user.city}, India</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
