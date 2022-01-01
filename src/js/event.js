(function init() {
  initBtnToggleNav();
  initResizeNav();
})();

const elNav = document.querySelector("nav");

function initBtnToggleNav() {
  const btnToggleNav = document.querySelector(".btn-toggle-nav");
  const elIconArrow = btnToggleNav.querySelector("i");

  btnToggleNav.addEventListener("click", () => {
    if (elNav.style.maxHeight) {
      elNav.style.maxHeight = null;
      elIconArrow.className = "fas fa-chevron-down";
    } else {
      elNav.style.maxHeight = `${elNav.scrollHeight}px`;
      elIconArrow.className = "fas fa-chevron-up open";
    }
  });
}

function initResizeNav() {
  let timer;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (elNav.style.maxHeight) {
        elNav.style.maxHeight = `${elNav.scrollHeight}px`;
      }
    }, 0);
  });
}
