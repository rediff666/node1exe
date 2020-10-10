const ex=require('express');
const app=ex();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
res.send("SDEE");

});


app.listen(4545, () => {
  console.log(`listening on port ${ port }`);
});




















// const {GoogleSpreadsheet}=require('google-spreadsheet');

// const {promisify}=require('util');

// const doc = new GoogleSpreadsheet('1qxz5yN-TRsziSo9NwlZcgAajhJVge40zTLSWIDLgLO0');

// async function yuyu(){
// await doc.useServiceAccountAuth((require('./setiembreloco-15f32734a884.json')));

// await doc.loadInfo();


// const hoja=doc.sheetsByIndex[0];

// await hoja.loadCells("A1:E10");

// const b3=hoja.getCellByA1('B3');

// return await b3.value;

// }


// console.log("servidor activado");


// yuyu().then((res)=>{
// 	var out="loco";

// 	console.log(out);

// 	const ht=require("http");

// 	const filos=require('fs');



// 	var serv=ht.createServer((pedido,respuesta)=>{
// 		filos.readFile("vato.html",function(err,data){


// 	respuesta.writeHead(200, {'Content-Type': 'text/html'});
// 	respuesta.write(data);
// 	respuesta.end("");
// });

// 	});
// 	serv.listen(8000);

// });
