import React from "react";

export default function ContactPage(){
    return (
        <div className={"contact__page"} id={"contact"}>
            <div>
                <div className={"title page__title"}>Contact</div>
                <div className={"subtitle"}>Quint Brands</div>
                <div className={"text"}>
                    <p>Stroeërschoolweg 4</p>
                    <p>3776 MN Stroe</p>
                    <p>+31 (0)6-15186121</p>
                    <p>quint@qb-engineering.nl</p>
                </div>
            </div>
            <img alt={"Quint Brands foto"} className={"quint"} src={"src/assets/images/quint.png"}/>
        </div>
    )
}