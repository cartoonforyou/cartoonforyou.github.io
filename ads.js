// إضافة الإعلان الأول في الهيدر (Header)
document.addEventListener("DOMContentLoaded", function() {
    let headerAd = document.createElement("script");
    headerAd.src = "https://kulroakonsu.net/88/tag.min.js";
    headerAd.setAttribute("data-zone", "130229");
    headerAd.setAttribute("async", "true");
    document.head.appendChild(headerAd);
});

// إضافة إعلان بين المحتوى
document.addEventListener("DOMContentLoaded", function() {
    let contentAd = document.createElement("div");
    contentAd.className = "ad-container";
    contentAd.innerHTML = `<script src="https://kulroakonsu.net/88/tag.min.js" data-zone="130230" async data-cfasync="false"></script>`;
    
    let mainContent = document.querySelector("main");
    if (mainContent) {
        mainContent.insertBefore(contentAd, mainContent.children[2]); // ضع الإعلان بعد العنصر الثاني في <main>
    }
});

// إضافة إعلان في الفوتر (Footer)
document.addEventListener("DOMContentLoaded", function() {
    let footerAd = document.createElement("script");
    footerAd.src = "https://kulroakonsu.net/88/tag.min.js";
    footerAd.setAttribute("data-zone", "130231");
    footerAd.setAttribute("async", "true");

    let footer = document.querySelector("footer");
    if (footer) {
        footer.appendChild(footerAd);
    }
});

