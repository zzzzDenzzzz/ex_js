const api = "https://jsonplaceholder.typicode.com";
let _photos = [];

async function getPhotos() {
  try {
    const response = await fetch(api + "/photos");
    const photos = await response.json();

    _photos = photos;

    loadSlides(100);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  try {
    await getPhotos();
  } catch (error) {
    console.error(error);
  }
})();

function loadSlides(countSlides) {
  let contentDiv = document.createElement("div");
  contentDiv.className = "_content";

  let sliderDiv = document.createElement("div");
  sliderDiv.className = "slider autoplay";

  for (let i = 0; i < Math.min(countSlides, _photos.length); i++) {
    let slideDiv = document.createElement("div");
    slideDiv.innerHTML = `<img src="${_photos[i].thumbnailUrl}">`;

    sliderDiv.appendChild(slideDiv);
  }

  contentDiv.appendChild(sliderDiv);

  var parentElement = document.querySelector("#_photos");

  if (parentElement) {
    parentElement.appendChild(contentDiv);

    $(".autoplay").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
    });
  }
}
