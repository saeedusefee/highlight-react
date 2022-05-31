import React from "react";

const AppWrapper = ({children}) => {
    return( 
        <div 
            style={{ minHeight: '100vh', width: '100%', display: 'flex', maxWidth: '800px', alignItems: 'center', margin: 'auto', flexWrap: 'wrap'}}>
            {children}
        </div>
    );
};

export default AppWrapper;
