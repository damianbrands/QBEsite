import React from "react"

export default function Header(){
    function scrollToAbout(){
        document.getElementById("about").scrollIntoView();
    }

    function scrollToProjects(){
        document.getElementById("projects").scrollIntoView();
    }

    function scrollToContact(){
        document.getElementById("contact").scrollIntoView();
    }

    return(
        <div className="header">
            <div className={"logo__header subtitle"}>QB Engineering</div>
            <div className={"header__button__container"}>
                <button className={"header__button"} onClick={scrollToAbout}>About</button>
                <button className={"header__button"} onClick={scrollToProjects}>Projects</button>
                <button className={"header__button"} onClick={scrollToContact}>Contact</button>
            </div>
        </div>
    )
}