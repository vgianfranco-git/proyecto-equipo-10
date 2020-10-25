let usersController ={
    
    login: function (req,res,next){

        res.render('login');

    },

    register: function (req,res,next){
        res.render('register');

    },

    edit: function(req,res,next){
        res.render('edit');

    }

};

module.exports= usersController;