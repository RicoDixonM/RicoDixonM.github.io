
var job = ["Web Developer", "Designer", "Game Developer", "Bartender"];
var city = ["Dallas", "Austin", "Fort Worth", "Carrollton"];
var spouse = ["Diana", "Carolina", "Ralph", "Kenya"];
var num_kids = [2, 3, 1, 0];

var xx = Math.floor(Math.random() * 4 )

function fortune(job,city,spouse,num_kids) {
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + num_kids + " kids.");
}

fortune(job[xx],city[xx],spouse[xx],num_kids[xx])

