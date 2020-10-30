const { constant } = require('lodash')
const  schedule = require('node-schedule')

const tarefaUm = schedule.scheduleJob('*/5 * 17 * * 4', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefaUm.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 17
regra.second = 30

const tarefaDois = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})