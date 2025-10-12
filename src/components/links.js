import React from "react"



function Links ({ github, linkedIn}) {
    return (
        <div>
            <h3>Links</h3>
            <a href={ github } >{ github }</a>
            <a href={ linkedIn }>{ linkedIn }</a> 
        </div>
    );
}

export default Links;