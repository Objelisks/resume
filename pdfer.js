var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./resume.html', 'utf8')
var options = { filename: './resume.pdf', format: 'Letter' };
 
pdf.create(html, options).toFile(function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/tmp/html-pdf-8ymPV.pdf' } 
});