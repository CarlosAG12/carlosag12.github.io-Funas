const form = document.getElementById('form-data');
const status = document.getElementById('form-status');
const boton = document.getElementById('que-sigue');

form.addEventListener('submit', async(e) => {
    //Hago que el navegador me de los controles a mi y no haga nada el 
    e.preventDefault();

    const formData = new FormData(form)
    
    try{
        const response = await fetch('https://formspree.io/f/xnjjdalj', {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });
        
        
        if(response.ok){
            status.textContent = "Tu denuncia fue enviada de forma segura.";
                form.reset();
            }    
            else{
                status.textContent = "Ocurrio un error al enviar el archivo.";
            }
    }
    catch(error)
    {
        status.textContent = "Error de conexion";
    }

    boton.removeAttribute('hidden');
});

boton.addEventListener('click', (e) => {
    
    window.location.href = 'explicacion.html';
    boton.setAttribute('hidden', '');
});
    

const buttom = document.querySelector('.info-btn');
const parrafo = document.querySelector('.tooltip-info');

buttom.addEventListener('click', (e) => {
    const visible = parrafo.style.opacity === '1';
    
    parrafo.style.opacity = visible ? '0' : '1'; 
    parrafo.style.pointEvents = visible ? 'none' : 'auto';
    parrafo.style.transform = visible ? 'translate(-5px)' : 'translate(0)';

});