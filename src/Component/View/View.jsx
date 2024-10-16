import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Container, Dropdown } from 'react-bootstrap';
import NotData from '../../assets/notdata.avif'
// import DropdownButton from 'react-bootstrap';
import getRec from '../../helper'
import './View.css'


function View({storage, handleEdit, handleDelete, handleASC, handleDSC, handleSelect,searchInput, handleSerchInput, handleSearch}) {

    const navigate = useNavigate();

    // const [viewData, setviewData] = useState(storage);

    // useEffect(() => {

    //     setviewData(getRec);

    // },[]);

    // const handelEditData = (id) => {
    //      const updatedRec = viewData.find((rec)=>{
    //          return rec.id === id;
    //     })
        
    //      console.log(updatedRec);

    //      navigate('/edit', {state: updatedRec});
    //    }

    // const handeldeleteData = (id) => {

    //     const deleteData = viewData.filter((rec) => {
    //         return rec.id !== id;
    //     })
        
    //     setviewData(deleteData);
        
    //     localStorage.setItem('storageData', JSON.stringify(deleteData))
    //  }

    const handleEditData = (id) => {
        const updatedRec = storage.find((rec) => rec.id === id);
        handleEdit(updatedRec);  
      };
    
      const handleDeleteData = (id) => {
        handleDelete(id); 
      };
    

     const BackButton = () => {
        navigate('/');
     }
            

  return (
   <>
    <Container>
   <h1 className='text-center fw-bold mb-5'>View Data</h1>
   
    <div className='d-flex  align-items-center'>
     

        <Dropdown>  
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.ItemText onClick={() => handleSelect('')}>All</Dropdown.ItemText>
            <Dropdown.ItemText onClick={() => handleSelect('animation')}>animation</Dropdown.ItemText>
            <Dropdown.ItemText onClick={() => handleSelect('drawing')}>drawing</Dropdown.ItemText>
            <Dropdown.ItemText onClick={() => handleSelect('quiz')} >quiz</Dropdown.ItemText>
            <Dropdown.ItemText onClick={() => handleSelect('c++')}>c++</Dropdown.ItemText>
            <Dropdown.ItemText onClick={() => handleSelect('css')} >css</Dropdown.ItemText>
            <Dropdown.ItemText onClick={() => handleSelect('javascript')} >javascript</Dropdown.ItemText>
        </Dropdown.Menu>
        </Dropdown>
        <button className='btn btn-primary ms-4' onClick={handleASC}>
            A-Z
        </button>
        <button className='btn btn-primary ms-4' onClick={handleDSC}>
            Z-A
        </button>
        <div>
            <input type="text" name="searchInput"  className="form-control" id="serch"  onChange={handleSerchInput} value={searchInput} placeholder='Search'/>
        </div>
    </div>

       <div className="mt-5">
       {
            storage.length === 0 ? (
                <div className='no-data'>
                    <p>
                        <img src={NotData}  />
                    </p>
                </div>
            ) : (
             <table className="cute-table">
             <thead>
                 <tr>
                     <th scope="col">#</th>
                     <th scope="col">First
                    
                     </th>
                     <th scope="col">Last</th>
                     <th scope="col">Email</th>
                     <th scope="col">Address</th>
                     <th scope="col">Age</th>
                     <th scope="col">Course</th>
                     <th scope='col'>competition</th>
                     <th scope="col">Action</th>
                 </tr>
             </thead>
             <tbody>
                 {
                     storage.map((data, index) => (
                         <tr key={data.id}>
                             <th scope="row">{index + 1}</th>
                             <td>{data.fname}</td>
                             <td>{data.lname}</td>
                             <td>{data.email}</td>
                             <td>{data.address}</td>
                             <td>{data.age}</td>
                             <td>{data.course}</td>
                             <td>{data.compe}</td>
                             <td>
                                 <button className='btn btn-primary' onClick={() => handleEditData(data.id)}>Edit</button>&nbsp;||&nbsp;
                                 <button className='btn btn-danger' onClick={() => handleDeleteData(data.id)}>Delete</button>
                             </td>
                         </tr>
                     ))
                 }
             </tbody>
         </table>
       )}
       <div className='text-center'>
        <button className='text-center btn-1' onClick={BackButton}>
                Back Registration Form
        </button>
       </div>
       </div>
    </Container>

   </>
  )
}

export default View


