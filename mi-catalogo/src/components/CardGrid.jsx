import ItemCard from './ItemCard';

function CardGrid({ lista }) {
  return (
    <div className="contenedor-grilla">
      {lista.map((juego) => (
        <ItemCard key={juego.id} item={juego} /> 
      ))}
    </div>
  );
}

export default CardGrid;

