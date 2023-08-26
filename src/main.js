let myObj = [
    {
        name: "ask",
        salary: 400000
    },
    {
        name: "cho thet",
        salary: 200000
    },
    {
        name: "yair htet",
        salary: 300000
    }
]
let result = myObj.reduce((total, item)=> (total += item.salary),0);
console.log(result)
