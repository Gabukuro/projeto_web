
var getPosts = function() {
    var posts = [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu primeiro post',
            body: 'Meu primeiro post bla bla'
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu segundo post',
            body: 'Meu segundo post bla bla'
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'post3.jpg',
            description: 'Meu terceiro post',
            body: 'Meu terceiro post'
        }
    ];

    return posts;
}

module.exports = {
    getPosts: getPosts
}