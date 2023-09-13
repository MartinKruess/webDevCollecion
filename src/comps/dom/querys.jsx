export const Querries = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>LOL</h2>
      <p></p>
      <div className='grid grid-cols-11 gap-5'>
        <div className='col-span-3'>.document</div>
        <div className='col-span-7'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam est
          officia repudiandae. Voluptatum quibusdam esse, temporibus officia quo
          optio, ullam explicabo saepe id nesciunt, dicta expedita earum
          aspernatur sequi fugiat.
        </div>

        <div className='col-span-3'>.document.getElementById('')</div>
        <div className='col-span-5'>
          Es wird das Element mit der passenden id="myID ausgewählt."
        </div>
        <div className='col-span-3'>getElementById('myID')</div>

        <div className='col-span-3'>.document.getElementsByClassName('')</div>
        <div className='col-span-5'>
          Es werden alle Elemente mit der class="myClass" ausgewählt.
        </div>
        <div className='col-span-2'>
          getElementsByClassName('myClass')
          getElementsByClassName('myClass:last-child')
        </div>

        <div className='col-span-3'>.document.getElementsByName('')</div>
        <div className='col-span-5'>Description</div>
        <div className='col-span-2'>getElementByName('')</div>

        <div className='col-span-3'>.document.getElementsByTagName('')</div>
        <div className='col-span-5'>
          Spricht alle Elemente der passenden Art an.
        </div>
        <div className='col-span-2'>
          getElementByTagName('div') getElementByTagName('input')
          getElementByTagName('form')
        </div>

        <div className='col-span-3'>.document.querrySelector('')</div>
        <div className='col-span-5'>
          Der querrySelector wählt das erste Element aus, dass mit den
          Suchkriterien übereinstimmt.
        </div>
        <div className='col-span-2'>
          querrySelector('.myClass') querrySelector('#myID')
          querrySelector('div') querrySelector('ul li') querrySelector('.myClass
          a') querrySelector('input["type:text"]')
        </div>

        <div className='col-span-3'>.document.querrySelectorAll('')</div>
        <div className='col-span-5'>
          Der querrySelectorAll findet alle Elemente, die den Suchkriterien
          entsprechen. Egal ob eines oder mehrere gefunden werden, werden diese
          immer in einer NoteList wieder gegeben. Eine NoteList verhält sich
          ähnlich eines Arrays und arbeitet mit Indezes 0 - arr.length
        </div>
        <div className='col-span-2'>
          querrySelectorAll('li') querrySelectorAll('ul li')
          querrySelectorAll('.myClass') querrySelectorAll('input["type:text"]')
          querrySelectorAll('h1, h2')
        </div>
      </div>
    </article>
  );
};
