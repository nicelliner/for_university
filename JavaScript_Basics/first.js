let variable;

const getTypeRU = (variable) => {
    eng_type = typeof (variable);
    if (eng_type === 'number') return "Число";
    if (eng_type === 'string') return "Строка";
    if (eng_type === 'boolean') return "Булева";
    if (eng_type === 'undefined') return "Отсутствие примитива";
    return "I dont know(";
}

console.log(getTypeRU(variable));

