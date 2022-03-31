const Excel = require('exceljs');

const fileName = 'Book1.xlsx';

const wb = new Excel.Workbook();
const ws = wb.addWorksheet('Sheet1');

ws.getCell('A1').value = 'Fname';
ws.getCell('B1').value = 'Lname';
ws.getCell('C1').value = 'Email';

let student_data = [
    ["Bala","Mahesh","19pa1a0534@vishnu.edu.in"],
    ["Abhishek","Gera","19pa1a0548@vishnu.edu.in"]
]

for(var i=0;i<(student_data.length);i++){
    var r = ws.getRow(i+2)
    r.values = student_data[i]
}

wb.xlsx
  .writeFile(fileName)
  .then(() => {
    console.log('data inserted');
  })
  .catch(err => {
    console.log(err.message);
  });