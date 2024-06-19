class GreetingMultipleConstructors
{
    //constructor with default paramter
    static dis='hello';
    constructor(name,age){

        if(typeof name==='undefined')
            {
                //Default constructor logic
                console.log("if block")
                this.name='Guest';
                this.age=0;
            }
        else if(typeof age==='undefined')
            {
                console.log("else if block")
                 //single parameter logic
                 this.name='Guest';
                 this.age=0;
            }
        else
        {
            //full parmeter logic
            console.log("else block")
            this.name=name;
            this.age=age;
        }

    }

    sayHello()
    {
        return `Hello, ${this.name} your age ${this.age}`;
    }
    sayGoodbye()
    {
        return `Goodbye, ${this.name} your age ${this.age}`;
    }

    
    execute()
    {
        const MsgOne=this.sayHello();
        const MsgTwo=this.sayGoodbye();
        console.log(MsgOne);
        console.log(MsgTwo);
    }
}

const defaultGreet= new GreetingMultipleConstructors();
defaultGreet.execute();
console.log("coming from static",GreetingMultipleConstructors.dis);

const singleGreet= new GreetingMultipleConstructors('sachin');
singleGreet.execute();


const fullGreet= new GreetingMultipleConstructors('sachin',20);
fullGreet.execute();