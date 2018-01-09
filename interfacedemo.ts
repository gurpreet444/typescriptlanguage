interface   ILoan
{


    f:string,
    l:string,
    sayHi: ()=>string
}

var  cc:ILoan = {


f:"gora",
l:"sin",
sayHi: ():string =>{return  "ddd" }  

}

console.log(cc.f, cc.l,cc.sayHi())


interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
