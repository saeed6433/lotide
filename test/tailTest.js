const assertEqual = require("../assertEqual")
const tail = require("../tail")


assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length,((["Hello", "Lighthouse", "Labs"]).length) - 1);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
assertEqual(tail(["Hello"]).length,[].length);