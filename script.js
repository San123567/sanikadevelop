// Toggle Read More for Java Developer Section
function toggleReadMore() {
    const extraContent = document.getElementById("extra-java");
    const btn = document.querySelector("#java-service .read-more");

    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        extraContent.style.display = "none";
        btn.textContent = "Read More";
    }
}
