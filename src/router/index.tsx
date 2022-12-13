import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home, Cart, Success } from '../pages'
import { AppRoutes } from './routes'

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<DefaultLayout />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.CART} element={<Cart />} />
        <Route path={AppRoutes.SUCCESS} element={<Success />} />
      </Route>
    </Routes>
  )
}
