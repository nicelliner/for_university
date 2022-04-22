const server = [
    ["+Миша"], ["+Олег"], ["+Антон"],
    ["+Таня"], ["-Миша"],
    ["Таня:Как дела?"],
    ["Олег:Все хорошо!"],
    ["-Таня"], ["+Толя"],
    ["Толя:Я что-то пропустил?"]
]

const chat = (server, traffic = 0,  i = 2) => {
    if (i === server.length) return traffic;
    if (server[i][0][0] !== "+" && server[i][0][0] !== "-") traffic += massageTraffic(server, i);
    return chat(server, traffic, ++i);
}

const massageTraffic = (server, i) => {
  return (personsOnServer(server, i) - 1) *
      server[i][0].slice(server[i][0].indexOf(":", 0) + 1, server[i][0].length).length;
}

const personsOnServer = (server, massage, k = 0, i = 0) => {
  if (i === massage) return k;
  if (server[i][0][0] === "+") ++k;
  if (server[i][0][0] === "-") --k;
  return personsOnServer(server, massage, k, ++i)
}

console.log(chat(server))