import {useState} from 'react';
import "./Tooltip.css";
function Tooltip(props){
    
    //useState hook for active variable 
    const [active,setActive] = useState(false);
    
    // function for showTooltip
    function showTooltip(){
        setActive(true);
    }

    // function for hideTooltip
    function hideTooltip(){
        setActive(false);
    }

    return(
        <div 
        className='Wrapper'
        // events for the tooltip
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        >
        {/* props.children gives the button which is written in app.js component */}
        {props.children}
        
        {/* When we mouseover then active will set to true and due to which the tooltip will show and we 
        remove our mouseover then active will set to false due to which the tooltip will hide */}
        {active && (<div className={`Tooltip-Tip ${props.direction || "top"}`}>
            {props.content}
        </div>)}    
        </div>
    )
}

export default Tooltip