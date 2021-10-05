import React from "react";
import { Link } from "react-router-dom";

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
                    <li className="mx-2">
                        <Link to="/vinverify">
                            VIN Verify
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/login">
                            Login/Signup
                        </Link>
                    </li>
                </ul>
            </nav>
  );
}

export default Nav;