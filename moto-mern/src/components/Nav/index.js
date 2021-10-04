import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const  categories = [
    { name: 'ShowVroom', description: 'Cars for sale' },
    { name: 'Parts', description: 'car parts' },
    { name: 'VIN Verify', description: 'edmunds vin and price verify' },
    { name: 'Contact', description: 'contact us' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <nav className="navbar">
                <ul className="container navlinks">
                    <li className="mx-2 navlinks">
                        <Link to="/about">
                            About
                            </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/showvroom">
                            ShowVroom
                        </Link>
                    </li>
                </ul>
            </nav>
  );
}

export default Nav;