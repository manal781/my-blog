// إضافة تأثير تحويم على اسم المؤلف
document.addEventListener("DOMContentLoaded", function () {
    const author = document.querySelector(".author");

    author.addEventListener("mouseover", function () {
        this.style.color = "#007bff";
        this.style.cursor = "pointer";
    });

    author.addEventListener("mouseout", function () {
        this.style.color = "#333";
    });
});