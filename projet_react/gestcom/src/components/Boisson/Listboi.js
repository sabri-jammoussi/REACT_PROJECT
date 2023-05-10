import axios from 'axios'
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function Listboi() {
    const [listcate, setcate] = useState([])
    useEffect(() => {
      axios.get("http://localhost:5000/boisson").then((res) => {
        setcate(res.data);
        console.log(listcate);
      })
    });
    const GetListarticle=async()=>{
      await
      axios.get("http://localhost:5000/boisson/").then((res)=>{
      setcate(res.data)
      }).catch(function(error){
      console.log(error)
      })
      }
    const handleDeletee=(id)=>{
      if (window.confirm("Voulez-vous supprimer ce boisson ?") === true) {
        axios.delete("http://localhost:5000/boisson/"+id).then((res) => {
          console.log('successfully deleted!');
          
          GetListarticle();
      }).catch(err=>console.log(err))
      }
      
    }
    return (
        <div>
          <>
            <Button variant="primary"> {<Link to={"/insertboi"}style={{textDecoration:"none",color:"white"}} >Ajouter</Link>}</Button>{' '}
          </>
          <br />
          Listes des boisson
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Modifier/Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {
                listcate.map((art, i) =>
                  <tr key={art.id}>
                    <td><img src={art.photo} alt={art.id} width="200" /></td>
                    <td>{art.nom}</td>
                    <td>{art.prix}</td>
                    <td><Button variant="primary">
                        <Link to={`/editboi/${art.id}`}style={{ textDecoration: "none", color: "white" }} >Modifier</Link></Button> 
                    <Button onClick={()=>{handleDeletee(art.id)}} variant="danger">Supprimer</Button>{' '}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      )
}
