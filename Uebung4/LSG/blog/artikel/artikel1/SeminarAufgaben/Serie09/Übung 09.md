# MMWP2024 - Übungsserie 09 - Input events und Formulare

Lehrveranstaltung Multimediale Webprogrammierung <br> Wintersemester 2024/25

Link zum Kurs: https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/46557921282 <br>
Zum Vertiefen der Kenntnisse: https://www.w3schools.com/html/html_forms.asp und https://www.w3schools.com/js/js_validation.asp

### 1. Erstellen Sie ein Formular zur Benutzerregistrierung mit HTML-Formularelementen und Validierung der Formulareingaben mit JavaScript

Verwenden Sie [HTML5-Input-Elemente](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), um die Struktur des Registrierungsformulars mit den folgenden Eingabefeldern zu erstellen:

* Vollständiger Name (Texteingabe)
* E-Mail-Adresse (E-Mail-Eingabe)
* Passwort (Passworteingabe)
* Passwort bestätigen (Passworteingabe)
* Geburtsdatum (Datumseingabe)
* Land (Dropdown/Auswahl)
* Allgemeine Geschäftsbedingungen (Checkbox)

#### 1.1 Benutzen Sie CSS-Regeln, um das Formular zu gestalten und es responsive zu gestalten.
Hierfür können Sie z.B. [Bootstrap verwenden](https://getbootstrap.com/docs/5.3/forms/overview/).

Achten Sie dabei auch auf verschiedene Ansichten auf Mobilgeräten, oder Desktop.

#### 1.2 Erweitern Sie das Formular mit Javascript, um jedes Eingabefeld anhand der angegebenen Kriterien beim Abschicken zu validieren

Schreiben Sie [JavaScript-Code zur Validierung](https://www.w3schools.com/js/js_validation.asp) der Formulareingaben vor der Übermittlung. 
Verwenden Sie zusätzlich [HTML5-Validierungsattribute](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) wie required, minlength, maxlength, pattern, min und max, um Einschränkungen für die Eingabefelder zu erzwingen.

Neuerdings ist es auch Möglich [reguläre Ausdrücke](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) (RegEx, bzw. Pattern-Matching) für die Auswertung einzusetzen. 

Folgende anforderungen werden an das Formular gestellt:
* Vollständiger Name: Darf nicht leer sein
* E-Mail-Adresse: Muss ein gültiges E-Mail-Format sein
* Passwort: Muss mindestens 8 Zeichen lang sein
* Passwort bestätigen: Muss mit dem Feld Passwort übereinstimmen
* Geburtsdatum: Darf nicht leer sein
* Land: Darf nicht leer sein
* Bedingungen und Konditionen: Müssen angekreuzt sein
* Zeigen Sie geeignete Fehlermeldungen für jede Validierungsregel an

Um Formulare und den [Submit-Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit) für Validierung zu blockieren, gibt es die [Funktion "preventDefault()"](https://www.w3schools.com/jsref/event_preventdefault.asp), welche beim [Submit-Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) benutzt werden kann.
Das ["novalidate" Attribute](https://www.w3schools.com/tags/att_form_novalidate.asp) kann, für eine Javascript-Auswertung verwendet werden.

### 2. Verarbeitung von Formulardaten

Verwenden Sie JavaScript, um die [Formulardaten zu sammeln](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) und vor dem endgültigen Absenden in einem zusammenfassenden Abschnitt anzuzeigen und Implementieren Sie eine [Reset-Taste](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset), um alle Formulareingaben zu löschen.

Das [Submit-Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) könnte hierfür geeignet sein, um alle Input-Daten zu erhalten, um [Form-Daten](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll) abzufragen.

### 3. Erweitere Javascript-Funktionen und tracking

Erweitern Sie die Formularfunktion mit Tracking in Javascript um folgende Kriterien:

* Eine Log-Funktion, wann die Nutzenden den Focus auf einen Input haben und mit ihnen interagieren
* Eine Log-Funktion mit Zeitangabe, wie lange es gedauert hat das Formular vollständig auszufüllen
* Protokollierung der Ereignisse beim Absenden des Formulars

Dies könnte über [Events der Inputs](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event) und einen [Query-Selektor](https://www.w3schools.com/jsref/met_document_queryselector.asp) realisiert werden.

## Selbststudienzeit/Weitere Schritte:

Nutzen Sie die Tutorials für eine weitere Vertiefung: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form und https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types