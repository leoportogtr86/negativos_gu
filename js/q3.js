let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')



var sampler = new Tone.Sampler({
	"C3" : "assets/audio/acertou.mp3",
	"C#3" : "assets/audio/errou.mp3"
}, function(){

    a.onclick = function () {

        sampler.triggerAttack('C#3')
        a.classList.add('animate__shakeX')
        
        
    }

    b.onclick = function () {

        sampler.triggerAttack('C#3')
        b.classList.add('animate__shakeX')
        
        
    }

   
    c.onclick = function () {

        sampler.triggerAttack('C3')

        c.classList.add('animate__flash')
        

            setTimeout(() => {

                window.location = 'q4.html'
                
            }, 3000);
        
        
    }

    d.onclick = function () {

        sampler.triggerAttack('C#3')

        d.classList.add('animate__shakeX')
        
    }

}).toDestination()