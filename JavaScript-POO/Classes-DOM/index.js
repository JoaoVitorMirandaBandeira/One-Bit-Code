import { Component } from "./Component.js";
import { Input } from "./input.js";
import { Label } from "./lebal.js";
import { Form } from "./form.js";



const comp = new Component('h1', 'body', {  textContent:   'Ola mundo!'})
comp.biuld().render()
const form = new Form('body')
const inputName = new Input(form, { id: 'nameInput', name: 'name', type: 'text' })
const labelName = new Label('Nome:', { htmlFor : 'nameInput'})
const inputDate = new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
const labelDate = new Label('Data de Nascimento:', { htmlFor : 'birthdayInput'})

form.render()
form.addChildren(labelName,inputName,new Component('br'),new Component('br'),labelDate,inputDate)

