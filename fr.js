const year = 1984;

function learn(age) {
    let currentYear = Math.floor((age - year) / 12) % 5;
    let currentAnimal = (age - year) % 12;
    let color = '';
    let animal = '';
    switch (currentYear) {
        case 0:
            color = 'зеленый';
            break;
        case 1:
            color = 'красный';
            break;
        case 2:
            color = 'желтый';
            break;
        case 3:
            color = 'белый';
            break;
        case 4:
            color = 'черный';
            break;
    }

    switch (currentAnimal) {
        case 0:
            animal = 'крыса';
            break;
        case 1:
            animal = 'корова';
            break;
        case 2:
            animal = 'тигр';
            break;
        case 3:
            animal = 'заяц';
            break;
        case 4:
            animal = 'дракон';
            break;
        case 5:
            animal = 'змея';
            break;
        case 6:
            animal = 'лошадь';
            break;
        case 7:
            animal = 'овца';
            break;
        case 8:
            animal = 'обезьяна';
            break;
        case 9:
            animal = 'курица';
            break;
        case 10:
            animal = 'собака';
            break;
        case 11:
            animal = 'свинья';
            break;
        default:
            animal = 'неизвестно';
            break;
    }
    return color + ' ' + animal;
}

console.log(learn(1984));
