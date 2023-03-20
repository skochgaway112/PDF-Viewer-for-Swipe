import React ,{useState} from 'react';
import './Dropdown.css';

function Dropdown(){
    const[state,setstate] = useState(false);
    const showDropdown=()=>{
               setstate(true);
    }


    const hideDropdown=()=>{
        setstate(false);
    }


    return(
<div className="dropdown">
 <div className="dropdown-menu"  onMouseEnter={showDropdown} onmouseLeave={hideDropdown}>
  Dropdown

     {state ?(<ul className="dropdown-list" onMouseEnter={showDropdown}>
    <li>English</li>
    <li>Hindi</li>
    <li>Tamil</li>
    <li>Telugu</li>
    <li>Kannada</li>
  </ul>):null}

  
 </div>

</div>
    )

}
export default Dropdown;