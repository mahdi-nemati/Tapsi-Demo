var $ = document;
var menu = $.getElementById("humenu");
var menuBtn = $.querySelector(".nav--menu");
var introbtn = $.querySelector(".intro-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  introbtn.classList.toggle("intro-btn-ht");
});

var servicesTab = $.querySelectorAll(".tab__items");
servicesTab.forEach((item) => {
  item.addEventListener("click", () => {
    var wanted = $.getElementsByClassName(item.dataset.set);
    // TITLE
    var serTitle = $.getElementById("service-title");
    serTitle.innerHTML = wanted[0].innerHTML;
    // CAPTION
    var serCaption = $.getElementById("service-caption");
    serCaption.innerHTML = wanted[1].innerHTML;
    // picture
    var serImg = $.getElementById("service-img");
    serImg.src = wanted[2].src;
  });
});
