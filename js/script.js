
// ******************* Button top up ***********************//
const toTop = document.querySelector(".to-top");
window.onscroll = function () {
  //  console.log(this.scrollY);
  if (this.scrollY >= 800) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}
// ******************* End Button top up *****************//
