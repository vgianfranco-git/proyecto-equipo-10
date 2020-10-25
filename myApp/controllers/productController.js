let productController ={

    detail:(req,res,next)=>{
        res.render('./products/productDetail');

    },

    carga: function(req,res,next){
        res.render('./products/productCarga');
        
    },

    edit: function(req,res,next){
        res.render('edit');
    },
    
    cart: function(req,res,next){
        res.render('productCart');

    }
    
    
};

module.exports= productController;