import { NestedRouteCode } from "./assets/nestedRouteCode";
import { NestedRouteText } from "./assets/nestedrouteText";
import { PrivateRoute } from "./assets/privateRoute";

export const RouterBonus = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Nesting und Privat Routes</h2>
      <NestedRouteText />
      <NestedRouteCode />
      <PrivateRoute />
    </article>
  );
};
