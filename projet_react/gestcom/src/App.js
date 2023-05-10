import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Editarticle from './components/Articles/Editarticle';
import Insertarticle from './components/Articles/Insertarticle';
import Listarticle from './components/Articles/Listarticle';
import Editcategorie from './components/Categorie/Editcategorie';
import Insertcategorie from './components/Categorie/Insertcategorie';
import Listcategorie from './components/Categorie/Listcategorie';
import Menu from './Menu';
import Navbarre from './components/Navbarre';
import Editsouscategorie from './components/souscategorie/Editsouscategorie';
import Insertsouscategorie from './components/souscategorie/Insertsouscategorie';
import Listsouscategorie from './components/souscategorie/Listsouscategorie';
import Listboi from './components/Boisson/Listboi';
import Insertboi from './components/Boisson/Insertboi';
import Editboi from './components/Boisson/Editboi';
function App() {
  return (
    <BrowserRouter>
    <Navbarre/>
    <Routes> 
      <Route path="/Menu" element={<Menu/>} />
      <Route  path="/articleI" element={<Insertarticle/>}/>
      <Route path="/articleE/:id"element={<Editarticle/>}/>
      <Route path="/articleL"element={<Listarticle/>}/>
      <Route path="/categorieL" element={<Listcategorie/>}/>
      <Route path="/categorieI" element={<Insertcategorie/>}/>
      <Route path="/categorieE/:id" element={<Editcategorie/>}/>
      <Route path="/souscategorieI" element={<Insertsouscategorie/>}/>
      <Route path="/souscategorieE/:id "element={<Editsouscategorie/>}/>
      <Route path="/souscategorieL" element={<Listsouscategorie/>}/>
      <Route path="/listboi" element={<Listboi/>}/>
      <Route path="/insertboi" element={<Insertboi/>}/>
      <Route path="/editboi/:id" element={<Editboi/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
