import React from "react";
import { highlightSelection } from "../../utils";
import './index.style.css';

const SidebarButton = () => {
    
    const showAddNote = () => {
        const noteComponent = document.getElementsByClassName('add-note-root');
        for(let i = 0; i < noteComponent.length; i++ ) {
            noteComponent[i].style.display = "block";
        }
    }

    return (
        <div className="sideBarButton">
            <button onClick={(e) => highlightSelection({color: 'red'})} style={{ backgroundColor: 'red' }}>R</button>
            <button onClick={(e) => highlightSelection({color: 'yellow'})} style={{ backgroundColor: 'orange' }}>Y</button>
            <button onClick={(e) => highlightSelection({color: 'green'})} style={{ backgroundColor: 'green' }}>G</button>
            <button onClick={(e) => highlightSelection({color: 'reset'})} style={{ backgroundColor: 'darkgray' }}>C</button>
            <button onClick={showAddNote}>+</button>
        </div>
    );
};

export default SidebarButton;