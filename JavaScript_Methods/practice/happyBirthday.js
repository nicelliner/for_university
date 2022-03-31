const HappyBirthday = {
    hDays: [
        {name: "Dave", month: "09", day: "04"},
        {name: "Ann", month: "02", day: "27"},
        {name: "Nik", month: "08", day: "15"},
        {name: "Pul", month: "02", day: "18"},
        {name: "Steven", month: "07", day: "24"},
        {name: "Frank", month: "02", day: "13"}
    ],
    get property() {
        let string_array = "";
        for (let person of this.hDays) string_array += person.name + ", ";
        return string_array;
    },
    set property({name, day}) {
        if (day.indexOf("/", 0) != 2) return console.log("Введите дату в формате 01/03");
        if (name[0] == name[0].toLowerCase())
            name = name[0].toUpperCase() + name.slice(1, name.length);
        this.hDays[this.hDays.length] = {name: name, month: day[0]+day[1], day: day[3]+day[4] };
    },
    showDaysOnMonth:function (month) {
        for (let person of this.hDays) if (person.month === month) console.log(person.name);
    }
}

HappyBirthday.property = {name: "Denis", day: "02/23"};
console.log(HappyBirthday.property);
HappyBirthday.showDaysOnMonth("02")
