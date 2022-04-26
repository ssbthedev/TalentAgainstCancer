window.addEventListener('resize', checkWidth);
window.onload = () => {
    onLoad();
}
console.log("I am here")

function checkWidth() {
    console.log("Width")
    const navbarLinks = document.getElementById("navLinks");
    if (document.documentElement.clientWidth > 650) {
        navbarLinks.style.display = "flex";
    }
}  

document.onclick = () => {
    onLoad();
}

function onLoad() {
    console.log("DLoa")
    const toggleButton = document.getElementById("hamMenu");
    const navbarLinks = document.getElementById("navLinks");
    toggleButton.addEventListener('click', () => {
        if(navbarLinks.style.display === "none"){
            navbarLinks.style.display = "flex !important";
        }else{
            navbarLinks.style.display = "none !important";
        }
    })
    checkRef()
}

function onClick() {
    console.log("HIII")
    const navbarLinks = document.getElementById("navLinks");
    console.log(navbarLinks)
    console.log(navbarLinks.style.display)
    if(navbarLinks.style.display == "none" || navbarLinks.style.display == ""){
        console.log("Flexed");
        navbarLinks.style.display = "flex";
    }else{
        console.log("Noned");
        navbarLinks.style.display = "none";
    }

}
    
function checkRef() {
    var url = new URL(window.location.href);
    if (url.searchParams.get('references') == 'true') {
        document.getElementById('container').scrollTo(0, document.documentElement.clientHeight * 4);
    }
}

function references() {
    var url = new URL(window.location.href);
    url.searchParams.set('references', 'true');
    window.location = url;
}
