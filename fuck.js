const {GoogleSpreadsheet}=require('google-spreadsheet');

const {promisify}=require('util');

// const creditos=require('./setiembreloco-15f32734a884.json');

// async function acceso(){
// const doc=new GoogleSpreadsheet('1qxz5yN-TRsziSo9NwlZcgAajhJVge40zTLSWIDLgLO0');
// await promisify(doc.useServiceAccountAuth)(creditos);

// const info=await promisify(doc.getInfo)();

// const hoja=info.worksheets[0];

// console.log(`Title: ${hoja.title}, Rows: ${hoja.rowCount}`);

// }

// acceso();

const doc = new GoogleSpreadsheet('1qxz5yN-TRsziSo9NwlZcgAajhJVge40zTLSWIDLgLO0');

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

const b3=hoja.getCellByA1('B3');

return await b3.value;

}

// yuyu().then((res)=>{console.log("Salida: "+res)}).catch(e=>console.log(e));
// var out="a";
// console.log(out);
// yuyu().then((res)=>{
// 	var out="loco"

// console.log(out);

// const ht=require("http");
// // const 

// var serv=ht.createServer((pedido,respuesta)=>{
// respuesta.writeHead(200, {'Content-Type': 'text/html'});
// respuesta.write(`<!doctype html><html><head></head>
//                    <body><h1>Sitio en desarrollo</h1>`);
// respuesta.write("LINEA DOS");
// respuesta.write(res);
// respuesta.write(`</body></html>`);
// respuesta.end("");

// });
// serv.listen(8000);




// });


//*/*/*/*/*/*98*/98*/9*/98*/*89/*/98*/9/*/95*/*89/*/232323*/*/32*/32*/*/323

console.log("servidor activado");

// yuyu().then((res)=>{console.log("Salida: "+res)})
// var out="a";
// console.log(out);
yuyu().then((res)=>{
	var out="loco";

	console.log(out);

	const ht=require("http");

	const filos=require('fs');



	var serv=ht.createServer((pedido,respuesta)=>{
		filos.readFile("vato.html",function(err,data){

//     console.log("HAHAHAss");
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     // red.write("NANANANANANAN");
//     res.end(a2);

// respuesta.writeHead(200, {'Content-Type': 'text/html'});
// respuesta.write(`<!doctype html><html><head></head>
//                   <body><h1>Sitio en desarrollo</h1>`);
// respuesta.write("LINEA DOS");
// respuesta.write(res);
// respuesta.write(`</body></html>`);
	respuesta.writeHead(200, {'Content-Type': 'text/html'});
	respuesta.write(data);
	respuesta.end("");
});

	});
	serv.listen(8000);

});
