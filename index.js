const smallEl = document.querySelectorAll('.small');

const allSections = document.querySelector('.interface');

const large = document.querySelectorAll('.large');

function ImageTransition(){

    for(let i=0;i<smallEl.length;i++){

        smallEl[i].addEventListener('click', function(){

            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className+=' active-btn' ;

        })
    }

    allSections.addEventListener('click', (e) =>  {
        
        const id = e.target.dataset.id;
        if(id){
            
            //Hide other Large images

            large.forEach((section) =>{

                section.classList.remove('active');

            })

            const element = document.getElementById(id);
            
            element.classList.add('active');



        }
    })
    


}

ImageTransition();





