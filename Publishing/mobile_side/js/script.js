window.onload = function() {
/*사이드 메뉴 열기*/
  document.querySelector(".show_menu").onclick = function () {
    const sideMenu = document.querySelector(".side_menu");
    sideMenu.classList.add("on");
  };

/*사이드 메뉴 닫기 */
  document.querySelector(".close_menu").onclick = function() {
  const sideMenu = document.querySelector(".side_menu");
  sideMenu.classList.remove("on");
  };
};