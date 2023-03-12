import React from "react";

export default function TitlePage(){
    return (
        <>
            <div className={"title__page"}>
                <div className={"square"}></div>
                <div className={"title__container"}>
                    <div className={"title black"}>QB Engineering</div>
                    <div className={"subtitle subtitle__title black"}>Engineering done right.</div>
                </div>
            </div>
            <div className={"scrollDiv"} id={'aboutScroll'}></div>
        </>
    )
}