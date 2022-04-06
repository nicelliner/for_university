const FirstClass = {
    children: [
        {name: "Ваня", age: 7},
        {name: "Ира", age: 7},
        {name: "Лиза", age: 6},
        {name: "Андрей", age: 7},
        {name: "Саша", age: 8},
        {name: "Женя", age: 8},
        {name: "Кеша", age: 6},
        {name: "Леша", age: 6},
    ],
    get property() {
        function callBack(a,b) {
            if (a.age > b.age) return 1;
            if (a.age === b.age) {
                return a.name.localeCompare(b.name);
            }
            if (a.age < b.age) return -1;
        }
        return this.children.sort(callBack);
    },
    set property({name, age}) {
        name = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
        this.children[this.children.length] = {name, age};
    }
}

FirstClass.property = {name: "Денчик", age: 6};
console.log(FirstClass.property)