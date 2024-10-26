interface Route {
  path: string;
  label: string;
}

export const routes: Route[] = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];
