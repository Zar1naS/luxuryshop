



document.addEventListener("DOMContentLoaded", function(){
    brasletlar.forEach(passs =>{
      let row = document.querySelector(".cardsContainer")
      let col3 = document.createElement("div")
      col3.classList.add("col6")
      col3.innerHTML = `
      <div class="containerr">
      <div class="panel">
        <div class="ring">
          <div class="cardd card1"><img src="${passs.img}" alt="">
          </div>
          <div class="borderr">
            <p class="title"></p>
            <div class="slide">
              <h6 class="para">${passs.name}</h6>
              <div class="line">
                <h6 class="para">${passs.price_uzb}</h6>
              </div>
              <div class="line">
                <h6 class="para">${passs.price_evro}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `

      row.append(col3)
    })
})
