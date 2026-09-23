import { useState } from "react";
import "../styles/CVSection.css";

export function PracticalExperience() {
    const [isEditing, setIsEditing] = useState(true);

    const [experienceInfo, setExperienceInfo] = useState({
        companyName: "CABAL",
        positionTitle: "TV PRODUCER",
        mainResponsibilities: "Led technical operations for live esports productions, overseeing audiovisual equipment, coordinating technical teams and troubleshooting issues under high-pressure conditions.",
        startDate: "2019",
        endDate: "2026"
    });

    const handleChange = (event) => {
        setExperienceInfo((previousInfo) => ({
            ...previousInfo,
            [event.target.id]: event.target.value
        }));
    }

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

                <h1 className="section-title">Work Experience</h1>

                <div className="section-inputs">

                    <label htmlFor="companyName">Company name</label>
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={experienceInfo.companyName}
                        onChange={handleChange}
                    />

                    <label htmlFor="positionTitle">Position title</label>
                    <input
                        id="positionTitle"
                        name="positionTitle"
                        type="text"
                        value={experienceInfo.positionTitle}
                        onChange={handleChange}
                    />

                    <label htmlFor="mainResponsibilities">Main responsibilities</label>
                    <textarea
                        id="mainResponsibilities"
                        name="mainResponsibilities"
                        value={experienceInfo.mainResponsibilities}
                        onChange={handleChange}
                    />

                    <label htmlFor="startDate">Start date</label>
                    <input
                        id="startDate"
                        name="startDate"
                        type="text"
                        value={experienceInfo.startDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="endDate">End date</label>
                    <input
                        id="endDate"
                        name="endDate"
                        type="text"
                        value={experienceInfo.endDate}
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

                <h1 className="section-title">Work Experience</h1>

                <div className="section-data">

                    <div className="data-item">
                        <p className="prop-title">Company Name</p>
                        <p>{experienceInfo.companyName}</p>
                    </div>

                    <div className="data-item">
                        <p className="prop-title">Position Title</p>
                        <p>{experienceInfo.positionTitle}</p>
                    </div>

                    <div className="data-item">
                        <p className="prop-title">Main Responsibilities</p>
                        <p>{experienceInfo.mainResponsibilities}</p>
                    </div>

                    <div className="data-item">
                        <p className="prop-title">Date</p>
                        <p>
                            {experienceInfo.startDate} - {experienceInfo.endDate}
                        </p>
                    </div>

                </div>

                <button className="section-button" onClick={handleEdit}>
                    Edit
                </button>

            </div>
        )
    }
}
