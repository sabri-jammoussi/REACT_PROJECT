import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Listarticle() {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "http://localhost:5000/pizza";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const GetListarticle=async()=>{
    await
    axios.get("http://localhost:5000/pizza/").then((res)=>{
    setPosts(res.data)
    }).catch(function(error){
    console.log(error)
    })
    }
  const handleDelete=(id)=>{
    if (window.confirm("Voulez-vous supprimer cette pizza ?") === true) {
      axios.delete("http://localhost:5000/pizza/"+id).then((res) => {
        console.log('successfully deleted!');
        
        GetListarticle();
    }).catch(err=>console.log(err))
    }
    
  }

/*const [listart,setlistart]=useState([])
useEffect(()=>
{
  
axios.get("http://localhost:5000/articles").then((res)=>{
setlistart(res.data);
console.log(listart);

})

});

const deleteProd=(art)=>{
  axios.delete('http://localhost:5000/articles'+id)
  .then((res) => {setlistart(listart.filter(p => p.id !== art.id));
  console.log('successfully deleted!')
  }).catch((error) => {
  console.log(error)
  })
 
  }

*/
return (
  <div>
    <h1>Listes des Pizza</h1><br />
    <>
      <Button variant="primary"> {<Link to={"/articleI"} style={{ textDecoration: "none", color: "white" }} >Ajouter</Link>}</Button>{' '}
    </>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Nom</th>
          <th>ingrédient</th>
          <th>Prix de vente </th>
          <th>Modifier/Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {
          posts.map((art) =>

            <tr key={art.id}>
              <td><img src={art.photo} width="100"></img></td>
              <td>{art.nom}</td>
              <td>{art.def}</td>
              <td>{art.prix}</td>
       
              <td> <Button variant="primary">
                    <Link to={`/articleE/${art.id}`}style={{ textDecoration: "none", color: "white" }} >Modifier</Link></Button> 
                <Button onClick={() => handleDelete(art.id) } variant="danger">Supprimer</Button></td>
            </tr>
          )

        }
      </tbody>
    </Table>
  </div>
)
}
