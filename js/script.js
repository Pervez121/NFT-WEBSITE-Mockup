// const artistSec = [...document.querySelectorAll('.artsts-sec')];
// const backBtn =  [...document.querySelectorAll('#back-btn')];
// const nextBtn =  [...document.querySelectorAll('#next-btn')];


// artistSec.forEach((item, i) => {
//     let containerDimenion = item.getBoundingClientRect();
//     let containerWidth = containerDimenion.width;

//     nextBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })
//     backBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })

// })
new Glider(document.querySelector('.glider'), {
    slidesToshow: 4,
    slidesToScroll: 2,
    arrows:{
        prev: ".glider-prev",
        next:".glider-next"
    }
});

