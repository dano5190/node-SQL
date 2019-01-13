var mysql = require("mysql");
var inquirer = require("inquirer");

var conn = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_db"
});

conn.connect(function (err) {
    if (err) throw err;

});

conn.query('SELECT * FROM products', function (err, data) {
    if (!err) {

        for (var i = 0; i < data.length; i++) {
            console.log("ID: " + data[i].item_id + " | Product Name: " + data[i].product_name + " | Price: $" + data[i].price);
        }

        placeOrder();

    } else {
        
        console.log('Error');
    }
});

function placeOrder() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Please type the ID number of the product you wish to buy",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    },
    {
        name: "amount",
        type: "input",
        message: "Please enter the quantity of this product you wish to order",
        validate: function (value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }])
        .then(function (answer) {
            var query = 'SELECT * FROM products';
            conn.query(query, function (err, res) {

                if (answer.amount > res[answer.id - 1].stock_quantity || res[answer.id - 1].stock_quantity === 0) {
                    console.log("Insufficient Quantity!");
                    placeOrder();
                } else {
                    var change = (res[answer.id - 1].stock_quantity - answer.amount);

                    var index = answer.id - 1;

                    var cost = answer.amount * res[answer.id - 1].price;

                    conn.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [change, index + 1],
                        function (err) {
                            if (err) throw err;
                            console.log("You have ordered " + answer.amount + " of the product: " + res[answer.id - 1].product_name + " for a total of $" + cost + " dollars.  Enjoy!");
                            conn.end();
                        });
                }
            });
        });
};