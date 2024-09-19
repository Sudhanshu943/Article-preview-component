const shareBtn = document.getElementById("share");
const userArea = document.querySelector(".user-area");
const shareContainer = document.querySelector(".share-container");

function toggleShareContainer() {
  const isMobile = window.innerWidth < 768;
  const isDesktop = window.innerWidth > 768;

  if (isMobile) {
    if (userArea.classList.contains("hide")) {
      userArea.classList.remove("hide");
      shareContainer.style.display = "none";
      userArea.appendChild(shareBtn);
    } else {
      userArea.classList.add("hide");
      shareContainer.style.display = "flex";
      shareContainer.appendChild(shareBtn);
    }
  } else if (isDesktop) {
    if (
      shareContainer.style.display === "none" ||
      shareContainer.style.display === ""
    ) {
      shareContainer.style.display = "flex";
      shareBtn.appendChild(shareContainer);
    } else {
      shareContainer.style.display = "none";
      shareBtn.appendChild(shareContainer);
    }
  } else {
    if (
      shareContainer.style.display === "none" ||
      shareContainer.style.display === ""
    ) {
      shareContainer.style.display = "flex";
    } else {
      shareContainer.style.display = "none";
    }
  }
}

shareBtn.addEventListener("click", toggleShareContainer);
