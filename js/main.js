let positivo = document.querySelector('#positivo')
let negativo = document.querySelector('#negativo')
let frio = document.querySelector('#frio')
let calor = document.querySelector('#calor')

let acertos = 0

var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

    positivo.onclick = function () {

        sampler.triggerAttack('C#3')
        positivo.classList.add('animate__shakeX')
        
        
    }

    negativo.onclick = function () {

        sampler.triggerAttack('C3')

        negativo.classList.add('animate__flash')

        acertos++

        setTimeout(() => {

            negativo.style.display = 'none'
            
        }, 2000);

        if (acertos == 2){

            setTimeout(() => {

                window.location = 'q2.html'
                
            }, 3000);
        }
        
    }

    frio.onclick = function () {

        sampler.triggerAttack('C3')

        frio.classList.add('animate__flash')
        frio.style.display = 'none'

        acertos++

        if (acertos == 2){

            setTimeout(() => {

                window.location = 'q2.html'
                
            }, 3000);
        }
        
    }

    calor.onclick = function () {

        sampler.triggerAttack('C#3')

        calor.classList.add('animate__shakeX')
        
    }
    
    

    
    





}).toDestination()