import { useState } from 'react'; 
function ItemCard({ item }) {
  const [esFavorito, setEsFavorito] = useState(false); 
   const handleFavoritoClick = () => {
    setEsFavorito(!esFavorito); 
  };

  const claseTarjeta = item.destacado ? "tarjeta destacado" : "tarjeta";

  return (
    <div className={claseTarjeta} style={{ border: esFavorito ? '2px solid red' : '1px solid gray' }}>
      <h3>{item.titulo}</h3>
      <p>Categoría: {item.categoria}</p>
      <p>Año: {item.anio}</p>
      <button onClick={handleFavoritoClick}>
        {esFavorito ? "❤️ Quitar de Favoritos" : "🤍 Marcar Favorito"}
      </button>
    </div>
  );
}

export default ItemCard;


