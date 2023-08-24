window.addEventListener("DOMContentLoaded", () => {
  const sideMenuUl = document.querySelector(".side-menu__navigation-list");
  const contentBlock = document.querySelector(".main__content-block");
  const burgerBtn = document.querySelector(".header__burger");
  const sideMenuBurger = document.querySelector(".content__side-menu");
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

  function displaySelectedMountain (mountainId) {
    let selectedMountain = mountains.find((el) => el.id == mountainId);
    renderContent(selectedMountain);
  }

  sideMenuUl.addEventListener("click", (event) => {
    let mountainId = event.target.getAttribute("data-id");
    displaySelectedMountain(mountainId);
    
    document.body.classList.remove("lock");
    burgerBtn.classList.remove("active");
    sideMenuBurger.classList.remove("active");
  })

  burgerBtn.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    burgerBtn.classList.toggle("active");
    sideMenuBurger.classList.toggle("active");
  })
  
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
