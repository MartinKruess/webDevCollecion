export const MongoRefs = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>MongoDB References</h2>
      <pre>
        <code>
          const bandSchema = new mongoose.Schema(&#123;
          <br />
          &#9;name: String,
          <br />
          &#9;gruendung: Number,
          <br />
          &#9;mitglieder: [String],
          <br />
          &#9;genre: String
          <br />
          &#125;);
        </code>
      </pre>

      <pre className='text-sm'>
        <code>
          import mongoose from "mongoose";
          <br />
          const bandSchema = new mongoose.Schema( &#123;
          <br />
          &#9;name: String,
          <br />
          &#9;gruendung: Number,
          <br />
          &#9;mitglieder: [String],
          <br />
          &#9;genre: String
          <br />
          &#125; );
          <br />
          <br />
          const Band = mongoose.model('Band', bandSchema, 'bands');
          <br />
          <br />
          const albumSchema = new mongoose.Schema( &#123;
          <br />
          &#9;titel: String,
          <br />
          &#9;jahr: Number,
          <br />
          &#9;band: &#123;
          <br />
          &#9;&#9;type: mongoose.Schema.Types.ObjectId,
          <br />
          &#9;&#9;ref: 'Band'
          <br />
          &#9;&#125;
          <br />
          &#125; );
          <br />
          <br />
          const Album = mongoose.model('Album', albumSchema, 'Alben');
          <br />
          <br />
          mongoose
          <br />
          &#9;.connect('mongodb://localhost:27017/ref-demo')
          <br />
          &#9;.then(() =&gt; console.log('Mit MongoDB verbunden'))
          <br />
          &#9;.catch(console.log) // .catch((err) =&gt; console.log(err))
          <br />
          <br />
          const createBand = async (band) =&gt; &#123;
          <br />
          &#9;try &#123;
          <br />
          &#9;&#9;const result = await Band.create(band);
          <br />
          &#9;&#9;console.log(result);
          <br />
          &#9;&#125; catch(err) &#123;
          <br />
          &#9;&#9;console.log(err);
          <br />
          &#9;&#125; finally &#123;
          <br />
          &#9;&#9;mongoose.disconnect();
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          const abba = &#123;
          <br />
          &#9;name: 'ABBA',
          <br />
          &#9;gruendung: 1972,
          <br />
          &#9;mitglieder: ['Agnetha', 'Björn', 'Benny', 'Anni-Frid'],
          <br />
          &#9;genre: 'Pop',
          <br />
          &#125;
          <br />
          <br />
          // createBand(abba);
          <br />
          <br />
          const createAlbum = async (album) =&gt; &#123;
          <br />
          &#9;try &#123;
          <br />
          &#9;&#9;const result = await Album.create(album);
          <br />
          &#9;&#9;console.log(result);
          <br />
          &#9;&#125; catch(err) &#123;
          <br />
          &#9;&#9;console.log(err);
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          const waterloo = &#123;
          <br />
          &#9;titel: 'Waterloo',
          <br />
          &#9;jahr: 1974,
          <br />
          &#9;band: '659555b8aa3f0c8059f7e2c3',
          <br />
          &#125;
          <br />
          <br />
          const abbaGold = &#123;
          <br />
          &#9;titel: 'ABBA Gold',
          <br />
          &#9;jahr: 1992,
          <br />
          &#9;band: '659555b8aa3f0c8059f7e2c3',
          <br />
          &#125;
          <br />
          <br />
          await Promise.all([createAlbum(waterloo), createAlbum(abbaGold)]);
          <br />
          mongoose.disconnect()
        </code>
      </pre>
    </article>
  );
};
