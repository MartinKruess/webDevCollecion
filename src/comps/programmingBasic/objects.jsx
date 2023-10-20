import { highlights } from "../../App";
import { ArrayOfObjects } from "./assets/objectAssets/ArrayOfObjects";
import { ObjectInfo } from "./assets/objectAssets/objectInfo";
import { ObjectMethods } from "./assets/objectAssets/objectMethods";
import { ObjectBasic } from "./assets/objectAssets/objectsBasic";

export const Objects = () => {
  return (
    <article className='p-4'>
      {<ObjectInfo />}
      {<ObjectBasic />}
      {<ObjectMethods />}
      {<ArrayOfObjects />}
      <div className='linkContainer'>
        <a
          href='https://www.mediaevent.de/javascript/this.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          this (gut erklärt)
        </a>
      </div>
    </article>
  );
};
