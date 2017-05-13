// example of object prototypes in JS
(function()
{
    var CreateThing = function()
    {
        // private variable
        var thingCounter = 0;

        // private methods
        var thingAction1 = function()
        {
            thingCounter += 1;
            console.log("action 1 " + thingCounter);
        };

        var thingAction2 = function()
        {
            thingCounter += 1;
            console.log("action 2 " + thingCounter);
        };

        // public API
        return {
            job1: thingAction1,
            job2: thingAction2
        };
    };

    // constructor
    var blurp = CreateThing();

    // using API
    blurp.job1();
    blurp.job1();
    blurp.job1();
    blurp.job1();
    blurp.job2();
}());