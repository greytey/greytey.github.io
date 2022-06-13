# Lernatelier 1306 React
Melanie Völlmin, Joel Jütte

# Informieren
### Anforderungsanalyse

Nr. | Muss / Kann | Anf.-typ | Anforderung |
----|-------------|----------|-------------|
1 | Muss | Funktional | Es gibt einen Countdown bis zu einem Datum, welches von einem Benutzer eigegeben wurde. |
2 | Muss	| Funktional | Der Countdown ist in Tagen, Stunden, Minuten und Sekunden aufgeteilt. |
3 | Kann |	Qualität | Oben rechts werden die Uhrzeit und das Datum angezeigt. |
4 | Muss |	Qualität | Minimalistisches schwarz-weiss Design. |
5 | Muss |	Qualität | Wird ein Datum in der Vergangenheit gewählt, erscheint folgende Meldung: «Please select a time in the future.». |
6 | Muss |	Funktional | Eingaben werden geprüft und Fehler behandelt. |
7 | Muss	| Rand | Git wird verwendet. |
8 | Muss |	Rand | Das Programm ist am 13.06.2022 fertig. |
9 | Muss	| Rand | Die Seite ist komplett auf Englisch gestaltet. |

Noch zu erarbeitende Grundlagen: 
React – Tutorial https://reactjs.org/docs/hello-world.html 

# Planen
### ToDo-Liste

Was | Wer |	Deadline | 
----|-----|----------|
Informieren	| Individuell |	16.05.2022 |
Planen | Zusammen | 16.05.2022 |
Entscheiden | Zusammen | 16.05.2022 |
Tutorial durcharbeiten |	Individuell |	23.05.2022 |
HTML Gerüst und Userinterface via Bootstrap |	Zusammen | 23.05.2022 |
React implementieren für die Uhr und die Berechnung |	Joel Uhr, Melanie Berechnung | 30.05.2022 |
Projekt mit GitHub Pages veröffentlichen | Zusammen |	13.06.2022 |

# Entscheiden
### Wieso haben wir uns für dieses Projekt entschieden? 
Einer unserer Lehrer hat uns im Unterricht einmal darauf aufmerksam gemacht, dass React in der Webentwicklung wichtig ist. Deshalb haben wir gedacht, wir nutzen die eher kurze Projektzeit effizient für einen kleinen React Exkurs. 

# Realisieren

# Testen
### Testfälle

Testfall | Voraussetzung | Input | Output |
---------|---------------|-------|--------|
1.1 | Seite geöffnet, User gibt ein Datum und eine Uhrzeit in der Zukunft ein. | User drückt auf «Enter»| Es erscheint ein Countdown zu dem angegebenen Zeitpunkt auf der Website. |
2.1	| Seite geöffnet, User gibt ein Datum und eine Uhrzeit in der Zukunft ein. | User drückt auf «Enter»| Es erscheint ein Countdown im Format «w days, x hours, y minutes and z seconds» |
3.1 | |Die Seite wird geöffnet.	Oben rechts steht die aktuelle Uhrzeit, welche sich sekündlich aktualisiert, und das aktuelle Datum inklusive Wochentag. |
4.1 | Seite geöffnet | Benutzer sieht sich die Webpage an	| Die Webpage erscheint in schwarz weiss Design |
5.1	| Seite geöffnet, User gibt ein Datum und eine Uhrzeit in der Vergangenheit ein.| User drückt auf «Enter» |	Es erscheint folgende Meldung: «Please select a time in the future.». |
6.1	| Seite geöffnet |	Der Benutzer gibt bei den Eingabefeldern Buchstaben ein |	Die Buchstaben erscheinen nicht, da die Felder nur Zahlen zulassen |
7.1	| - | 	https//github.com/greytey/countdown-timer-react wird geöffnet.| Der Programmcode ist auf Github und wurde öfters mittels git gepushed. |
8.1	| Es ist der 13.06.2022 |	Website wird geöffnet |	Die Seite ist fertig und entspricht allen Anforderungen. |
9.1	| Seite geöffnet | - | Sämtlicher Text auf der Webpage ist auf Englisch |

### Testbericht

Test-Nr. | Testfall	| Datum | Tester| Status| Bemerkung| Unterschrift |
---------|----------|-------|-------|-------|----------|--------------|
1.1.1 |	1.1 |	13.06.2022 |	Melanie Völlmin	| OK |	-	| M.S.V.|
2.1.1 |	2.1	| 13.06.2022 |	Melanie Völlmin	| OK |	-	| M.S.V.|
3.1.1 |	3.1	| 13.06.2022 | 	Melanie Völlmin | OK | 	-	| M.S.V.|
4.1.1 |	4.1 |	13.06.2022 |	Melanie Völlmin |	OK |	-	| M.S.V.|
5.1.1	| 5.1	| 13.06.2022 |	Joel Jütte |	OK |	-	| J.J|
6.1.1	| 6.1	| 13.06.2022 |	Joel Jütte |	OK |	-	| J.J|
7.1.1	| 7.1	| 13.06.2022 |	Joel Jütte |	OK |	-	| J.J|
8.1.1	| 8.1	| 13.06.2022 |	Joel Jütte |	OK |	-	| J.J|
9.1.1	| 9.1	| 13.06.2022 |	Joel Jütte |	OK |	-	| J.J|

### Fazit
Die Webpage ist veröffentlicht und voll funktionsfähig. 
