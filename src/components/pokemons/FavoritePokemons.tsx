import type { FavoritePokemon } from "@interfaces/favorite-pokemon";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favorites')?? '[]');
    return favoritePokemons;
}


export const FavoritePokemons = () => {

  const favoritePokemons = getLocalStoragePokemons();
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      
    </div>
  )
}