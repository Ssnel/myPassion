const fotos = ["assets/fluffy_pomeriaan_in_cartoon_stijl.png"];
const gallery = document.getElementById("gallery");

const likedPhotos = JSON.parse(localStorage.getItem("likedPhotos") || "{}");

fotos.forEach((src) => {
  const container = document.createElement("div");
  container.classList.add("container");

  const img = document.createElement("img");
  img.src = src;
  img.alt = "foto";

  const likeBtn = document.createElement("i");
  likeBtn.classList.add("fa-heart", "fa-regular", "like-btn");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("fa-solid");
    likeBtn.classList.toggle("fa-regular");
    likeBtn.classList.toggle("liked");

    likeBtn.classList.remove("pop");
    void likeBtn.offsetWidth;
    likeBtn.classList.add("pop");
  });

  container.appendChild(img);
  container.appendChild(likeBtn);
  gallery.appendChild(container);
});
