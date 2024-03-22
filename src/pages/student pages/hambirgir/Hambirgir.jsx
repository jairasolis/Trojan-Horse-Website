import React from "react";
import "./Hambirgir.css";
export function ContentSection(props){
    return (
        <div className="content-section">
            <div className="content-heading">
                <div className="heading-title">
                    {props.contentTitle}
                </div>
                
            </div>
            <div className="heading-subtitle">
                {props.subtitle}
            </div>
            <div className="content-description">
                {props.children}
            </div>
        </div>
    )
}
export function ContentSection2(props){
    return (
    <ContentSection
        contentTitle = {props.contentTitle}
        subtitle = {props.subtitle}
        >
            {
                (props.children.length >= 2)?
                    <ol className="content-list">
                        {
                        (props.children.map((child, index) => 
                        <li key={index}>{child}</li>
                        ))
                        }
                    </ol>
                    :
                    props.children
            }
    </ContentSection>
    );
}
export default function Hambirgir(props){

    return (
        <div
        id="root-hambirgir"
        >
        <main
            role="main"
            id="student-body"
            >
            <ContentSection2
                contentTitle={"ITE 300"}
                subtitle={"Project Proposal"}
                >
                    <>
                    Provide clear and bright images of your completed activities. Avoid any blurriness or low lighting that may hinder visibility.
                    </>
                    <>
                    Write neatly and legibly, ensuring that your handwriting is clean and easily readable.
                    </>
            </ContentSection2>
            <ContentSection2
                contentTitle={"ITE 300"}
                subtitle={"Project Proposal"}
                >
                    <>
                    Provide clear and bright images of your completed activities. Avoid any blurriness or low lighting that may hinder visibility.
                    </>
                    <>
                    Write neatly and legibly, ensuring that your handwriting is clean and easily readable.
                    </>
            </ContentSection2>
            <ContentSection2
                contentTitle={"ITE 300"}
                subtitle={"Project Proposal"}
                >
                    <>
                    Provide clear and bright images of your completed activities. Avoid any blurriness or low lighting that may hinder visibility.
                    </>
                    <>
                    Write neatly and legibly, ensuring that your handwriting is clean and easily readable.
                    </>
            </ContentSection2>
        </main>
    </div>
    );

}