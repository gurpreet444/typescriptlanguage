  class  Root

{



    str:string;
}


  class Child   extends Root
{






}


  class  Leaf   extends Child
{





}

  class  abc
{
var     leaf =  new Leaf();
  leaf.str  ='hai';

  console.log(leaf.str);



}