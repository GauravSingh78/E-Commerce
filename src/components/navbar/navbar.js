import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ onSearch, cartItemCount }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery("");
  };

  return (
    <div className="wrapper">
      <header className="container">
        <div className="header py-2">
          <div className="grid">
            <Link to="/" className="link">
              <div className="logo">
               
                 <h1>
                  <span><b>E Commerce</b></span>
                 </h1>
                </div>
                
          
            </Link>
            <div className="formContainer">
              <form className="search">
                <div className="form-control">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                  />
                </div>
                <button
                  type="button"
                  className="search-btn"
                  onClick={handleSubmit}
                >
                  <b>Search</b>
                </button>
              </form>
            </div>
            <Link to="/cart" className="link headerCart">
              <img className="cartImg" src="/cart.svg" alt="cart" />
              {cartItemCount > 0 && (
                <div className="cartCounter">
                  {cartItemCount <= 9 ? cartItemCount : "9+"}
                </div>
              )}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export { NavBar };
