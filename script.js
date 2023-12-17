console.log('dziala!')
// zadanie 1
const value = 1;
// value = 2;

console.log('123')

let firstName = '123';
firstName = 'nowa wartosc';

console.log(firstName)

const func = () => {
  console.log('123') 
}

// zadanie 3
const items = [123, 'test', true]
items.push(null);
console.log(items)

// Utwórz nowy element H2 w sekcji pierwszej oraz nadaj tekst dla tego
// elementu za pomoca el.textContent = 'text'
// - wypisz utworzony element w konsoli
const sectionHeader = document.createElement('h2');
sectionHeader.textContent = 'header pierwszej sekcji test';

console.log(sectionHeader);

const hoverSection = document.querySelector('.hover-section');
hoverSection.append(sectionHeader)

// click event
const button = document.querySelector('.hover-section > button');
const logText = () => {
  console.log('event click wykonany!');
}
button.addEventListener('click', logText);

// change event
// pobranie input za pomoca id
const input = document.querySelector('#nameInput');

// utworzenie funkcji ktora czyta value naszego inputa
const onChange = (event) => {
  console.log(event.target.value)
};

// dodanie eventu change ktory wywoluje funkcje onChange utworzona powyzej
input.addEventListener('change', onChange);

// submit event
// Utworz formularz z jednym inputem oraz przyciskiem z typem submit
// - Pobierz formularz w JS
// - Utworz funkcje która pobierze oraz wyswietli dane z formularza
// - Dodaj funkcje do formularza wywolana na event submit

// pobieramy formularz
const userForm = document.querySelector('#user-form');
const userInputName = document.querySelector('#first-name');

// utworzenie funkcji ktora bedzie wywolana na event submit
const onSubmit = (event) => {
  event.preventDefault();
  console.log(userInputName.value);
}

// dodac funkcje do zdarzenia submit na formularzu
userForm.addEventListener('submit', onSubmit)