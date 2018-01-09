class  PrinterClass
{



    public  doPrint():void
    {

     console.log('i    am  base  class');

    }


}

class  StringPrinter extends PrinterClass
{


  public  doPrint():void
  {
    super.doPrint()
    console.log('derived  classs');
  }


}

var   s  =  new StringPrinter();
s.doPrint();

