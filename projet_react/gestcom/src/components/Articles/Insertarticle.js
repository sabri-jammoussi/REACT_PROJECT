import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UploadFirebase } from '../../UploadFirebase';
export default function Insertarticle() {
  const[nom,setnom]=useState("");
  const[prix,setprixVente]=useState("");
  const[photo,setphoto]=useState("");
  const[def,setdef]=useState("");
  const[file,setfile]=useState("");
  let navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      nom:nom,
      prix:prix,
      photo:photo,
      def:def
    }
    axios.post("http://localhost:5000/pizza",data).then((response) => {
      console.log(response.data);
    });
  
  navigate('/articleL')
  
  

  }
  const handleUpload=(e)=>{
    if(!file){
      alert('please upload an image first');
    }
    resultHandleUpload(file);
  };
  const resultHandleUpload =async(file)=>{
    try {
     const url = await UploadFirebase(file);
      setphoto(url);
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <div>
     <h1>Insert des pizza</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Nom"  value={nom} onChange={(e)=>setnom(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>prixVente</Form.Label>
        <Form.Control type="text" placeholder="prixVente"  value={prix} onChange={(e)=>setprixVente(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrédient</Form.Label>
        <Form.Control type="text" placeholder="Ingrédient"  value={def} onChange={(e)=>setdef(e.target.value)}/>
      </Form.Group>
    

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image du pizza</Form.Label>
        <Form.Control type="file" onChange={e=>setfile(e.target.files[0])}/>
      </Form.Group>
      
      <Button onClick={handleUpload} variant="primary" type="button">
        upload
      </Button>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      <div>{photo ?<img src={photo} alt=""
width="150"/>:null}</div>
    </Form>
    </div>
  )
}
