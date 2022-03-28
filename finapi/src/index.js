const { request, response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - []
*/

//Middleaware
function verifyIfExistsAccountCPF(request, response, next){
    const { cpf } = request.headers;

    const customer = customers.find((customer) => customer.cpf === cpf);
    
    if(!customer){
        return response.status(400).json({ error: "Customer not found!"});
    }

    request.customer = customer;

    return next();
}

app.post('/account', (req, res)=> {
    const { cpf, name } = req.body;

    const customersAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    );

    if(customersAlreadyExists){
        return res.status(400).json({ error: "Customer already exists!" });
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });
    
   // console.log(customers)
    return res.status(201).send();
});

//Usando midleware para varias rotas a seguir
//app.use(verifyIfExistsAccountCPF);

app.get('/statement', verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request;

    console.log(customer);
    return response.json(customer.statement);
});

app.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
    const { description, amount } = request.body;

    const { customer } = request;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
});
app.listen(3333);

