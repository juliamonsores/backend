const express = require ('express');

const app = express();

app.get("/",(req, res) => {
    res.json({ 
        message: "Olá"
    });
});

app.get("/produtos", (req, res) => {res.json ( [{nome: "celular"}, {nome:"tv"}, {nome:"sofagi"}])
})

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log("Estou rodando na porta " + PORT )
})