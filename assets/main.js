//------------------- aqui tenemos todo el codigo para hacer un slider automatico

let contenedor = document.querySelector(".contenedor")
let slider = document.querySelector(".containerSlider");
let sliderIndividual = document.querySelectorAll('.slider');
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
let widthPC = 416;
let sliderActive = true;
console.log(contenedor)

console.log("slider", slider, "sliderIndividual", sliderIndividual, "contador", contador, "width", width, "intervalo", intervalo)

// esete metodo ara que se haga un calculo del ancho de la pantalla
window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})


function slides() {

    slider.style.transform = "translate(" + (-width * contador) + "px)";
    console.log('this is width', width)
    /*slider.style.transform = `translate(-${width}*${contador}px)`*/
    slider.style.transition = "transform 1s"
    contador++;
    if (width === widthPC && contador == sliderIndividual.length - 3) {
        contador = 0;
    }

    if (contador == sliderIndividual.length) {

        setTimeout(function () {
            slider.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 0;
        })

    }
}

if (!sliderActive) {
    console.log('no slider, clickme')
} else {
    setInterval(function () {
        slides()
    }, intervalo);
}
if (!(width == widthPC)) {
    contenedor.addEventListener('onmousedown', function () {
        sliderActive = false;
        contenedor.style.overflow = "scroll";
    })
} else {

}




