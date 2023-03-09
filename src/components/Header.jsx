import React from "react"

export default function Header(){
    return(
        <div className="header">
            <div className={"logo__header subtitle"}>QB Engineering</div>
            <div className={"header__button__container"}>
                <button className={"header__button"}>About</button>
                <button className={"header__button"}>Projects</button>
                <button className={"header__button"}>Contact</button>
            </div>
        </div>
    )
}