const school = {
    name: '№8',
    address: 'вул. Шевченка, 1',
    students: [
        {name: 'Valentyna', grade: 11},
        {name: 'Anna', grade: 10},
        {name: 'Yana', grade: 7},
        {name: 'Dmytro', grade: 5},
        {name: 'Oleksandr', grade: 1}
    ],
    director: {
        name: 'Nadia Ivanivna',
        experience: 30,
        children: [
            {name: 'Ivan', age: 5},
            {name: 'Maria', age: 10}
        ]
    },
    showInfo: function () {
        console.log(`Школа ${this.name}, директор: ${this.director.name}`);
        console.log('Список студентів:');
        this.students.forEach(student => {
            console.log(`- ${student.name}`);
        });
        console.log('Діти директора:');
        this.director.children.forEach(child => {
            console.log(`- ${child.name}`);
        });
    }
};

school.showInfo();
