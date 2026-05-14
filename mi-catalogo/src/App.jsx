import CustomHeader from './components/CustomHeader';
import CardGrid from './components/CardGrid';
import { catalogo } from './data/data'; 
function App() {
  return (
    <div>
      <CustomHeader />
      
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

