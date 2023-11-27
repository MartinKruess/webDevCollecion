import { NestedRouteCode } from "./assets/nestedRouteCode";
import { NestedRouteText } from "./assets/nestedrouteText";
import { PrivateRouteText } from "./assets/privaterouteText";

export const RouterBonus = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Nesting und Privat Routes</h2>
      <NestedRouteText />
      <NestedRouteCode />
      <PrivateRouteText />
    </article>
  );
};
