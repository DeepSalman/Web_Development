document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('contactForm');
    const outtextbox = document.getElementById('outputtext');

    form.addEventListener('submit',function(e){
        e.preventDefault();
        const name = form.name.value.trim();
        const summary=`Your name is :${name}`;

		// Put the compiled details into the message textarea
		outtextbox.value = summary;
    })


})