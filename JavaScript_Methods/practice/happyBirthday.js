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
        name = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
        let result_month = day.slice(0, day.indexOf("/", 0));
        let result_day  = day.slice(day.indexOf("/", 0)+1, day.length);
        if ( result_month < 10 && result_month.length < 2) result_month = '0'.concat(result_month);
        if ( result_day < 10 && result_day.length < 2) result_day = '0'.concat(result_day);
        this.hDays[this.hDays.length] = {name: name, month: result_month, day: result_day };
    },
    showDaysOnMonth:function (month) {
        for (let person of this.hDays) if (person.month === month) console.log(person.name);
    }
}

HappyBirthday.property = {name: "Denis", day: "3/2"};
console.log(HappyBirthday.property);
HappyBirthday.showDaysOnMonth("02")
