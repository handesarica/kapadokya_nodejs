// bir urunun bilgilerini içeren dosya
// public members
var title = "Mobile Phone";
var name = "Iphone 13";

//private members
var price = 30000;

var log = function (name){
    console.log(name);
}

// // değişken ve fonksiyonu dışarıdan erişilebilir  
// module.exports.log = log;
// module.exports.N = name;
// module.exports.T = title;

module.exports = {
    pTitle: title,
    pName: name,
    log: log
}
