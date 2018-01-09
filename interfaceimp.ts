interface ILoan
{


    loan:string;

}

class  AgriLoan  implements ILoan
{

  loan:string;


  constructor(name:string)
  {

   this.loan  =name;

  }


}



var  interfaceref=  new AgriLoan('bnank');
     console.log(interfaceref.loan)