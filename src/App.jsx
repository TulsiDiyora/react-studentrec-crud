import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cart from './Component/Cart/Cart'
import View from './Component/View/View';
import MuiTable from './Component/MuiTable/MuiTable';
import getRec from './helper'
import './App.css'
import EditData from './Component/EditData/EditData';

function App() {

  const [formInput, setFormInput] = useState({
    id: '',  
    fname: '',
    lname: '',
    email: '',
    address: '',
    birth: '',
    age: '',
    course: '',
    compe : ''
});
const [storage, setStorage] = useState(getRec());
const [viewRec, setViewRec] = useState(getRec());
const [searchInput, setSearchInput] = useState('');


const navigator = useNavigate();

const handleSerchInput = (e) => {
  setSearchInput(e.target.value);
  console.log("searchInput :", searchInput);

  let filterData = getRec().filter((rec) => {

    return rec.fname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());

  });
  console.log("filterData :",filterData);
  setViewRec(filterData);
  
}
const handleSearch = () => {

  let filterData = getRec().filter((rec) => {

    return rec.fname.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());

  });
  console.log("filterData :",filterData);
  setViewRec(filterData);
};

const handleForm = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setFormInput({ ...formInput, [name]: value });
};

const handleEditData = (data) => {
  // setFormInput(data);  
  navigator('/edit', { state: data });
};

const handleSave = (saveRec) =>{

  setStorage(saveRec);
  navigator('/view')
}

const handleDelete = (id) => {
  const updatedStorage = storage.filter((rec) => rec.id !== id);
  setStorage(updatedStorage);
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (formInput.id) {
  
      const updatedStorage = storage.map((rec) => {
          if (rec.id === formInput.id) {
              return { ...formInput }; 
          } else {
              return rec;
          }
      });
      setStorage(updatedStorage);
  } else {
  
      const newFormInput = { ...formInput, id: Math.floor(Math.random() * 10000) };
      setStorage([...storage, newFormInput]);
  }
  // alert('Form Submitted');
  setFormInput({
      id: '', 
      fname: '',
      lname: '',
      email: '',
      address: '',
      birth: '',
      age: '',
      course: '',
      compe : ''
  });

  navigator('/view');
};
 
const handleASC = () => {

  let sortData = [...viewRec]

  const sortedData = sortData.sort((rec1, rec2) => {

    return rec1.fname.localeCompare(rec2.fname);

  });
  
  console.log("sortedData :",sortedData);
  
  setViewRec(sortedData);

};

const handleDSC = () => {

 console.log("viewRec :");
 
 let sortData = [...viewRec]
 
 const sortedData = sortData.sort((rec1, rec2) => {
 
   return rec2.fname.localeCompare(rec1.fname);
 
 });
 
 console.log("sortedData :",sortedData);
 
 setViewRec(sortedData);
 

}

const handleSelect = (cat) => {

  console.log("cat", cat);

  
  if(cat !== ''){
    
    let filterData = getRec().filter((rec) =>{
  
      return rec.compe.toLocaleLowerCase() === cat.toLocaleLowerCase();
  
    });
    console.log("filterData :",filterData);


  
    setViewRec(filterData);
  }
  else{
    setViewRec(getRec());
  }
}


  useEffect(() => {

      localStorage.setItem('storageData', JSON.stringify(storage));
      setViewRec(getRec());

  }, [storage]);


  return (
    <>
    <Routes>
        <Route path="/" element={<Cart formInput={formInput} handleForm={handleForm} handleSubmit={handleSubmit}/>} />   
        <Route path="/view" element={<View storage={viewRec}  handleEdit={handleEditData} handleDelete={handleDelete} handleASC={handleASC}  handleDSC={handleDSC} handleSelect={handleSelect} handleSerchInput={handleSerchInput} searchInput={searchInput} handleSearch={handleSearch}/>} />  
        <Route path="/edit" element={<EditData storage={storage} handleSave={handleSave} />} />
        <Route path="/table" element={<MuiTable storage={viewRec} handleEdit={handleEditData} handleDelete={handleDelete}/>} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App


