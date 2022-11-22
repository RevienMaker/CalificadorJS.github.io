const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');

const main = document.querySelector('.background');

const submitBtn = document.querySelector('.submit-btn');

let resultado;

btn1.addEventListener('click', ()=>{
    pressBtn(btn1, btn1.textContent);
    btn2.classList.remove("buton-selected");
    btn3.classList.remove("buton-selected");
    btn4.classList.remove("buton-selected");
    btn5.classList.remove("buton-selected");
})
btn2.addEventListener('click', ()=>{
    btn1.classList.remove("buton-selected");
    pressBtn(btn2, btn2.textContent);
    btn3.classList.remove("buton-selected");
    btn4.classList.remove("buton-selected");
    btn5.classList.remove("buton-selected");
})
btn3.addEventListener('click', ()=>{
    btn1.classList.remove("buton-selected");
    btn2.classList.remove("buton-selected");
    pressBtn(btn3, btn3.textContent);
    btn4.classList.remove("buton-selected");
    btn5.classList.remove("buton-selected");
})
btn4.addEventListener('click', ()=>{
    btn1.classList.remove("buton-selected");
    btn2.classList.remove("buton-selected");
    btn3.classList.remove("buton-selected");
    pressBtn(btn4, btn4.textContent);
    btn5.classList.remove("buton-selected");
})
btn5.addEventListener('click', ()=>{
    btn1.classList.remove("buton-selected");
    btn2.classList.remove("buton-selected");
    btn3.classList.remove("buton-selected");
    btn4.classList.remove("buton-selected");
    pressBtn(btn5, btn5.textContent);
})

const pressBtn = (btn, value)=> {
    btn.classList.add("buton-selected");
    let valorBoton = value;

    submitBtn.addEventListener('click', ()=>{
        submitScore(valorBoton);
    })
}
const submitScore = (VB)=>{
    resultado = VB;
    console.log(resultado)
    pantallaThank(resultado);
}

const pantallaThank = (res)=>{
    main.innerHTML = ``;
    main.innerHTML = `
    <div class="container">
        <div class="container-thank">
          <img class="illustration-thank-you" src="./images/illustration-thank-you.svg" alt="illustration thank you">

          <p class="rank-text">You selected ${res} out of 5</p>

          <h2>Thank you!</h2>

          <p class="thank-text">We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>
      </div>
    </div>
    `;
}