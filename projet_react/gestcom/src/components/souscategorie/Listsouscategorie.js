
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Listsouscategorie() {
  
 
  const [listcate, setcate] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/supplement").then((res) => {
      setcate(res.data);
      console.log(listcate);
    })
  });
  const GetListarticle=async()=>{
    await
    axios.get("http://localhost:5000/supplement/").then((res)=>{
    setcate(res.data)
    }).catch(function(error){
    console.log(error)
    })
    }
  const handleDeletee=(id)=>{
    if (window.confirm("Voulez-vous supprimer ce sandwich ?") === true) {
      axios.delete("http://localhost:5000/supplement/"+id).then((res) => {
        console.log('successfully deleted!');
        
        GetListarticle();
    }).catch(err=>console.log(err))
    }
  }
  return (
    <div>
      Listes des supplement 
      <Table striped bordered hover >
    <thead>
    <Button variant="primary"> {<Link to={"/souscategorieI"}style={{textDecoration:"none",color:"white"}} >Ajouter</Link>}</Button>{' '}
      <tr>
        <th>Image</th>
        <th>Nom</th>
        <th>prix</th>
        <th>Modifier/Supprimer</th>
      </tr>
    </thead>
    <tbody>
    {
    listcate.map((art,i)=>
    <tr key="i">
      <td><img src={art.photo} alt={art.id} width="100"/></td>
      <td>{art.nom}</td>
      <td>{art.prix}</td>
      <td><Button variant="primary">
                    <Link to={`/souscategorieE/${art.id}`}style={{ textDecoration: "none", color: "white" }} >Modifier</Link></Button> 
                <Button onClick={()=>{handleDeletee(art.id)}} variant="danger">Supprimer</Button>{' '}</td>
      
    </tr>
    )
  }
    </tbody>
      </Table>
    </div>
  )
}
