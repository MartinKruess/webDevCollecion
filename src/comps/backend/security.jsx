import { highlights } from "../../App";
import { BcryptInfo } from "./assets/bcryptInfo";
import { Cors } from "./assets/cors";
import { SecurityInfo } from "./assets/securityInfo";

export const Security = () => {
  return (
    <article>
      <SecurityInfo />
      <Cors />
      <BcryptInfo />
      <h4 className='font-extrabold text-lg'>Die Verwendung von bcrypt</h4>
      <h3 className='font-extrabold text-xl'>Was ist 'JWT'?</h3>
    </article>
  );
};
