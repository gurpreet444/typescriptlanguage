var s = { program: "ajtak", commandLine: "sss" };
s = { program: "ddnews", commandLine: ["ss", "dd"] };
s = { program: "fff", commandLine: function () { return "ssss"; } };
console.log(s.commandLine[0]);
console.log(s.commandLine[1]);
s = { program: "ddd", commandLine: ["a", "m"] };
var ss = s.commandLine;
