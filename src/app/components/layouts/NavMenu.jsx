import React from "react";

const NavMenu = ({categories}) => {
  return (
    <ul className="text-white text-xl lg:text-base p-2 flex flex-col w-full lg:flex-row justify-evenly">
      {categories.map((category) => (
        <li className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-4">
            <img className="w-5 h-5" src={category.logoUrl}/>
            <p key={category.id}>{category.label.replace(" ", String.fromCharCode(160))}</p> {/*Catégorie en majuscule ? On garde le + ?*/}
          </div>
          <hr className="lg:hidden"/>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
