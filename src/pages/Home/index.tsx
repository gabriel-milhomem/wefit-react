import { useEffect } from 'react'
import { MovieCard } from '../../components'
import { CartStore, useCartStore } from '../../store'
import shallow from 'zustand/shallow'
import { HomeContainer } from './styles'
import { Product } from '../../@types'
import { ClipLoader } from 'react-spinners'

const selectHomeState = (state: CartStore) =>
  [
    state.loadingInit,
    state.fetchMovies,
    state.products,
    state.totalQuantity,
  ] as const

export function Home() {
  const [loadingInit, fetchMovies, products, totalQuantity] = useCartStore(
    selectHomeState,
    shallow,
  )

  useEffect(() => {
    const getAllMovies = () => fetchMovies()
    if (totalQuantity === 0 && loadingInit === true) {
      getAllMovies()
    }
  }, [fetchMovies, loadingInit, totalQuantity])

  if (loadingInit) {
    return (
      <ClipLoader
        color="#FFF"
        cssOverride={{
          position: 'absolute',
          margin: 'auto',
          inset: 0,
        }}
        loading
        size={56}
        aria-label="Carregando os dados"
      />
    )
  }

  return (
    <HomeContainer>
      {products.map((product: Product) => (
        <MovieCard product={product} key={product.id} />
      ))}
    </HomeContainer>
  )
}
