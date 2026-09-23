import { useState } from "react";
import "../styles/CVSection.css";

export function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [educationInfo, setEducationInfo] = useState({
        schoolName: "C.E.S Lope de Vega SCA",
        studyTitle:
            "HIGHER TECHNICIAN IN ADMINISTRATION OF COMPUTER SYSTEMS AND NETWORKS (ASIR)",
        startDate: "2016",
        endDate: "2018"
    });

    const handleChange = (event) => {
        setEducationInfo((previousInfo) => ({
            ...previousInfo,
            [event.target.id]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    if (isEditing) {
        return (
            <form className="cv-section" onSubmit={handleSubmit}>

                <h1 className="section-title">Education</h1>

                <div className="section-inputs">

                    <label htmlFor="schoolName">School name</label>
                    <input
                        id="schoolName"
                        name="schoolName"
                        type="text"
                        value={educationInfo.schoolName}
                        onChange={handleChange}
                    />

                    <label htmlFor="studyTitle">Title of study</label>
                    <input
                        id="studyTitle"
                        name="studyTitle"
                        type="text"
                        value={educationInfo.studyTitle}
                        onChange={handleChange}
                    />

                    <label htmlFor="startDate">Start date of study</label>
                    <input
                        id="startDate"
                        name="startDate"
                        type="text"
                        value={educationInfo.startDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="endDate">End date of study</label>
                    <input
                        id="endDate"
                        name="endDate"
                        type="text"
                        value={educationInfo.endDate}
                        onChange={handleChange}
                    />

                </div>

                <button className="section-button" type="submit">
                    Submit
                </button>

            </form>
        );
    } else {
        return (
            <div className="cv-section">

                <h1 className="section-title">Education</h1>

                <div className="section-data">

                    <div className="data-item">
                        <p className="prop-title">School name</p>
                        <p>{educationInfo.schoolName}</p>
                    </div>

                    <div className="data-item">
                        <p className="prop-title">Title of study</p>
                        <p>{educationInfo.studyTitle}</p>
                    </div>

                    <div className="data-item">
                        <p className="prop-title">Date of study</p>
                        <p>
                            {educationInfo.startDate} - {educationInfo.endDate}
                        </p>
                    </div>

                </div>

                <button className="section-button" onClick={handleEdit}>
                    Edit
                </button>

            </div>
        );
    }
}   