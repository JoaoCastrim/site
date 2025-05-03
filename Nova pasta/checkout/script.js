const script_do_google = 'https://script.google.com/macros/s/AKfycby-KisWQwFFdb_L3ZgKGt8E4Zohjdmh3GsO8rZGWCOG2YT1LmkZ2d8-rZzRaK2gKSg-/exec';
const dados_do_formulario = document.forms ['formulario-contato'];

dados_do_formulario.addEventListener('submit', function(e){
  e.preventDefault();

  fetch(script_do_google, { method: 'POST', body: new FormData (dados_do_formulario) })
  .then(response => {
    alert('dados enviado', response);
    dados_do_formulario.reset();
  })
  .catch(error =>
    console.error('erro no envio', error)
  )
}); 