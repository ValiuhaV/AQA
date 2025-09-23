const surname = 'Shevchenko';

if (surname !== 'Shevchenko') {
    console.log('Ukrainian');
} else {
    console.log('Foreigner');
};

const sum = 3500;

if (sum < 1000) {
    console.log('Standard');
} else if (sum > 2000) {
    console.log('VIP');
} else if (sum > 3000) {
    console.log('Premium');
} else {
    console.log('Lux');
};

const grade = 8;
if (grade > 10) {
    console.log('Excellent');
} else if (grade < 10 && grade >= 8) {
    console.log('Good');
} else if (grade < 8 && grade > 5) {
    console.log('Satisfactory');
} else if (grade < 5) {
    console.log('Fail');
};
