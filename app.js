console.log('worked');
const vasya = {
    id:234,
    name: 'Vasya',
    avatarUrl: 'https://placekitten.com/50/50',

};

const first = {
    id: 242342, // свойства объекта оформляются так
    author: vasya,
    content: 'большой контент!',
    likes: 4,
    likedByMe: true,
    views: 4,
};

// . -> доступ к свойствам объекта
console.log(first.id);

first.id = 999;
console.log(first.id);

const comment = {
    id:24234,
    author: vasya,
    created: '18 сен в 6:32',
    likes: 0,
};

console.log(comment.author.name);

const id = 242342;
const avatarUrl = 'https://placekitten.com/50/50';
const authorName = 'ИТ-академия';
const authorUrl = 'https://vk.com/itacademykzn';

const publicationDate = '10 сен в 16:26';
const content = 'большой контент!';
const likes = 4;//todo надо хранить людей
const reposts = 1; //todo если 0 то ничего не показывается
const views = 689;
// todo: комментарий

