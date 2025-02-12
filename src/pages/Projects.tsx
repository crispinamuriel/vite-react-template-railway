import { ProjectsData } from "../data/data";

export default function Projects() {
    return (
        <div id="stories" className="column">
          <h2 className="shadow">Technical Projects</h2>
          {ProjectsData.map(story => (
            <div className="story story2 opacity" key={story.id}>
              <hr />
              <a
                href={story.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="centered solid">
                  <img src={story.imageUrl} width="100" />
                </div>
                <h3 id="project">{story.title}</h3>
              </a>
              <span id="story_content">{story.content}</span>
    
              {story.gitHubUrl ? (
                <div id="info_div">
                  <a
                    href={story.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <div>
                      <span id="source">View Source Code</span>
                      <img
                        id="code"
                        src="https://cdn.iconscout.com/icon/free/png-512/code-336-830581.png"
                        width="30"
                      />
                    </div>
                  </a>
                </div>
              ) : (
                <div className="space" />
              )}
              <hr />
            </div>
          ))}
        </div>
      )
}