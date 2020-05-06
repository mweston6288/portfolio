import React from "react";
import Header from "../components/Header"
import resume from "../images/Resume.pdf"
const Resume = () => {
    return (
        <div>
            <Header page="Resume" />
            <embed className="pdf"src={resume} type="application/pdf"/>
        </div>
    )
}
export default Resume;