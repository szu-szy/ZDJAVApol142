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