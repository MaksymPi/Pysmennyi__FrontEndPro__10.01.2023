let yearOfBirth = prompt("Твій рік народження?");
let yourCity = prompt("В якому місті ти живешь?");
const kindOfSport = prompt("Який твій улюблений вид спорту?");

switch (yearOfBirth){
    case null:
        yearOfBirth = 'Шкода, що Ви не захотіли ввести рік народження!'  
    break; 
}
switch (yourCity) {
    case 'Київ':
        switch(kindOfSport) {
            case 'Плавання':
                alert(`${yearOfBirth}\nТи живеш у столиці України!\nКруто! Хочеш стати як Майкл Фелпс?`);
                break;
            case 'Теніс':
                alert(`${yearOfBirth}\nТи живеш у столиці України!\nКруто! Хочеш стати як Рафаэль Надаль?`);
                break;
            case 'Бокс':
                alert(`${yearOfBirth}\nТи живеш у столиці України!\nКруто! Хочеш стати як Александр Усик?`);
                break;
            case null:
                alert(`${yearOfBirth}\nТи живеш у столиці України!\nШкода, що Ви не захотіли ввести свій улюблений вид спорту!`);
                break;
            default:
                alert(`${yearOfBirth}\nТи живеш у столиці України!\nВам подобається ${kindOfSport}`);
                break;
        }
        break;
    case 'Вашингтон':
        switch(kindOfSport) {
            case 'Плавання':
                alert(`${yearOfBirth}\nТи живеш у столиці США!\nКруто! Хочеш стати як Майкл Фелпс?`);
                break;
            case 'Теніс':
                alert(`${yearOfBirth}\nТи живеш у столиці США!\nКруто! Хочеш стати як Рафаэль Надаль?`);
                break;
            case 'Бокс':
                alert(`${yearOfBirth}\nТи живеш у столиці США!\nКруто! Хочеш стати як Александр Усик?`);
                break;
            case null:
                alert(`${yearOfBirth}\nТи живеш у столиці США!\nШкода, що Ви не захотіли ввести свій улюблений вид спорту!`);
                break;
            default:
                alert(`${yearOfBirth}\nТи живеш у столиці США!\nВам подобається ${kindOfSport}`);
                break;
        }
        break;
    case 'Лондон':
        switch(kindOfSport) {
            case 'Плавання':
                alert(`${yearOfBirth}\nТи живеш у столиці Англії!\nКруто! Хочеш стати як Майкл Фелпс?`);
                break;
            case 'Теніс':
                alert(`${yearOfBirth}\nТи живеш у столиці Англії!\nКруто! Хочеш стати як Рафаэль Надаль?`);
                break;
            case 'Бокс':
                alert(`${yearOfBirth}\nТи живеш у столиці Англії!\nКруто! Хочеш стати як Александр Усик?`);
                break;
            case null:
                alert(`${yearOfBirth}\nТи живеш у столиці Англії!\nШкода, що Ви не захотіли ввести свій улюблений вид спорту!`);
                break;
            default:
                alert(`${yearOfBirth}\nТи живеш у столиці Англії!\nВам подобається ${kindOfSport}`);
                break;
        }
        break;
    case null:
        switch(kindOfSport) {
            case 'Плавання':
                alert(`${yearOfBirth}\nШкода, що Ви не захотіли ввести своє місто!\nКруто! Хочеш стати як Майкл Фелпс?`);
                break;
            case 'Теніс':
                alert(`${yearOfBirth}\nШкода, що Ви не захотіли ввести своє місто! Хочеш стати як Рафаэль Надаль?`);
                break;
            case 'Бокс':
                alert(`${yearOfBirth}\nШкода, що Ви не захотіли ввести своє місто!\nКруто! Хочеш стати як Александр Усик?`);
                break;
            case null:
                alert(`${yearOfBirth}\nШкода, що Ви не захотіли ввести своє місто!\nШкода, що Ви не захотіли ввести свій улюблений вид спорту?`);
                break;
            default:
                alert(`${yearOfBirth}\nШкода, що Ви не захотіли ввести своє місто!\nВам подобається ${kindOfSport}`);
                break;
        }
        break;
    default:
        switch(kindOfSport) {
            case 'Плавання':
                alert(`${yearOfBirth}\nТи живеш у місті ${yourCity}!\nКруто! Хочеш стати як Майкл Фелпс?`);
                break;
            case 'Теніс':
                alert(`${yearOfBirth}\nТи живеш у місті ${yourCity}!\nКруто! Хочеш стати як Рафаэль Надаль?`);
                break;
            case 'Бокс':
                alert(`${yearOfBirth}\nТи живеш у місті ${yourCity}!\nКруто! Хочеш стати як Александр Усик?`);
                break;
            case null:
                alert(`${yearOfBirth}\nТи живеш у місті ${yourCity}!\nШкода, що Ви не захотіли ввести свій улюблений вид спорту!`);
                break;
            default:
                alert(`${yearOfBirth}\nТи живеш у місті ${yourCity}!\nВам подобається ${kindOfSport}`);
                break;
        }
        break;
}

