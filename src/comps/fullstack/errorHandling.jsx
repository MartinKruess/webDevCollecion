import { errorData } from "./assets/fsTestData";

export const ErrorHandling = () => {
  return (
    <article>
      {errorData.map((err) => {
        return (
          <div key={err.title} className='errorCard'>
            <h2>{err.title}</h2>
            <div>
              <p className='errCode'>{err.code}</p>
              <p className='errMsg'>{err.err}</p>
            </div>
            <div>
              <form>
                <label htmlFor='kind'>Beschreibe welcher Fehler vorliegt</label>
                <input type='text' id='kind' />
                <label htmlFor='code'>Gebe die verbeserte Code-Zeile ein</label>
                <input type='text' id='code' />
                <button className='check'>Check</button>
              </form>
              <div className='formControll'>
                <p>Beschreibe welcher Fehler vorliegt</p>
                <p>{err.kind}</p>
                <p>Gebe die verbeserte Code-Zeile ein</p>
                <p>{err.solutionCode}</p>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};
