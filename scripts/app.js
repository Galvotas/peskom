const tourcardsWrapper = document.querySelector('.tour__cards')
const menuModal = document.querySelector('.menu__modal')
const date = document.querySelector('#date')
const textarea = document.querySelector('.text__area').innerHTML = ''
const burger = document.querySelector('.hamburger')
const modalLinks = menuModal.querySelectorAll('#modalLink')


const d = new Date().getFullYear()


date.innerHTML = d

const closeMenu = () => {
  menuModal.classList.remove('toggle__modal')
  burger.classList.remove('is-active')
}

modalLinks.forEach(link => link.addEventListener('click', closeMenu))

$("#contactForm").on("submit", async function(e) {

    e.preventDefault(); //Prevents default submit
    var form = $(this);
    var post_url = form.attr("action");
    var post_data = form.serialize(); //Serialized the form data for process.php
    $("#loader", form).html(
      '<img src="../img/loader.gif" /> Prašome palaukti...'
    );
    $.ajax({
      type: "POST",
      url: "scripts/process.php", // Your form script
      data: post_data,
      success: function(msg) {
        $("#mailResponseText").html(msg)
        $('#submit').prop('disabled', true)
      }
    });
  
  });


const data = [
    {    
        id: 1,
        head: 'Vertybių žygis',
        body: 'Žygio metu išsikristalizuosime arba pasitvirtinsime esamus darbo principus (vertybes) organizacijoje.',
        bottom: ['5-30 dalyvių', 'Adaptuota programa bei užduotys:', 'Darbo principų aptarimas;', 'Vertybių išsikristalizavimas;', 'Įmonės kultūros stiprinimas.', 'Specialus maršrutas', 'Profesionalus konsultantas/vedlys žygio metu', 'Moderuojamos diskusijos "open space" principu', 'Tęstinės sesijos komandai', 'Pagal poreikį:', 'Kariškas maisto davinys', 'Pagalbinė komanda', 'Žygio atributika']
    },
    {
        id: 2, 
        head: 'Komandinis žygis',
        body: 'Tai smagi komandos bendradarbiavimo treniruotė. Žygio metu žaisminga forma padėsime atrasti savo asmeninį indėlį komandoje bei sustiprinti bendrystės jausmą.',
        bottom: ['10-100 dalyvių', 'Adaptuota programa bei užduotys:', 'Asmeninės atsakomybės komandoje paieškos;', 'Tarpasmeninės komunikacijos stiprinimas;', 'Bendradarbiavimo skatinimas;', 'Tarpusavio santykių stiprinimas.', 'Specialus maršrutas', 'Profesionalus konsultantas/vedlys žygio metu', 'Moderuojamos diskusijos "open space" principu', 'Tęstinės sesijos komandai', 'Pagal poreikį:', 'Kariškas maisto davinys', 'Pagalbinė komanda', 'Žygio atributika']
    },
    {
        id: 3,
        head: 'Strateginis žygis',
        body: 'Žygio metu išsikristalizuosime arba pasitvirtinsime įmonės misiją bei viziją ir strategines organizacijos kryptis.',
        bottom: ['5-20 dalyvių', 'Adaptuota programa bei užduotys', 'SSGG analizė;', 'Misijos/vizijos revizija;', 'Strateginių krypčių nusistatymas.', 'Specialus maršrutas', 'Profesionalus konsultantas/vedlys žygio metu', 'Moderuojamos diskusijos "open space" principu', 'Pagal poreikį:', 'Kariškas maisto davinys', 'Palydinčios sesijos komandai']
    }
]


burger.addEventListener('click', (e) => {
    menuModal.classList.toggle('toggle__modal')
    burger.classList.toggle('is-active')
})



window.addEventListener('DOMContentLoaded', () => {
    data.map((tour, i) => {
        const {id, head, body, bottom} = tour
        const n = document.createElement('div')
        const cardBtn = document.createElement('button')
        n.className = `col-sm-12 col-md-6 col-lg-4 pb-3`
           n.innerHTML = `
           <div class="tour__card">
            <h3>${head}</h3>
            <p class="body__text">${body}</p>
            ${bottom.map(el => {
              if(el === 'Pagal poreikį:') {
                  return `
              <div class="tour__info">
              <p class="line__text if__neccessary__line">
                  ${el}
              </p>
            </div>
              `  
              } else {
               return `
                <div class="tour__info">
                    <span class="check__icon"></span>
                <p class="line__text">
                    ${el}
                </p>
              </div>
                `  
              }
            }).join('')}
            <a class="tour__contact__btn" href="#contact">Susisiekti</a>
            </div>
            `
            tourcardsWrapper.appendChild(n)
    })
})

