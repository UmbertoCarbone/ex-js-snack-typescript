/* Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato”

🎯 BONUS
Se è null: stampa “Il dato è vuoto”
Se è un array: stampa la sua lunghezza
Se è una Promise: attendi che si risolva e stampa il valore del resolve. */

let dato : unknown;

if (typeof dato === "string") {
  console.log(dato.toUpperCase())

} else if(typeof dato === "number"){
  console.log(dato * 2)

} else if(typeof dato === 'boolean'){
  console.log(dato + "e' un booleano")

}else if(dato === null){
  console.log('il dato e', null)

} else if(Array.isArray(dato)){
  console.log(dato.length)
}
else if(dato instanceof Promise){
  dato.then((msg)=>console.log(msg))
  .catch((err)=>{
    console.error("e' una promise, ma va in errore",err)
  })
}
   else{
  console.log("nessun dato")
}