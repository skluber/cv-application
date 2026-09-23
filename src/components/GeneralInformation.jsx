import { useState } from "react";
import "../styles/CVSection.css";

export function GeneralInformation() {
    const [isEditing, setIsEditing] = useState(true);

    const [generalInfo, setGeneralInfo] = useState({
        name: "Antonio",
        email: "antonio@gmail.com",
        phone: "655147917"
    });

    const handleChange = (event) => {
        setGeneralInfo((previousInfo) => ({
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

                <h1 className="section-title">General Information</h1>

                <div className="section-inputs">

                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={generalInfo.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={generalInfo.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="phone">Phone number</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={generalInfo.phone}
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

                <h1 className="section-title">General Information</h1>

                <div className="section-data">

                    <div className="data-item">
                        <p className="prop-title">Name</p>
                        <p>{generalInfo.name}</p>
                    </div>

                    <div className="data-item">
                        <p className="prop-title">Email</p>
                        <p>{generalInfo.email}</p>
                    </div>

                    <div className="data-item">
                        <p className="prop-title">Phone number</p>
                        <p>{generalInfo.phone}</p>
                    </div>

                </div>

                <button className="section-button" onClick={handleEdit}>
                    Edit
                </button>

            </div>
        );
    }
}