//forms 1
var gen_influ= document.getElementById("g_influencia").getContext('2d')
const config = new Chart(gen_influ,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Homem',
            'Mulher',
            'Não-binário'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [22+2, 24, 5+3], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var pg_conta= document.getElementById("pg_conta").getContext('2d')
const pg_c = new Chart(pg_conta,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Eu devo pagar tudo', //1
            'Ela deve pagar toda a conta', //2
            'Devemos dividir a conta', //3
        ],
        color:['#ddd'],
        datasets: [{
            label: 'My First Dataset',
            data: [2+1,1+4,21+6] , //respostas inconsistentes então acrescentar 1=+1,2=+4 3=+6
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var def_sent= document.getElementById("def_sent").getContext('2d')
const d_s= new Chart(def_sent,{
    type: 'bar',
    data: {
        labels: [0,1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            label: 'Dificuldades de demonstrar sentimentos',
            data: [5,0,4,1,2,6,3,3,7,1,4],
            backgroundColor: [
                'rgba(20, 203, 100, 0.2)',
            ],
            borderColor: [
                'rgb(20, 203, 100)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        indexAxis: 'x', //aqui define se vai ficar inclinado ou de pé por x ou y
        color:'#ddd'
    }
});

//forms 2