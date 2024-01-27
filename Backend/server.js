const express = require('express');
const app = express();
const port = 4444;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('telecom.sqlite3', (err)=>{ 
    if (err) {
        return console.error(err.messahge);
    }

    console.log('Connected to the in-memory SQlite database named: ' + db.name);
});
/*Список подключаемых библиотек и настроек*/
app.use(express.json());  // Необходимо для чтения express'ом файлов формата JSON
/* Далее идет настройка CORS. CORS политика является принудительной для браузеров и необходима, для того что бы 
   удостоверится, что "наш" сервер уведомлен о том, что кто-то и каким-то образом собирается с ним взаимодействовать.
   Ниже приведены настройки и их пояснение.   */
app.use(function(req, res, next){ 
    res.setHeader("Access-Control-Allow-Origin", "*") //Позволяет этому серверу взаимодействовать с определенными URL, в нашем случае в любыми.
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS") // Разрешает другим сайтам осуществлять перечисленные методы у себя на сервере.
    res.setHeader("Access-Control-Allow-Headers", "content-type"); // определяет какие типы http запросов разрешается взаимодействовать с сервером
    next();
})

  
app.get("/", (req, res) => {    
          db.serialize(function() {       //serialize гарантирует, что команды для БД написанные в функции, будут выполнятся последовательно (с верху в низ), а не паралельно друг другу (хаотично)
            db.all('SELECT ID, State, Phone_number, International_calls, Voice_mail, Care FROM telecom LIMIT 0,500', (err, row) => {
            res.json(row);
            //db.close();
         });
        });
        })

app.listen(port, (err) =>{
    if (err) {
        return console.log(err);
    }
    if (!err) {
        console.log("Server is WORKING on PORT:"+ port);
    }
});