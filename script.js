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
  episodeListContaneir.innerHTML = "";
  for (let episode of episodeList) {
    
    let episodeListItem = document.createElement ("li");
    let title = document.createElement("h1");
    episodeListItem.setAttribute("id", episode.name);
    let h3Element = document.createElement("h3");
    let image = document.createElement("img");
    let paragraph = document.createElement("p");
    title.innerText =`${episode.name}`
    h3Element.textContent = `S0${episode.season}E${episode.number >= 10 ? episode.number:"0"+ episode.number}`;
    image.src=`${episode.image.medium}`
    paragraph.innerHTML = episode.summary;

    episodeListItem.appendChild(title);
    episodeListItem.appendChild(h3Element);
    episodeListItem.appendChild(image);
    episodeListItem.appendChild(paragraph);
    episodeListContaneir.appendChild(episodeListItem);
    

  }
  rootElem.appendChild(episodeListContaneir);
 

}

function handleChosenEpisode(event) {
  let opts = event.target.selectedOptions;
  if (opts.length !== 1) {
      return;
  }
  let id = opts[0].value;
  document.location.assign(`#${id}`);
}
//dropdown list///
  const searchEpisod= getAllEpisodes();
  const select = document.getElementById("movies");
select.onchange = handleChosenEpisode;
   searchEpisod.forEach((episod) => {
     const option = document.createElement("option");

     option.setAttribute("value", episod.name);
     select.appendChild(option);

     if (episod.number < 10 && episod.season < 10) {
       option.textContent = `S0${episod.number}E0${episod.season}-${episod.name}`;
     } else {
       option.textContent = `S${episod.number}E${episod.season}-${episod.name}`;
     }
   });

// search////
const searchElement = document.getElementById("search");
searchElement.onchange = onSearchHandler;
function onSearchHandler() {
  const allEpisodes = getAllEpisodes();
let filterList = allEpisodes.filter((episod) => {
  return episod.name.includes(searchElement.value); 
});
makePageForEpisodes (filterList);
}

window.onload = setup;
