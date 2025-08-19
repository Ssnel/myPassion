const photos = ["assets/fluffy_pomeriaan_in_cartoon_stijl.png"];
const gallery = document.getElementById("gallery");

const likedPhotos = JSON.parse(localStorage.getItem("likedPhotos") || "{}");

photos.forEach(photo => {
  const container = document.createElement("div");
  container.classList.add("photo-container");

  const img = document.createElement("img");
  img.src = `assets/${photo}`;
  img.alt = photo;

  
  const likeBtn = document.createElement("span");
  likeBtn.classList.add("like-btn");
  likeBtn.innerHTML = "♥";

  
  if (likedPhotos[photo]) {
    likeBtn.style.color = "pink";
  } else {
    likeBtn.style.color = "grey";
  }

  
  likeBtn.addEventListener("click", () => {
    likedPhotos[photo] = !likedPhotos[photo]; 
    likeBtn.style.color = likedPhotos[photo] ? "pink" : "grey";
    localStorage.setItem("likedPhotos", JSON.stringify(likedPhotos));
  });

  container.appendChild(img);
  container.appendChild(likeBtn);
  gallery.appendChild(container);
});