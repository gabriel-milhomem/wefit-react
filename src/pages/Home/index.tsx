import { MovieCard } from '../../components'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </HomeContainer>
  )
}
