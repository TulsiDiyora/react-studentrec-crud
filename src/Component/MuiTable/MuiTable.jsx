import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MyTable = ({ storage, handleEdit, handleDelete }) => {


  const handleEditData = (id) => {
    const updatedRec = storage.find((rec) => rec.id === id);
    handleEdit(updatedRec);  
  };

  const handleDeleteData = (id) => {
    handleDelete(id);  
  };


  return (
    <>
      <h1 className='text-center fw-bold mb-5'>Mui-Table</h1>  

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Competition</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {storage.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fname}</TableCell>
                <TableCell>{item.lname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.course}</TableCell>
                <TableCell>{item.compe}</TableCell>
                <TableCell>
                  <button className='btn btn-primary' onClick={() => handleEditData(item.id)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => handleDeleteData(item.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyTable;
