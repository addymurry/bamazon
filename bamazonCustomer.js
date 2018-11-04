var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require("columnify");


var connection = mysql.createConnection({
  host: "localhost",


  port: 3306,


  user: "root",

  password: "cooltulip941",
  database: "bamazon_db"
});


connection.connect(function(err) {
  if (err) throw err;

  start();
});

function start(){
    productPage();
};

function productPage(){
    connection.query("SELECT id, product_name, department_name, price, stock FROM products", function(err, res){
        if(err) throw err;
        console.log(columnify(res))
        buy();
    });
}

function buy(){
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        
    inquirer

        .prompt([
            {
                name: "id",
                type: "input",
                message: "choose number of item you would like to buy",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },


            {
                name:"amount",
                type:"input",
                message:"how many would you like to buy",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])


        .then(function(buy){
            var product_buy;
            for (var i = 0; i < res.length; i++){
                if (res[i].id == buy.id){
                    product_buy = res[i];
                }
            }
            
            if(product_buy.stock > parseInt(buy.amount)){
                connection.query(
                    "UPDATE products SET ? WHERE ? ",
                    [
                        {
                            stock: (product_buy.stock - buy.amount)
                        },
                        {
                            stock: product_buy.stock
                        }
                    ],
                    console.log("Your total comes to: $" + (buy.amount * product_buy.price))
                    
                )
            start();
            }
            else {
                console.log("sorry we dont have enough stocks")
                start();
            }
            
        });
    })
    
}
