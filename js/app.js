// uso esta syntaxis porque me permite adjuntar más de un evento a un mismo objeto.
window.addEventListener('load', function(){

  // endpoint al que voy a hacer el pedido.
  var URL = 'https://api.giphy.com/v1/gifs/random?api_key=zTRm9U2fYwVXiXze9F8T9Lno8qUecAUe&tag=&rating=G';

  // creo una función, para no escribir muchas veces el mismo código.
  function getDataFromApi( url ) {
    // la función debe recibir como parámetro un URL para hacer el pedido.
    // uso el método de javascript fetch para hacer un pedido asincrónico.
    return fetch( url )
      .then( response =>  response.json() )
      .catch( error =>  console.log(error) );
  }

  // invoco a la funcion que necesita la URL para hacer el pedido asincronico.
  getDataFromApi(URL).then(function(response1) {
    console.log(response1); // checkeo que devuelve la primer respuesta.

    // invoco a la funcion que necesita la URL para hacer el pedido asincronico.
    getDataFromApi(URL).then(function(response2) {
      console.log(response2); // checkeo que devuelve la segunda respuesta.
      console.log(response1); // checkeo que la primer respuesta siga siendo igual.

      // inserto el primer gif.
      document.querySelector('.gif1').innerHTML += '<img src="' + response1.data.image_url + '" style="height:100%;width:100%;">'
      // inserto el segundo gif.
      document.querySelector('.gif2').innerHTML += '<img src="' + response2.data.image_url + '" style="height:100%;width:100%;">'
    })

  })

})


// esta funcion es identica a la de arriba
// function getDataFromApi( url ) {
//   return fetch( url )
//     .then( function( response ) { response.json() } )
//     .catch( function( error ) { console.log(error) } );
// }
