var express=require('express');
var app=express();
app.set('port', (process.env.PORT || 5000));

app.get('/',function(req,res){
	req.setEncoding('utf8');
	
	var data={
		ipaddress:req.headers.host,
		language:req.headers['accept-language'].split(',')[0],
		software:req.headers['user-agent'].split(/\s/).slice(1,4).join('')
	}
	res.end(JSON.stringify(data));
	
})
app.listen(app.get('port'))


