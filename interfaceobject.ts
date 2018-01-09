interface  IPerson
{
    firstName:string;
    lastName:string;
    sayHi: () => string;
}

var  custumer:IPerson =
{

    firstName:"a",
    lastName:"b",
    sayHi:(): string => {return "asss"}

}

console.log(custumer.firstName)
console.log(custumer.lastName)
console.log(custumer.sayHi())
