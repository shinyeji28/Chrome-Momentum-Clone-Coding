const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    h1.style.color = "blue";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";  // body, head. title handling
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS on WIFI");
}
function handleWindowOnline(){
    alert("ALL GOOD");
}
// 아래 두개의 event는 같은 것임
h1.addEventListener("click", handleTitleClick);// removeEventListener이 있음으로 이것을 더 선호
h1.onclick = handleTitleClick;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);   //wifi event
window.addEventListener("online", handleWindowOnline);

