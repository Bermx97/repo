
const randomFromArr = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const dice = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '^', '10', '11', '%', '12', '13', '14', '15', '16', '∞', '17', '+' , '18', '19', '20', '22', '23', '24', '25', '26', '27', '28', '29', '30', '0'];
const diceThrow = randomFromArr(dice);

const pozytywy1 = ['Gratulacje', 'Ale fart', 'Super', 'Na szczęście'];
const negatywy1 = ['Oj', 'Ups...', 'Niestety', 'Przykro mi'];
const pozytywy = ['dzięki temu'];
const negatywy = ['przez to'];

const pozytywyczasowniki = ['zyskujesz', 'znajdujesz' , 'wygrywasz w karty', 'wygrzebujesz' , 'odkrywasz', 'otrzymujesz', 'wybierasz', 'podnosisz'];
const negatywyczasowniki = ['tracisz', 'gubisz', 'przegrywasz w karty', 'upuszczasz', 'wyrzucasz', 'przepijasz'];

const rzeczownikiMęskie = ['miecz', 'kolczyk', 'łuk', 'wiedźmiński miecz', 'medalion z głową wilka', 'eliksir', 'medalion', 'kieliszek', 'rewolwer', 'słownik', 'pistolet', 'pociąg', 'stanik', 'pancerz odprysku', 'fabrial','szafir', 'rubin', 'telefon', 'diament', 'kilof', 'rower', 'hełm'];
const rzeczownikiNijakie = ['ostrze honoru', 'mydło', 'auto', 'burzowe światło', 'piwo', 'złoto', 'srebro'];
const rzeczownikiŻeńskie = ['szklankę', 'monetę', 'wódkę', 'świeczkę','kość'];
const rzeczownikiNiemęskoosobowe = ['majtki', 'buty'];

let wszystkieRzeczowniki = []
wszystkieRzeczowniki.push(...rzeczownikiMęskie, ...rzeczownikiNijakie, ...rzeczownikiŻeńskie, ...rzeczownikiNiemęskoosobowe)
const randomRzeczownik = randomFromArr(wszystkieRzeczowniki)

const pierwszeSłowo = () => {
    const i = []
    const random = Math.floor(Math.random() * 2)
    if (random === 1) {
        i.push(randomFromArr(pozytywy1));
        i.push(randomFromArr(pozytywy));
        i.push(randomFromArr(pozytywyczasowniki));
    } else if (random === 0) {
        i.push(randomFromArr(negatywy1));
        i.push(randomFromArr(negatywy));
        i.push(randomFromArr(negatywyczasowniki));
    } else {
        return new Error('Something went wrong');
    } return i;
};

const final = pierwszeSłowo();
const rodzajRzeczy = (item) => {
    if (rzeczownikiMęskie.find((rzeczownik) => rzeczownik === item)) {
        return 'Męski';
    } else if (rzeczownikiNijakie.find((rzeczownik) => rzeczownik === item)) {
        return 'Nijaki';
    } else if (rzeczownikiŻeńskie.find((rzeczownik) => rzeczownik === item)) {
        return 'Żeński';
    } else {
        return new Error('I dont know what kind of rzeczownik it is');
    }
};


const finalneZdanie = `${final[0]}, wyrzuciłeś kością ${diceThrow}, ${final[1]} ${final[2]} ${randomRzeczownik}.`;
console.log(finalneZdanie)


document.querySelector('body').style.backgroundColor = "gray"
document.getElementById('tekstwdymku').innerHTML = finalneZdanie
document.getElementById('test').style.color = "gray"