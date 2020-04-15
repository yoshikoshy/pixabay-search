import React from "react";

const HeaderPage = () => {
    return (
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">
      
          <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Sean's Pixabay</a><br/>
          <span className="text-xs text-grey-dark">Utilizing Pixabay API to search for images</span>
      
        </div>
      
        <div className="sm:mb-0 self-center">
          <a href="https://www.github.com/yoshikoshy" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">GitHub</a>
          <a href="https://www.linkedin.com/in/sean-koshy-5925b725/" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">LinkedIn</a>
      
        </div>
      </nav>
    );
}

export default HeaderPage;