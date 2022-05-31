import React from "react";
import PropTypes from 'prop-types';
import SidebarButton from "../SidebarButton";
import AddNote from "../AddNote";

const Highlight = ({children}) => {    

    return (
        <div className="box-root">
            <SidebarButton />
            <div >
                <p>{children}</p>
            </div>
            <AddNote />
        </div>
    );
}

Highlight.propTypes = {
    children: PropTypes.string,
  };

export default Highlight;
