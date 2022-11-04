//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  console.log(episodeList)
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  const episodeListContaneir = document.createElement("ul");
  
  for (let episode of episodeList) {
    
    // let container = document.createElement("div");
    let episodeListItem = document.createElement ("li");
    let h3Element = document.createElement("h3");
    let image = document.createElement("img");
    let paragraph = document.createElement("p");
    episodeListItem.innerText =`${episode.name}`
    h3Element.textContent = `S0${episode.season}E${episode.number >= 10 ? episode.number:"0"+ episode.number}`;
    image.src=`${episode.image.medium}`
    paragraph.innerHTML = episode.summary;

    
   
    // episodeListItem.appendChild(episodeListItem);
    episodeListItem.appendChild(h3Element);
    episodeListItem.appendChild(image);
    episodeListItem.appendChild(paragraph);
    episodeListContaneir.appendChild(episodeListItem);
    

  }
  rootElem.appendChild(episodeListContaneir);
 

}

window.onload = setup;
