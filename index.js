/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

document.querySelector(".close-button").addEventListener("click", (event) => {
    const element = document.querySelector(".lightbox");
    element.style.display = "none";

    const element1 = document.querySelector(".overlay");
    element1.style.display = "none";
});

document.querySelector(".open-button").addEventListener("click", (event) => {
    const element = document.querySelector(".lightbox");
    element.style.display = "flex";

    const element1 = document.querySelector(".overlay");
    element1.style.display = "block";

    const redLine = document.querySelector(".red-line");
    const totalSteps = 128;
    const totalDuration = 3000;
    const maxWidth = 512;
    let step = 0;

    redLine.style.width = "0px";

    const timer = setInterval(() => {
        step += 1;
        redLine.style.width = (step * maxWidth) / totalSteps + "px";

        if (step >= totalSteps) {
            clearInterval(timer);
        }
    }, totalDuration / totalSteps);
});
