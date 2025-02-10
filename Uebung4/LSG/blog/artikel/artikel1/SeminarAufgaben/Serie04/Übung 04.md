# MMWP2024 - Übungsserie 04 - Einführung in Javascript

Lehrveranstaltung Multimediale Webprogrammierung <br> Wintersemester 2024/25

Link zum Kurs: https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/46557921282 <br>
Zum Vertiefen der Kenntnisse: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

### 1. Erstellen Sie eine HTML-Datei mit den dazugehörigen grundlegenden Strukturelementen.

Erstellen Sie eine JavaScript-Datei script.js und verknüpfen Sie die beiden Dateien, indem Sie in der HTML-Datei das src-Attribut setzen.

### 2. Die grundlegendsten Funktionen von JavaScript sind Ihnen bereits aus anderen Programmiersprachen bekannt. Neben Syntaxunterschieden gibt es einige besondere Konzepte zu betrachten.

2.1 Legen Sie ein HTML-Element ein, das Text kapselt und vergeben Sie für das Element eine ID.

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById?retiredLocale=de

2.2 Mithilfe von Methoden wie getElementById können Elemente aus einem Dokument ausgewählt und eine Referenz auf diese Elemente in Variablen gespeichert werden, mit denen weitergearbeitet werden kann.

Speichern Sie eine Referenz auf das in 2.1 angelegte Element in einer Variable Ihrer Wahl. Achten Sie auf die schwache Typisierung von JavaScript.

https://developer.mozilla.org/en-US/docs/Web/API/Document

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

2.3 Events ermöglichen es Ihnen Signale bei Aktionen in Ihrem Browser aufzunehmen und basierend auf diesen Aktionen zu handeln.

https://javascript.info/introduction-browser-events

2.4 Fügen Sie dem Element aus 2.1 und 2.2 einen EventListener hinzu, der eine Funktion changeText beim Anklicken des Elements ausführt.

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de

https://developer.mozilla.org/en-US/docs/Web/Events?retiredLocale=de

2.5 Implementieren Sie eine Funktion changeText, die aus einem Array von Strings zufällig einen solchen String auswählt und den Inhalt des Elements aus 2.1 und 2.2 durch diesen String ersetzt.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions?retiredLocale=de

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?retiredLocale=de

Achten Sie bei der Generierung von zufälligen Zahlen auf den Rückgabetyp der Funktionen, die Sie verwenden, sowie auf den Wertebereich.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random?retiredLocale=de

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor?retiredLocale=de

Nutzen Sie ggf. einen Debugger oder console.log, um sich einen Überblick zu verschaffen. Nutzen Sie die Browserwerkzeuge.

2.6 Experimentieren Sie mit der Position des in 1. verwendeten Tags. Platzieren Sie diesen vor und nach dem Element, das Sie in a) verwenden. Welches Verhalten können Sie feststellen?

### 3. JavaScript unterstützt das objektorientierte Programmierparadigma.

3.1 Legen Sie eine Klasse Person an, die zwei private Attribute hat: name und age. Legen Sie einen Konstruktor an, der diese beiden Attribute setzt. Legen Sie Getter an.

https://javascript.info/object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

3.2 Legen Sie in Ihrer HTML-Datei einen Text-Input, einen Zahl-Input, einen Button sowie Paragraphen für den Output an.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

3.3 Erstellen Sie eine statische Funktion genPerson, die die Attribute eines Person-Objekts aus den Input-Elementen entnimmt und ein Objekt daraus erzeugt. Geben Sie die Attribute des Objekts, die durch den Input gesetzt wurden, in den Paragraphen aus.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

https://javascript.info/constructor-new

### 4. Mit JavaScript lassen sich die Attribute von Elementen verändern.

4.1 Legen Sie ein von Ihnen gewähltes Bild und einen Button an.

4.2 Legen Sie eine Funktion an, die das Bild bei einem Button-Klick verschwinden lässt. Bei einem erneuten Klick auf den Button soll das Bild wieder sichtbar werden.

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

https://developer.mozilla.org/en-US/docs/Web/CSS/visibility

## Selbststudienzeit/Weitere Schritte:

Nutzen Sie die Tutorials für eine weitere Vertiefung:

https://www.w3schools.com/js/default.asp
