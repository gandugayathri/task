class GreetingConstructor
{
    //constructor()
    //{
       // 
    //}

    constructor(name)
    {
        this.name=name;
    }
    sayHello()
    {
        return `Hello, ${this.name}`;
    }
    sayGoodbye()
    {
        return `Goodbye, ${this.name}`;
    }

    
    execute()
    {
        const MsgOne=this.sayHello();
        const MsgTwo=this.sayGoodbye();
        console.log(MsgOne);
        console.log(MsgTwo);
    }

}

//creating an instance 

const greet=new GreetingConstructor();
const greet1=new GreetingConstructor('Sachin');
greet.execute();
greet1.execute();