const Target = {
    shows: [
        ["Дейв", "машина"],
        ["Анна", "цветы"],
    ],
    targetWork:function ([name,interest]) {
        console.log("Привет, " + name + ", мы знаем, что в круг выших увлечений входит " + interest +
            ".\nПрисоединяйтесь к TheBestComapny. С Нами уже: ");
        for ( let i = 0; i < this.shows.length; i++) {
            if (i % 2 == 0 || i == 0)
                console.log(i+1 + ". " + this.shows[i][0] + " который(ая) любит " + this.shows[i][1]);
            else console.log(i+1 + ". " + this.shows[i][0] + " которой(ому) нравятся " + this.shows[i][1]);
        }
        this.shows[this.shows.length] = [name,interest];
    }
}

Target.targetWork(["Денис", "программирование"])
Target.targetWork(["Мария", "архитектура"])
Target.targetWork(["Денчик", "машиностроение"])