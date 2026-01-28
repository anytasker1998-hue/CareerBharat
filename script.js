// Adstra Ads Auto-Rotation (5 Seconds)
const ads = [
    "<b>Adstra Ad 1:</b> Sabse Pehle Sarkari Naukri Paayein",
    "<b>Adstra Ad 2:</b> Best Books for SSC & Railway",
    "<b>Adstra Ad 3:</b> Join CareerBharat Telegram Group"
];
let adIndex = 0;
function rotateAds() {
    const adElement = document.getElementById('ad-rotator');
    if(adElement) {
        adElement.style.opacity = 0;
        setTimeout(() => {
            adElement.innerHTML = ads[adIndex];
            adElement.style.opacity = 1;
            adIndex = (adIndex + 1) % ads.length;
        }, 500);
    }
}
setInterval(rotateAds, 5000);
