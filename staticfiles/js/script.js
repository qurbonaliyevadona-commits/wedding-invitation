// ==================================================
// TAKLIFNOMANI OCHISH
// ==================================================

const preloader = document.getElementById("preloader");
const openInvitation = document.getElementById("openInvitation");

if (openInvitation && preloader) {

    openInvitation.addEventListener("click", function () {

        preloader.classList.add("hide");

    });

}


// ==================================================
// COUNTDOWN
// ==================================================
const weddingDate = new Date("September 21, 2026 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==================================================
// GALEREYA
// ==================================================

const galleryTrack =
    document.getElementById("galleryTrack");

const next =
    document.getElementById("next");

const prev =
    document.getElementById("prev");


if (galleryTrack && next && prev) {

    next.addEventListener("click", function () {

        galleryTrack.scrollBy({

            left: 300,

            behavior: "smooth"

        });

    });


    prev.addEventListener("click", function () {

        galleryTrack.scrollBy({

            left: -300,

            behavior: "smooth"

        });

    });

}


// ==================================================
// RSVP
// ==================================================

const rsvpForm =
    document.getElementById("rsvpForm");

const toast =
    document.getElementById("toast");


if (rsvpForm && toast) {

    rsvpForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            if (name === "") {

                return;

            }


            toast.textContent =
                `Rahmat, ${name}! Tashrifingiz biz uchun qadrli ♡`;


            toast.classList.add("show");


            rsvpForm.reset();


            setTimeout(function () {

                toast.classList.remove("show");

            }, 3500);

        }
    );

}


// ==================================================
// MUSIC
// ==================================================

const music =
    document.getElementById("weddingMusic");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;


if (music && musicBtn) {

    musicBtn.addEventListener(
        "click",
        function () {

            if (musicPlaying) {

                music.pause();

                musicBtn.textContent = "♪";

                musicPlaying = false;

            }

            else {

                music.play()
                    .then(function () {

                        musicBtn.textContent = "Ⅱ";

                        musicPlaying = true;

                    })
                    .catch(function () {

                        alert(
                            "Musiqa fayli hali qo'shilmagan."
                        );

                    });

            }

        }
    );

}


// ==================================================
// SCROLL ANIMATION
// ==================================================

const sections =
    document.querySelectorAll(".section");


if (sections.length > 0) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    sections.forEach(function (section) {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(30px)";

        section.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(section);

    });

}


// ==================================================
// MOBILE MENU
// ==================================================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("active");

        }
    );


    // Menu link bosilganda menyuni yopish

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("active");

            }
        );

    });

}