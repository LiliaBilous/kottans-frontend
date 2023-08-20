window.addEventListener("DOMContentLoaded", () => {
  const sideMenuUl = document.querySelector(".side-menu__navigation-list");
  const contentBlock = document.querySelector(".main__content-block");
  const menuLink = document.querySelector(".side-menu__navigation-item");
  let mountains = [];
  
  function menu_template({ id, title }) {
    return `<li class="side-menu__navigation-item"><button class="side-menu__link" data-id=${id}>${title}</button></li>\n`;
  }
  function contentTemplate({
    imgSrc,
    imgAlt,
    title,
    hight,
    country,
    description,
  }) {
    return ` 
    <div class="content__img-holder">
      <img src="${imgSrc}" alt="${imgAlt}" class="content-img" />
    </div>
    <div class="content-text">
      <h2 class="content-title">${title}</h2>
      <div class="content__info">
        <div class="content__param">Висота:</div>
        <div class="content__value">${hight}</div>
      </div>
      <div class="content__info">
        <div class="content__param">Розташування:</div>
        <div class="content__value">${country}</div>
      </div>
      <p class="content__description">${description}</p>
    </div> 
    `;
  }

  function renderMenu(mountainItems) {
    let menuItems = mountainItems.reduce(
      (accumulator, element) => accumulator + menu_template(element),
      ""
    );
    sideMenuUl.insertAdjacentHTML("beforeend", menuItems);
  }

  function renderContent(mountain) {
    contentBlock.textContent = '';
    contentBlock.insertAdjacentHTML("beforeend", contentTemplate(mountain));
  }

  function displaySelectedMountain (event) {
    let mountainId = event.target.getAttribute("data-id");
    let selectedMountain = mountains.find((el) => el.id == mountainId);
    renderContent(selectedMountain);
  }
  sideMenuUl.addEventListener("click", displaySelectedMountain)


  fetch("/js/mountains.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      mountains = data;
      renderMenu(mountains);
      renderContent(mountains[0]);
    })
    .catch((error) => console.log(error));
});
