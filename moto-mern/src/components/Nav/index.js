import React from "react";
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
    <header data-testid="header" className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;