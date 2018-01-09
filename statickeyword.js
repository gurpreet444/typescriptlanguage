var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.display = function () {
        console.log(StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 15;
StaticMem.display();
