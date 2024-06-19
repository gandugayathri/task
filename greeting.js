class Greeting
{
    sayHello(name)
    {
        return `Hello, ${name}`;
    }

    sayGoodbye(name)
    {
        return `Goodbye, ${name}`;
    }

    execute()
    {
        const MsgOne=this.sayHello('Sachin');
        const MsgTwo=this.sayGoodbye('Sachin');
        console.log(MsgOne);
        console.log(MsgTwo);
    }
}

//creating an instance 

const greet=new Greeting();
greet.execute();
