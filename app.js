const express = require ('express');

const app = express ();
const path = require ('path')

app.get('/', function (req, res){

let file= path.resolve ('vistas/index.html')

res.sendFile(file);


})
app.get('/', function (req, res){

    let file= path.resolve ('vistas/index.html')
    
    res.sendFile(file);
    
    
    })
    app.get('/login', function (req, res){

        let file= path.resolve ('vistas/login.html')
        
        res.sendFile(file);
        
        
        })
        app.get('/productCart', function (req, res){

            let file= path.resolve ('vistas/productCart.html')
            
            res.sendFile(file);
            
            
            })
            app.get('/productDetail', function (req, res){

                let file= path.resolve ('vistas/productDetail.html')
                
                res.sendFile(file);
                
                
                })
                app.get('/register', function (req, res){

                    let file= path.resolve ('vistas/register.html')
                    
                    res.sendFile(file);
                    
                    
                    })
app.get('*', function (req, res){   
     

    if(req.url.includes('.')){     
    
        let file= path.resolve ('public'+ req.url)
    
        return res.sendFile(file);
    
        }
        
        res.sendFile('Not found');              
        
        
        })

app.listen(3030)  