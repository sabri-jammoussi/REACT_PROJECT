import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UploadFirebase } from '../../UploadFirebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';
// import { getStorage } from 'firebase/storage';
import storage from '../../firebaseConfig';
//import API from '../Axios/Api';

export default function Editcategorie() {
  const[nom,setnom]=useState("");
  const[prix,setprixVente]=useState("");
  const[photo,setphoto]=useState("");
  const [file, setfile] = useState("");
  let navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:5000/sandwich/' + id).then(res => {
      setnom(res.data.nom);
      setphoto(res.data.photo);
      setprixVente(res.data.prix);
      
    })
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const produitObject = {
      id: id,
      nom:nom,
      prix:prix,
      photo:photo
    };
    axios.put('http://localhost:5000/sandwich/' + id, produitObject)
      .then(res => console.log(res.data));
    navigate("/articleL")

  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    resultHandleUpload(file);

  };
  const resultHandleUpload = async (file) => {

    try {

      const url = await UploadFirebase(file);
      console.log(url);
      setphoto(url);
    } catch (error) {
      console.log(error);
    }
  }
  const storageRef = ref(storage, `/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  
  uploadTask.on(
    "state_changed",
    (snapshot) => {
    const percent = Math.round(
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    );
    console.log(percent);
    },
    (err) => console.log(err),
    () => {
    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    console.log(url);
    setphoto(url);
    });
    }
    ); 
  return (
    <div>
    <h2>Modification d'un produit </h2>
    <form onSubmit={handleSubmit}>
    <div>
    <input
    placeholder="Nom"
    type="text"
    value={nom}
    onChange={e => setnom(e.target.value)}
    />
    </div>
    <div>
    <input
    placeholder="prix"
    name="prix"
    type="text"
    value={prix}
    onChange={e => setprixVente(e.target.value)}
    />
    </div>
    <div>
    <input
    type="file"
    onChange={e=>setfile(e.target.files[0])}
    accept="/image/*"
    />
    <button name="btnimag" type="button" onClick={handleUpload}> Upload to
   Firebase </button>
    </div>
    <div>{photo ?<img src={photo} alt=""
   width="70"/>:null}</div>
    <div>
    <button>Submit</button>
    </div>
    </form>
   
    </div>
   )
}
