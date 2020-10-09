function obtenerdata_basico(){
    //metodo básico de obtener datos de api.
    // url (required), options (optional)
    fetch('https://apis.datos.gob.ar/georef/api/ubicacion?lat=-27.2741&lon=-66.7529', {
        method: 'get' //metodos disponibles- GET(obtener), POST(agregar), PUT/PATCH(actualizar), DELETE(eliminar), HEAD 
    }).then(function(response) {
        let data  = response
    }).catch(function(err) {
        // Error :(
    });
}
function obtenerdata_basico_con_autorizacion(){
    //metodo básico de obtener datos de api.
    userAccessToken  = 'a97723bddec54bec96561808ef553c25'
    fetch("https://api.spotify.com/v1/me/playlists", {
        method: "get",
        headers: {
          Authorization: `Bearer ${userAccessToken}`     
        }
      })
      .then(response => response.json())
      .then(({beats})) => {
        beats.forEach((beat, index) => {
          console.log(`Beat ${index} starts at ${beat.start}`);
        })
      }
}