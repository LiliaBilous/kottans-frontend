window.addEventListener("DOMContentLoaded", () => {

  const subject = document.querySelector(".side-menu__navigation-list");

  fetch('/js/mountains.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      function renderMenu() {
        let mountTitle = '';
        let mountId = 0;
        for(let i=0; i<data.length; i++) {
          mountTitle = data[i].title ;
          mountId = data[i].id;
          
          subject.insertAdjacentHTML(
            "beforeend",
            `<li class="side-menu__navigation-item">
                <button class="side-menu__link" data-id=${mountId}>${mountTitle}</button>
            </li>`
          );
        }
      }
      renderMenu();
    });

    
  
  
  
   

  // template = ` 
  // <div class="content__img-holder">
  //   <img src="${imgSrc}" alt="${imgAlt}" class="content-img" />
  // </div>
  // <div class="content-text">
  //   <h2 class="content-title">${title}</h2>
  //   <div class="content__info">
  //     <div class="content__param">Висота:</div>
  //     <div class="content__value">${info}/div>
  //   </div>
  //   <div class="content__info">
  //     <div class="content__param">Розташування:</div>
  //     <div class="content__value">${subtitle}</div>
  //   </div>
  //   <p class="content__description">${description}</p>
  // </div> `;
  // template = ` 
  //   <li class="side-menu__navigation-item">
  //     <button class="side-menu__link" data-id=${id}>${title}</button>
  //   </li>`
});
