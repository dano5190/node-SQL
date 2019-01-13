# node-SQL

This code involves using both node.js and mySQL to create a basic amazon-like store page called "bamazon" in this case.  No, there is no actual money being exchanged and no actual products being stored or shipped.

Anyways, this uses the node packages "mysql" and "inquirer", so the "npm install mysql" and "npm install inquirer" commands will needed to be performed on the git bash or terminal if the code is to run properly.

To run the program, go into the folder that contains both of the files called "bamazon.sql" and "bamazonCustomer.js", as well as the node packages.  Enter the line "node bamazonCustomer.js" into bash.
![Code Execution](/screenshots/code_execute.png)

After pressing enter, a list of products will be printed to the terminal, including their names, prices, and their ID numbers.  Then there will be 2 prompts to the user, the second will appear after the user has answered the first.  Placing the order involves matching an item with its id and typing how many the user wants. (example here: Say you want to get your friends into Dungeons and Dragons, and you want to start by ordering a nice set of dice for each of them and yourself, your order may look like this)
![Place Your Order](/screenshots/place_order.png)

After both prompts have been answered, the code will return a confirmation of the order by showing how many of what product the user ordered, along with the total cost.  Then the database is updated to change the remaining number of items of that kind in stock.  Afterwards the program ends.
![Order Completed](/screenshots/order_complete.png)

If the user ordered more item than are currently in-stock, the program will say that there is not enough, and will prompt the user to order again. 
![More of an item was ordered than is in stock](/screenshots/too_much.png)


That is basically it.

-Daniel O'Connell

The link to my Portfolio is here:

https://dano5190.github.io/Bootstrap-Portfolio/