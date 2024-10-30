import { app } from "./server"

app.get('/usuarios', (req, res) => {
    console.log(req);
    res.send("olá rota acessada com sucesso!");
});
