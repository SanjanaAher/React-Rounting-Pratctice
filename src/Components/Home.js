import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() =>
          navigate(
            "OrderPlaced"
            // { replace: true }
            //   - to navigate out of website i.e on browsers page
          )
        }
      >
        Place Order
      </button>
    </div>
  );
};

export default Home;
