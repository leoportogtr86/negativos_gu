let amarelo = document.querySelector('#amarelo')
let vermelho = document.querySelector('#vermelho')




var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

   

    amarelo.onclick = function () {

        sampler.triggerAttack('C#3')
        amarelo.classList.add('animate__shakeX')
        
        
    }

   
    vermelho.onclick = function () {

        sampler.triggerAttack('C3')

        vermelho.classList.add('animate__flash')
        

            setTimeout(() => {

                window.location = 'q10.html'
                
            }, 3000);
        
        
    }

    

}).toDestination()