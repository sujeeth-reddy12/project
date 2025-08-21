
var homelist=(req,res)=>{
    res.render('index',{title:'Home  Sujeeth Reddy 23EG107E23'});
};
var locationInfo=(req,res)=>{
    res.render('index',{title:'Location Info'});
};

var addReview=(req,res)=>{
    res.render('index',{title:'Add Review'});
};
module.exports={
    homelist,
    locationInfo,
    addReview
};