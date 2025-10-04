const student = {
    firstName: 'Liza',
    lastName: 'Vakulenko',
    grades: {
        ukrainian: 100,
        history: 88,
        biology: 75,
        chemistry: 70
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set changeLastName(newLastName) {
        this.lastName = newLastName;
    },

    getAverageGrade: function () {
        const values = Object.values(this.grades);
        const sum = values.reduce((acc, grade) => acc + grade, 0 );
        return sum / values.length;
    }
};

console.log('Full name:', student.fullName);

student.changeLastName = 'Valiuk';
console.log('New name:', student.fullName);

console.log('Average grade:', student.getAverageGrade());

