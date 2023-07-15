import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
function DropdownMenu() {
   const navigate = useNavigate()


   const handlePost =()=>{
    navigate("/createpost")
   }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown1">
        ...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handlePost}>Edit Post</Dropdown.Item>
        <Dropdown.Divider />
        
        
        <Dropdown.Divider />
        <Dropdown.Item href="/copyLink">Delete Post</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
