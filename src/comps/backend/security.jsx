import { highlights } from "../../App";
import { Bcrypt } from "./assets/bcrypt";
import { Cors } from "./assets/cors";
import { SecurityInfo } from "./assets/securityInfo";

export const Security = () => {
  return (
    <article>
      <SecurityInfo />
      <Cors />
      <Bcrypt />
      <h4 className='font-extrabold text-lg'>Die Verwendung von bcrypt</h4>
      <h3 className='font-extrabold text-xl'>Was ist 'JWT'?</h3>
    </article>
  );
};
