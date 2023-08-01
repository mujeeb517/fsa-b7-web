// switch 
function print(age) {
    if (age === 10) {
        console.log('Child');
    }
    else if (age === 20) {
        console.log('Young');
    }
    else if (age === 30) {
        console.log('Still young');
    }
    else {
        console.log('Else block');
    }

    switch (age) {
        case 10:
            console.log('Child');
            break;
        case 20:
            console.log("young");
            break;
        case 30:
            console.log('Still young');
            break;

        default:
            console.log('Default block');
            break;
    }
}


print(50);