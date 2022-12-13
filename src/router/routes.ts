enum Routes {
  Home = "/",
  Cart = "/carrinho",
  Success = "/sucesso",
}

interface IAppRoutes {
  HOME: Routes.Home;
  CART: Routes.Cart;
  SUCCESS: Routes.Success;
}

export const AppRoutes: IAppRoutes = {
  HOME: Routes.Home,
  CART: Routes.Cart,
  SUCCESS: Routes.Success,
};
