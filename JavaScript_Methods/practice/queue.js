const Queue = {
    commands:[
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"},
    ],
    get property() {
        for (let i = 1; i < this.commands.length; i++)
            this.commands[i].id = this.commands[i-1].id;
        return this.commands.shift();
    },
    set property(command){
        command = {id: this.commands.length+1 + "-command", command: command};
        this.commands[this.commands.length] = command;
    },
    showQueue:function () {
        for (let command of this.commands)
            console.log(this.commands.indexOf(command, 0) + 1 + ". " + command.command);
    }
};

Queue.property;
Queue.showQueue();
Queue.property = "splice";
console.log(Queue);