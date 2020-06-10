let a = document.querySelector('#a')
let b = document.querySelector('#b')




var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

   

    b.onclick = function () {

        sampler.triggerAttack('C#3')
        b.classList.add('animate__shakeX')
        
        
    }

   
    a.onclick = function () {

        sampler.triggerAttack('C3')

        a.classList.add('animate__flash')
        

            setTimeout(() => {

                window.location = 'q6.html'
                
            }, 3000);
        
        
    }

    

}).toDestination()