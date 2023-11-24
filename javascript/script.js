function scrollDown(div) {
    const targetDiv = document.getElementById(div)
    targetDiv.scrollIntoView({ behavior: "smooth" });
}