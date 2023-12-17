# Zadanie podsumowujące

Opis zadania:
Twoim zadaniem jest stworzenie strony internetowej, która będzie stanowić wirtualne portfolio zawierające informacje o Tobie jako specjaliście w danej dziedzinie. Strona powinna zawierać sekcje takie jak: o mnie, umiejętności, projekty, kontakt.

Wymagania projektowe:

1. Struktura strony:
   Nagłówek z Twoim imieniem lub tytułem zawodowym.
   Sekcja "O mnie" zawierająca krótki opis Twojego doświadczenia zawodowego, zainteresowań i celów zawodowych.
   Sekcja "Umiejętności" prezentująca listę Twoich głównych umiejętności lub technologii, którymi się posługujesz.
   Sekcja "Projekty" z miniaturami lub linkami do projektów, które stworzyłeś lub w których brałeś udział.
   Stopka zawierająca informacje kontaktowe, takie jak adres e-mail, numer telefonu i linki do profili społecznościowych.

2. Elementy HTML do wykorzystania:
   Nagłówki (<h1>, <h2>, itd.) do tytułowania sekcji.
   Znaczniki <p> do opisów w sekcji "O mnie" oraz do prezentacji umiejętności.
   Znaczniki list (<ul>, <li>) do prezentacji umiejętności w sposób listy.
   Znaczniki <img> lub <a> do prezentacji projektów.
   Znacznik <footer> do umieszczenia informacji kontaktowych w stopce.

3. Dodatkowe uwagi:
   Zadbaj o czytelność i estetykę strony.
   Użyj atrybutów alt w znacznikach <img> dla lepszej dostępności.
   Zastosuj podstawowe style CSS dla poprawienia wyglądu strony (opcjonalnie).

Dodatkowe uwagi:
Strona powinna być przejrzysta, zawierać istotne informacje dotyczące Twojego doświadczenia i umiejętności oraz być przyjazna dla użytkownika. To podstawowe portfolio, które może być później rozwijane i rozbudowywane o bardziej zaawansowane funkcje.

## 17.12

Zadanie praktyczne: Prosty kalkulator
Twoim zadaniem jest stworzenie prostego kalkulatora za pomocą HTML, CSS i JavaScript. Kalkulator powinien umożliwiać użytkownikowi wykonywanie prostych operacji arytmetycznych (dodawanie, odejmowanie, mnożenie, dzielenie).

Wymagania:
Interfejs użytkownika:

Stwórz prosty interfejs za pomocą HTML i CSS, zawierający pola do wprowadzania liczb oraz przyciski do operacji matematycznych (dodawania, odejmowania, mnożenia, dzielenia i równości).
Wyświetl wynik działania na ekranie kalkulatora.
Funkcjonalności kalkulatora:

Napisz kod w JavaScript, który obsłuży logikę kalkulatora.
Dodaj obsługę przycisków tak, aby użytkownik mógł wprowadzać liczby i wykonywać operacje arytmetyczne.
Wyświetl rezultat na ekranie kalkulatora po naciśnięciu przycisku równości.
Dodatkowe wskazówki:

Upewnij się, że kalkulator działa poprawnie dla różnych przypadków, takich jak dzielenie przez zero czy wykonywanie operacji na liczbach dziesiętnych.
Zadbaj o estetykę i czytelność interfejsu kalkulatora za pomocą CSS.

## Zadanie 2 - tworzenie listy osób

# HTML

- Utwórz liste osób (ul) wraz z elementami listy (li) - 3 przykladowe osoby wystarcza <<W HTML>>
- Utwórz formularz skladający sie z 2x input (imie, nazwisko) oraz przycisk o typie submit

# JS

- Pobierz liste z HTML po ID
- Pobierz formularz oraz inputy z formularza po ID
- Utwórz funkcje która pobiera wartosci inputów oraz tworzy nowy element <li> na bazie wartosci imienia i nazwiska
- do kazdego elementu <li> dodaj przycisk "usun" do którego dodamy event listener który usuwa nam element z listy za pomoca metody remove
- funkcja dodaje utworzony element <li> do listy osob <ul>
- dodaj funkcje do eventu submit na formularzu