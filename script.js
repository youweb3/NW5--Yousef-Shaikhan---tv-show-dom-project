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
    
    let episodeListItem = document.createElement ("li");
    let h3Element = document.createElement("h3");
    let image = document.createElement("img");
    let paragraph = document.createElement("p");
    episodeListItem.innerText =`${episode.name}`
    h3Element.textContent = `S0${episode.season}E${episode.number >= 10 ? episode.number:"0"+ episode.number}`;
    image.src=`${episode.image.medium}`
    paragraph.innerHTML = episode.summary;

    
    episodeListItem.appendChild(h3Element);
    episodeListItem.appendChild(image);
    episodeListItem.appendChild(paragraph);
    episodeListContaneir.appendChild(episodeListItem);
    

  }
  rootElem.appendChild(episodeListContaneir);
 

}


// search
const form=document.getElementById("form");
  const searchInput = document.getElementById("search");
  let episodeList=getAllEpisodes();

  searchInput.addEventListener("keyup",(e)=>{
    let value =e.target.value;
    let html = "";
    episodeList.forEach((element)=>{
      if (element.name.toLowerCase().includes(value) || element.summary.toLowerCase().includes(value)) {
         html += `<div>
        <h3>${element.name}</h3>
        <img src=${element.image.medium}>
        <p>${element.summary}</p>
        </div>`;

      }
    })

   rootElem.innerHTML = html;
  })



//dropdown list
  const searchEpisod= getAllEpisodes();
  const select = document.getElementById("movies");

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
//drop down search
     select.addEventListener("change", () => {
       let dropValue = select.value;
       let html = "";
      searchEpisod.forEach((episod)=>{
        if (episod.name.includes(dropValue)) {
          html += `<div>
        <h3>${episod.name}</h3>
        <img src=${episod.image.medium}>
        <p>${episod.summary}</p>
        </div>`;
        }
      })

     rootElem.innerHTML = html;
   });


window.onload = setup;
