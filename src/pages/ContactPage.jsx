import React from "react";

export default function ContactPage(){
    return (
        <div className={"contact__page"}>
            <div className={"title page__title"}>Contact</div>
            <div className={"contact__container"}>
                <div>
                    <div className={"subtitle"}>Quint Brands</div>
                    <div className={"text"}>
                        0612345678
                        quint@qb
                    </div>
                </div>
                <img src={"src/assets/images/quint.png"}/>
            </div>
        </div>
    )
}