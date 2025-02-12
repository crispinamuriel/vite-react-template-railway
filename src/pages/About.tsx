import { Info } from '../data/data'

interface InfoEntry {
    title: string;
    content: string;
    imgUrl: string;
    id?: string | number; 
  }

export default function About() {
    return (
        <div id="container" className="row">
        <div>
          <img id="photo" className="circle sticky" src="/JennVandeKrol.jpg" alt="Jenn Muriel" />
        </div>
        <div id="stories" className="column quotes">
        {Info.map((infoEntry: InfoEntry) => (
            <div className="story opacity card" key={infoEntry.id}>
              <div
                className="story opacity box story-height"
                key={infoEntry.id}
              >
                <img src={infoEntry.imgUrl} width="500" />
              </div>
              <a>
                <h3>{infoEntry.title}</h3>
              </a>
              <a>
                <p>{infoEntry.content}</p>
              </a>
              <hr />
            </div>
          ))}
      </div>
      </div>
    )
  }
  