
// Guardar en el cache dinamico
function actualizaCacheDinamico( dynamicache, req, res){
    if (res.ok ) {

        return caches.open( dynamicache ).then( cache => { 

            cache.put( req, res.clone() );

            return res.clone();

        });
        
    } else {
        return res;
    }
}