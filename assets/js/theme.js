/**
 * @license 
 * @author <yaqub.babayev.1996@gmail.com>
 */

"use strict";

const/** {NodeElement} */ $HTML = document.documentElement;
const/** {Boolean} */isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else{
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

let /**{Boolean} */ isPressed = false;

const changeTheme = function () {

}

window.addEventListener("load",function () {
    const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
    $themeBtn.addEventListener("click",changeTheme);
});
 