import React from "react";

const NavigationMenu = (props) => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <a href="#" >
                {props.link1}
              </a>
            </li>
            <li>
              <a href="#" >
                {props.link2}
              </a>
            </li>
            <li>
              <a href="#" >
                {props.link3}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" >
            {props.link4}
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;