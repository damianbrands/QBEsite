import React from "react";

export default function ContactPage(){
    return (
        <div className={"contact__page"} id={"contact"}>
            <div>
                <div className={"title page__title"}>Contact</div>
                <div className={"subtitle"}>Quint Brands</div>
                <div className={"text"}>
                    <p>0612345678</p>
                    <p>quint@qb</p>
                </div>
            </div>
            <img alt={"Quint Brands foto"} className={"quint"} src={"src/assets/images/quint.png"}/>
        </div>
    )
}