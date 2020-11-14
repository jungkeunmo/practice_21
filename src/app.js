import express from 'express'; // express 를 쓰기위해 가져오삼
import path from 'path'; // path 를 씁시다

const PORT = 3000; // 포트는 3000을사용
const app = express(); // app 아 express를 써

app.set("view engine", "pug"); //app 님아 pug 쓰삼

app.use(express.static(path.join(__dirname, "/assets"))); // app 너가 사용할 css js파일은 "/assets"에 있음

app.get("/" , (req, res) => {
    res.render("index");
}); //app 가져와 "/" 세워 "index"를

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
}); // 설정 끝 시작 하삼