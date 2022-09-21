import express, { request, response } from "express";

const app = express()

app.get('/games', (request, response) => {
    return response.json([
        {id: 1, name: 'Dota 2'},
        {id: 2, name: 'Dota Reborn'},
        {id: 3, name: 'Counter Strike'},
    ]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json(['ads']);
});

app.get('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;

    return response.json([
        {id: 1, name: 'Anúncio 1'},
        {id: 2, name: 'Anúncio 2'},
        {id: 3, name: 'Anúncio 3'},
    ])
});

app.get('/ads/:id/discord', (request, response) => {
    //const adId = request.params.id;
    
    return response.status(200).json([])
});

app.listen(3333)