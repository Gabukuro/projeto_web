
var getProjects = function() {
    var projects = [
        {
            id: 1,
            name: 'Projeto 1',
            image: 'projeto1.jpg',
            subject: 'Programação Server Side',
            description: 'Breve descrição do projeto 1',
        },
        {
            id: 2,
            name: 'Projeto 2',
            image: 'projeto2.jpg',
            subject: 'Teste de Software',
            description: 'Breve descrição do projeto 2',
        },
        {
            id: 3,
            name: 'Projeto 3',
            image: 'projeto3.jpg',
            subject: 'Rede de Computadores',
            description: 'Breve descrição do projeto 3',
        }
    ];

    return projects;
}

module.exports = {
    getProjects: getProjects
}