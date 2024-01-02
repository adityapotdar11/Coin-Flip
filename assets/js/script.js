const coin = [1, 2];
const coinImages = {
    1: "head.svg",
    2: "tail.svg",
};
function flipCoin() {
    document.getElementById("image-section").innerHTML = "";
    try {
        const random = Math.floor(Math.random() * Object.keys(coin).length);

        let path = "./assets/images/" + coinImages[coin[random]];

        document.getElementById(
            "image-section"
        ).innerHTML = `<img src="${path}" width="100px" alt="${
            coinImages[coin[random]]
        }"/>`;
    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
}

function reset() {
    document.getElementById("image-section").innerHTML = "";
}
