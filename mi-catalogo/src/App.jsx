import CustomHeader from './components/CustomHeader';
import CardGrid from './components/CardGrid';
import { catalogo } from './data/data'; 
function App() {
  return (
    <div>
      <header>
        <h1>Catalogo de Juegos de Maxi17</h1>
        <p>Bienvenido a mi primera app en React</p>
      </header>
      
      <main>
        <CardGrid lista={catalogo} />
      </main>

      <footer>
        <p>© 2026 - Realizado por [Maxi T]</p>
      </footer>
    </div>
  );
}

export default App;

