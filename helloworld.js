/**
 * 
 */
var name ="sumanth"
console.log(name)
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

https.get('https://encrypted.google.com/', (res) => {
	  //console.log('statusCode:', res.statusCode);
	  //console.log('headers:', res.headers);

	  res.on('data', (d) => {
	   // process.stdout.write(d);
	  });

	}).on('error', (e) => {
	  console.error(e);
	});


// utility provided by node for accesing os details
const os = require('os');
console.log(os.cpus())
console.log(os.arch())
console.log(os.constants)
console.log(os.networkInterfaces())