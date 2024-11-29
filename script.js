const gamesList = [
    { 
      title: "Tekken", 
      year: 1994, 
      imageUrl: "https://cdn.dashfight.com/bcf6a9046a9ea4c1070d4aedb2981103c978a704.png" 
    },
    { 
      title: "Minecraft", 
      year: 2009, 
      imageUrl: "https://m.media-amazon.com/images/I/61smNbXSW1L._AC_UF1000,1000_QL80_.jpg" 
    },
    { 
      title: "Elden Ring", 
      year: 2022, 
      imageUrl: "https://pic.clubic.com/v1/images/1934271/raw?fit=smartCrop&width=1200&height=675&hash=e7519a9577a2b7291fa26880bb22bed6740836be" 
    },
    { 
      title: "Street Fighter V", 
      year: 2015, 
      imageUrl: "https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255" 
    },
    { 
      title: "Half Life 2", 
      year: 2004, 
      imageUrl: "https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068" 
    },
    { 
      title: "Skyrim", 
      year: 2011, 
      imageUrl: "https://gaming-cdn.com/images/products/146/orig/the-elder-scrolls-v-skyrim-pc-jeu-steam-europe-cover.jpg?v=1661270991" 
    }
  ];
  
  function writeDom() {
    const container = document.querySelector(".row");
    container.innerHTML = "";
  
    gamesList.forEach((game) => {
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card shadow-sm">
            <img src="${game.imageUrl}" alt="${game.title}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${game.title}</h5>
              <p class="card-text">${game.year}</p>
              <div class="d-flex justify-content-between">
                <button 
                  class="btn btn-outline-primary btn-sm" 
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal"
                  onclick="openModal('View', '${game.title}', '${game.year}')"
                >
                  View
                </button>
                <button 
                  class="btn btn-outline-secondary btn-sm" 
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal"
                  onclick="openModal('Edit', '${game.title}', '${game.year}')"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  function openModal(action, title, year) {
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");
  
    modalTitle.textContent = `${action} - ${title}`;
    modalBody.textContent = `This game was released in ${year}.`;
  }
  
  writeDom();
  