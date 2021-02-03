const students = [
    {name: 'minhaj', id: 13},
    {name: 'ahmed', id: 23},
    {name: 'sadik', id:31},
    {name: 'joynul', id:41},
    {name: 'hifzur', id:51}
];


const names = students.map(s => s.name);
const ids = students.map(i => i.id);
const bigger = students.filter(s => s.id > 30);
const bigger1 = students.find(s => s.id > 30);

console.log(bigger1);