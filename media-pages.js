const pageType = document.body.dataset.page;

function createMediaCard(element, fileName) {
  const card = document.createElement("article");
  card.className = "media-item";
  card.appendChild(element);

  const label = document.createElement("p");
  label.textContent = fileName;
  card.appendChild(label);

  return card;
}

if (pageType === "branding" || pageType === "social-media") {
  const uploadInput = document.getElementById("upload-input");
  const gallery = document.getElementById("gallery");

  if (uploadInput && gallery) {
    uploadInput.addEventListener("change", (event) => {
      const files = Array.from(event.target.files || []);

      files.forEach((file) => {
        const fileUrl = URL.createObjectURL(file);

        if (pageType === "branding") {
          const img = document.createElement("img");
          img.src = fileUrl;
          img.alt = file.name;
          gallery.appendChild(createMediaCard(img, file.name));
        }

        if (pageType === "social-media") {
          const video = document.createElement("video");
          video.src = fileUrl;
          video.controls = true;
          video.preload = "metadata";
          gallery.appendChild(createMediaCard(video, file.name));
        }
      });

      uploadInput.value = "";
    });
  }
}

if (pageType === "ads-marketing") {
  const adsForm = document.getElementById("ads-form");
  const adsList = document.getElementById("ads-list");
  const adTitle = document.getElementById("ad-title");
  const adText = document.getElementById("ad-text");
  const adImage = document.getElementById("ad-image");

  if (adsForm && adsList && adTitle && adText && adImage) {
    adsForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const card = document.createElement("article");
      card.className = "ad-item";

      if (adImage.files && adImage.files[0]) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(adImage.files[0]);
        img.alt = adTitle.value.trim() || "Marketing item image";
        card.appendChild(img);
      }

      const title = document.createElement("h3");
      title.textContent = adTitle.value.trim();
      title.style.marginTop = "8px";
      title.style.fontWeight = "500";
      title.style.fontSize = "1rem";
      card.appendChild(title);

      const text = document.createElement("p");
      text.textContent = adText.value.trim();
      card.appendChild(text);

      adsList.prepend(card);
      adsForm.reset();
    });
  }
}
