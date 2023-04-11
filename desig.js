function carregar(){
    
    let men = window.document.getElementById('men')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    men.innerHTML = `Agora são ${hora} horas`

    if(hora>= 0 &&hora < 12){

        img.src = 'pexels-bruno-scramgnon-585759.jpg'
        document.body.style.background = 'rgb(241, 193, 129)'


    } else if(hora >= 12 && hora <18){

        img.src = 'pexels-gareth-davies-910411.jpg'
        document.body.style.background = 'rgb(238, 255, 0)'

    } else{

        img.src = 'pexels-alex-andrews-861443.jpg'

        document.body.style.background = 'rgb(8, 59, 228)'


    }

}



