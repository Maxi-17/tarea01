import { useState } from 'react'; 
function ItemCard({ item }) {
  const [esFavorito, setEsFavorito] = useState(false); 
   const handleFavoritoClick = () => {
    setEsFavorito(!esFavorito); 
  };
  
  let clasesTarjeta = "tarjeta";
  if (item.destacado) clasesTarjeta += " destacado";
  if (esFavorito) clasesTarjeta += " favorito";
  
  return (
    <div className={clasesTarjeta}>
      <h3 className="texto-resaltado">{item.titulo}</h3>
      <p>Categoría: {item.categoria}</p>
      <p>Año: {item.anio}</p>
      <button onClick={handleFavoritoClick}>
        {esFavorito ? "❤️ Quitar de Favoritos" : "🤍 Marcar Favorito"}
      </button>
    </div>
  );
}

export default ItemCard;


