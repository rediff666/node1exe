const express = require('express');
const app=express();
const bodyParser = require('body-parser');

const {GoogleSpreadsheet}=require('google-spreadsheet');

const {promisify}=require('util');



const doc = new GoogleSpreadsheet('1Acyx7kwrHOIrcizp_VubeGvTi9bwdUClR6gzK9VstL0');

async function yuyu(){
await doc.useServiceAccountAuth((require('./setiembreloco-15f32734a884.json')));

await doc.loadInfo();

// console.log(doc.title);

// const info = await doc.getInfo();
// const hoja=doc.worksheets[0];
const hoja=doc.sheetsByIndex[0];
// console.log(`title: ${hoja.title} y el numoer de filas es:: ${hoja.rowCount}` );


await hoja.loadCells("A1:E10");
// console.log(hoja.cellStats);

const b3=hoja.getCellByA1('B9');

return await b3.value;

}



//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/mostrarnumeros', (req, res) => {
  let num1=req.body.numero1;
  let num2=req.body.numero2;
  num1=parseInt(num1);
  num2=parseInt(num2);


yuyu().then((res1)=>{

  let pagina='<!doctype html><html><head></head><body>';
  for(let x=num1;x<=num2;x++)
    pagina += `<a href="/mostrartabla?valor=${x}">${x}</a> - `;
  pagina+="<input type='text' value='"+res1+"'>";
  pagina += '</body></html>';
  res.send(pagina);	



});
});

app.get('/mostrartabla', (req, res) => {
  let num=req.query.valor;
  num=parseInt(num);
  let pagina='<!doctype html><html><head></head><body>';
  for(let x=1;x<=10;x++) {
    let tabla=num * x;
    pagina += `${num} * ${x} = ${tabla} <br>`;
  }	
  pagina += '<a href="index.html">Retornar</a>';
  pagina += '</body></html>';
  res.send(pagina);	
})


var server=app.listen(8888, () => {
  console.log('Servidor web iniciado');
});