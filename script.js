const inputs =document.querySelectorAll(`input`)
const res =document.querySelector(`#res`)
const arr =[`ножницы`,`камень`,`бумага`]
inputs.forEach((input)=> {
    input.addEventListener(`click`,(e)=> {
        const random = Math.floor(Math.random() * 2)
        if(e.target.value === `ножницы`&& random === 2) {
            res.innerHTML=`
           <h2>you won!</h2> 
           <img src="./assets/bumaga_kgi.jpg" alt="">  
           `
        }else if(e.target.value ===`камень`&& random === 0) {
            res.innerHTML=`
           <h2>you won!</h2> 
           <img src="./assets/ножницы.jpg\" alt="">   
           `
        }else if(e.target.value===`бумага`&& random=== 1) {
            res.innerHTML=`
            <h2>you won!</h2> 
           <img src="./assets/камень.jpg" alt="">  
           `
        }else if (e.target.value ===`ножницы`&& random === 0) {
            res.innerHTML=`
           <h2>draw</h2>
           `
        }else if(e.target.value ===`бумага`&& random === 2 ) {
            res.innerHTML=`
           <h2>draw</h2>
           <img src="./assets/bumaga_kgi.jpg" alt="">
           `
        }else if(a.target.value === `камень`&& random === 1) {
            res.innerHTML=`
           <h2>draw</h2>
           <img src="./assets/камень.jpg" alt="">
           `
        }


    })
})