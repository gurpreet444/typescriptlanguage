 export class  Person
{

public engine:string;

public  constructor(engine:string)
{
    this.engine  =  engine;

}

 public display():void
{

  console.log(this.engine);

}

var  ss=  new   Person('a');
console.log(ss.engine);
   ss.display();

 
}
