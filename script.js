document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var hearts = document.querySelectorAll(".floatingHeart");

    function restartHearts() {
        hearts.forEach((heart) => {
            heart.style.animation = "none";
            void heart.offsetWidth;
            heart.style.animation = "";
        });
    }

    function toggleEnvelope() {
        if (envelope.classList.contains("open")) {
            envelope.classList.remove("open");
            envelope.classList.add("close");
        } else {
            envelope.classList.remove("close");
            envelope.classList.add("open");
            setTimeout(restartHearts, 600);
        }
    }

    envelope.addEventListener("click", toggleEnvelope);
});
