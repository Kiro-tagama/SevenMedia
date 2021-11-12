//bar
var b1= document.getElementById("f2-sical").getContext('2d')
const b1_1= new Chart(b1,{
    type: 'bar',
    data: {
        labels: [
            'Instagram',
            'Twitter',
            'Linkedin',
            'Facebook',
            'Youtube',
            'Tik Tok',
            'WhatsApp'],
        datasets: [{
            label: 'Rede socal',
            data: [18,6,3,5,9,10,12],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgb(75, 192, 192)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x', //aqui define se vai ficar inclinado ou de pé por x ou y
    }
});
var b2= document.getElementById("f2-consumo").getContext('2d')
const b2_1= new Chart(b2,{
    type: 'bar',
    data: {
        labels: [
            'Moda',
            'Esporte',
            'Economia',
            'Política',
            'Games',
            'Notícias diárias',
            'Cultura Geek',
            'sexo',
            'tutoriais'
            ],
        datasets: [{
            label: 'consumo social',
            data: [9,9,2,8,7,12,6,1,1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x', //aqui define se vai ficar inclinado ou de pé por x ou y
    }
});

//pizza
var g1= document.getElementById("f2-aparencia").getContext('2d')
const g1_1 = new Chart(g1,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Sempre',
            'As vezes',
            'Quase nunca',
            'Nunca'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [12,8,1,0], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(40, 205, 90)'
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var g2= document.getElementById("f2-inseguro").getContext('2d')
const g2_1 = new Chart(g2,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Não me considero inseguro',
            'Um pouco',
            'Ocasionalmente',
            'Muito'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [3,6,9,3], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(40, 205, 90)'
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var g3= document.getElementById("f2-Mcasa").getContext('2d')
const g3_1 = new Chart(g3,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Não funcionaria',
            'Indiferente',
            'Funcionaria melhor'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [1,16,4], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var g4= document.getElementById("f2-frescura").getContext('2d')
const g4_1 = new Chart(g4,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Sim',
            'Não'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [16,5], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var g5= document.getElementById("f2-tendencia").getContext('2d')
const g5_1 = new Chart(g5,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Gosto de seguir a moda',
            'Não ligo',
            'Tenho meu próprio estilo',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [4,9,8], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(40, 205, 90)'
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var g6= document.getElementById("f2-ser").getContext('2d')
const g6_1 = new Chart(g6,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Minhas vivências/experiências',
            'Educação dos meus pais',
            'Círculo de amizades',
            'Redes sociais',
            'Outros'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [13,4,3,0,1], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(150, 25, 100)',
                'rgb(40, 205, 90)',
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var g7= document.getElementById("f2-cuidar").getContext('2d')
const g7_1 = new Chart(g7,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Por prazer',
            'Por conta do julgamento dos outros'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [16,5], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(40, 205, 90)'
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});

var g8= document.getElementById("f2-Msalario").getContext('2d')
const g8_1 = new Chart(g8,{
    type: 'doughnut', //doughnut ou pie
    data: {
        labels: [
            'Sim','Não'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [15,6], //respostas inconsistentes então acrescentar +2H +3NB
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(40, 205, 90)'
            ],
            hoverOffset: 4,
            borderColor:['rgba(0, 0, 0, .2)']
        }]
    }
});