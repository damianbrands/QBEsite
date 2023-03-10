import React from "react";

export default function AboutPage(){
    return(
        <div className={"about__page"} id={"about"}>
            <div className={"title page__title"}>About</div>
            <div className={"about__container"}>
                <img src={"src/assets/images/drawing.png"} className={"drawing"} alt={"robot drawing"}/>
                <div>
                    <div className={"subtitle"}>What we do:</div>
                    <div className={"text"}>
                        <p>Concept engineering</p>
                        <p>Engineering</p>
                        <p>Engineering Drawings</p>
                        <p>Assembly</p>
                        <p>Installations</p>
                        <p>Services</p>
                    </div>
                </div>
            </div>
        </div>
    )
}