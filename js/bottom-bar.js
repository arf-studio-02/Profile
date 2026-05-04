// 🔥 SMOOTH ACTIVE STATE (SAFE)
const currentPage = window.location.pathname.split("/").pop();
const page = currentPage === "" ? "index.html" : currentPage;

document.querySelectorAll(".nav-item").forEach(item => {
    const link = item.getAttribute("href");

    if (link === page) {
        item.classList.add("active");
    } else {
        item.classList.remove("active");
    }
});
// 🔻 Share button
const toggle = document.getElementById("shareToggle");
const menu = document.getElementById("shareMenu");

if (toggle && menu) {

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("active");
        console.log("CLICKED"); // 🔥 debug
    });

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        menu.classList.remove("active");
    });

}

// 🔻 Share link
const url = window.location.href;

const wa = document.getElementById("waShare");
const fb = document.getElementById("fbShare");
const copy = document.getElementById("copyLink");

if (wa) {
    wa.addEventListener("click", (e) => {
        e.preventDefault();
        const text = "Check this out: " + url;

        window.open(
            `https://wa.me/?text=${encodeURIComponent(text)}`,
            "_blank"
        );
    });
}

if (fb) {
    fb.addEventListener("click", (e) => {
        e.preventDefault();

        const url = window.location.href;

        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            "_blank"
        );
    });
}

if (copy) {
    copy.addEventListener("click", (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(window.location.href);

        alert("Link copied!");
    });
}