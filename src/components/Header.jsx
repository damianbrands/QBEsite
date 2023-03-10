import React from "react"

export default function Header(){
    function scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    function scrollToAbout(){
        const element = document.getElementById("aboutScroll");
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    function scrollToProjects(){
        const element = document.getElementById("projectsScroll");
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    function scrollToContact(){
        const element = document.getElementById("contactScroll");
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return(
        <div className="header">
            <button className={"logo__header subtitle"} onClick={scrollToTop}>QB Engineering</button>
            <div className={"header__button__container"}>
                <button className={"header__button text"} onClick={scrollToAbout}>About</button>
                <button className={"header__button text"} onClick={scrollToProjects}>Projects</button>
                <button className={"header__button text"} onClick={scrollToContact}>Contact</button>
            </div>
        </div>
    )
}