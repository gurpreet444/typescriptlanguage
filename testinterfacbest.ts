interface  ac
{

program:string;
commandLine:string[]|string|(() => string);


}

  var  s:ac=  { program:"ajtak",commandLine:"sss"  };


 

  s  = { program:"ddnews",commandLine:["ss","dd"] };

  s=   {program:"fff",  commandLine:() => {return "ssss"}};

  console.log(s.commandLine[0]);
  console.log(s.commandLine[1]);


  s = {program:"ddd", commandLine:["a","m"]};



var  ss:any =  s.commandLine;



