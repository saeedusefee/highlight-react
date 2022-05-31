import React, { useState } from "react";
import { highlightSelection } from "../../utils";
import "./index.style.css";

const AddNote = () => {
    const [note, setNote] = useState("");

    const handleAddNote = () => {
        highlightSelection({tooltip: note});
    };

    return (
        <div className="add-note-root">
            <input className="input-note" onChange={event => setNote(event.target.value)}/>
            <button className="add-btn" onClick={handleAddNote}>Add</button>
        </div>
    );
};

export default AddNote;