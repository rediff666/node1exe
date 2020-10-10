const {GoogleSpreadsheet}=require('google-spreadsheet');

(async function jj(){
const ido=new GoogleSpreadsheet('1Acyx7kwrHOIrcizp_VubeGvTi9bwdUClR6gzK9VstL0');

await ido.useServiceAccountAuth(require('./setiembreloco-15f32734a884.json'));

await ido.loadInfo();

// await ido.addSheet({title:"jh4"});
const hoja=ido.sheetsByIndex[1];
const num_rows=hoja.rowCount;

console.log(hoja.title);
console.log(num_rows);
console.log(hoja.cellStats);



await hoja.addRow({Fecha:"20/10/2020",Word:"SERVER",AA:"Las asss",BB:"Los bebes"});

// GETEER MAS PRO
// const filas= await hoja.getRows();
// let i=0;

// try{
// while(filas[i]._rawData[0]!=""){
// console.log(filas[i]._rawData[0]+" ---- "+ filas[i]._rawData[1]);	
// i+=1;

// }

// }catch(e){
// 	console.log("no hay más"+e);
// }
// console.log("TOTAL DE FILAS:::::::::: "+i);

// if (filas[5]._rawData[0]!="16/09/2020"){
// console.log(filas[5]._rawData[0]);	
// }else{
// 	console.log("No hay ");
// }

})();