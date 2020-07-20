
const fs = require("fs");
const ex = require("express");
const a = ex();




a.listen(3000,function(){
 console.log("hi im listening...listening")   ;
}) ;

a.use('/', express.static('public'));
 
a.get("/",function(err,data){
fs.readdir("F:\7c6ddd98cf920f4f18293172a2",function(err,file){
if(err)
{ throw err;}
else{
    let final1 = "<ol>";
    let final2 = "<ul>";
    file.forEach(function(result){
        let path = process.cwd();
        fs.stat(path, (err, stats) => { 
            if( !err ){ 
                 if(stats.isFile()){ 
                    final1 = final1 + "<li>${result}</li>"; 
                 } 
                final1 = final1 + "</ol>"
                 else if(stats.isDirectory()){ 
                    final2 = final2 + "<li>${result}</li>"; 
                 } 
                 final2 = final2 + "</ul>"
             } 
             else
                 throw err;  
        }); 

    });

}
});   
});
