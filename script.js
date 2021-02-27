var triagram = document.querySelector("div.triagram");
var triagramLines = Array.prototype.slice.call(triagram.children);
var navLinks = document.querySelector("div.navLinks");

triagram.addEventListener("click", () => {

    if (triagram.classList.length === 1) {
        triagram.classList.add("exitMenu");
        navLinks.style.animation = "menuIn";
        navLinks.style.animationDuration = "0.5s";
        navLinks.style.right = "0%";
        for (let x = 0; x < triagramLines.length; x++) {
            triagramLines[x].classList.add("exitMenu");

        }
    } else if (triagram.classList.length === 2) {
        triagram.classList.remove("exitMenu");
        navLinks.style.animation = "menuOut";
        navLinks.style.animationDuration = "0.5s";
        navLinks.style.right = "-60%";
        for (let x = 0; x < triagramLines.length; x++) {
            triagramLines[x].classList.remove("exitMenu");
        }
    }
});

/*########MAP########*/

const zoomInst = document.getElementById("zoomInstructions");
const mapCont = document.getElementById("map");
mapboxgl.accessToken = 'pk.eyJ1Ijoic3Nsb25saWZ5IiwiYSI6ImNrbGkwdWJmdjBjdTkybnF6OXR0aWhtcDYifQ.lGqspfuMKZx06yhcrTd2Zg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-0.134295, 51.505145], // starting position [lng, lat]
    zoom: 15 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();


var marker = new mapboxgl.Marker()
    .setLngLat([-0.134295, 51.505145])
    .addTo(map);

window.addEventListener("keydown", (event) => {
    if (event.key === "Control") {
        return map.scrollZoom.enable();
    }
});
window.addEventListener("keyup", (event) => {
    if (event.key === "Control") {
        return map.scrollZoom.disable();
    }
});

mapCont.addEventListener("mouseover", (event)=>{
    zoomInst.style.display = "none";
});

mapCont.addEventListener("mouseleave", (event)=>{
    zoomInst.style.display = "flex";
})


/*#####Get in touch#####*/

var checkBox = document.querySelector("div.checkBox input");
var checkBoxText = document.querySelector("div.checkBox p");
checkBoxText.addEventListener("click", ()=>{
  checkBox.click(); 
})

