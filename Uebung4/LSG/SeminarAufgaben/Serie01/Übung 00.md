# MMWP2024 - Übungsserie 00 - Einführung und Tools

Lehrveranstaltung Multimediale Webprogrammierung <br> Wintersemester 2024/25

Link zum Kurs: https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/46557921282 <br>
Zum Vertiefen der Kenntnisse: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML

### 1. Entwicklertools

Richten Sie sich eine Entwicklungsumgebung ein, welche Sie zum Erstellen von Webinhalten, CSS und JS benutzen wollen. Tauschen Sie sich hierfür mit Kommilitonen aus. 

Die im PC-Pool vorhandenen Tools sind:
* Notepad++
* VisualStudioCode
* Browser-IDEs (Lauffähige IDEs im Browser)
* Adobe DreamWeaver CC
* Phase5 in aktueller Version (Icon: „HTML-Editor“ auf Desktop) (http://www.phase5.info/)
* Atom.io (Veraltet)
* Altova XMLspy

Machen Sie sich mit den Funktionen und Möglichkeiten der ausgewählten IDE vertraut und Erstellen Sie ein erstes Webprojekt mit mindestens einer HTML-Datei, sowie einer separaten Javascript-Datei und einer StyleSheets-Datei. Binden Sie diese Daten in die HTML-Struktur ein und öffnen Sie das Resultat im Browser über den File-Link oder starten Sie hierfür einen lokalen Webserver über Ihre IDE.

### 2. Browserconsole

Gehen Sie auf die HTWK Seite und Öffnen Sie die Browserconsole über F12, oder über das Browsertab.

Laden Sie sich den Quellcode der Seite https://poetter-sebastian.github.io/MMWP-2024/pages/VL01.html herunter und betrachten Sie die heruntergeladene Daten und ändern Sie die Vortragsfolien oder Ergänzen Sie eigene Foliensätze. Öffnen Sie das Ergebnis über den File-Link im Browser oder starten Sie hierfür einen lokalen Webserver über Ihre IDE.

### 3. Webtools

In der Vorlesung wurden verschiedene Webtools vorgestellt. Testen Sie diese Tools an der HTWK-Seite aus und halten Sie die Ergebnisse und Hinweise der Webtools in einer Markdown-Datei fest und geben Sie mögliche Verbesserungen. Welche Erkenntnisse Lassen sich aus den Ergebnissen gewinnen?

### 4. Erstellen Sie eine Webseiten-Struktur in HTML mit folgenden Bestandteilen:

* 1x h1 – Überschrift
* 2x h2 – Überschrift
* 3+ Paragrafen (p) Text zwischen den Überschriften Formatierung des Textes in den Paragrafen mit em, span, b

### 5. Erstellen Sie neben der in 4. angelegten HTML-Datei eine CSS Datei. Importieren Sie diese, indem Sie im Header der HTML-Datei einen Link einfügen:

5.1 Formatieren Sie die h1 – Überschrift

5.2 Ändern Sie den Selektor aus Teilaufgabe 5.1 auf den h2 Tag. Betrachten Sie die Änderung.

5.3 Ändern Sie den Selektor auf die Wildcard *. Betrachten Sie die Änderung.

5.4 Ändern Sie den Selektor auf die gleichzeitige Verwendung der h1 und h2 Tags, indem Sie diese an die Stelle des Selektors stellen und mit einem Komma trennen. Betrachten Sie die Änderung.

### 6. CSS stellt die Möglichkeit zur Verwendung von Klassen und IDs als Selektor zur Verfügung.

6.1 Definieren Sie in Ihrer CSS-Datei eine Klasse paragraf.

6.2 Fügen Sie den Paragrafen die Klasse hinzu, indem Sie den Klassennamen dem Tag hinzufügen:

6.3 Fügen Sie einem der Paragrafen eine ID hinzu. Das Deklarieren von IDs entspricht dem Hinzufügen von Klassen:

6.4 Die genaue Formatierung der Elemente wird durch verschiedene Mechanismen bestimmt, sobald mehrere Quellen diese Elemente formatieren.

Belesen Sie sich zu den Konzepten der Cascade, Vererbung sowie Spezifität
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance

### 7. CSS stellt eine Reihe von Möglichkeiten zur Farbselektion zur Verfügung. Die Auswahl von Farben über vordefinierte Namen haben Sie bereits kennengelernt.

7.1 Wählen Sie eine Farbe aus. Definieren Sie die Textfarbe der Paragrafen mit dieser Farbe.

7.2 Neben den Informationen zum Rot-, Grün- und Blau-Anteil der Farbe kann mit dem Alphakanal die Deckkraft reguliert werden. In der Acht-Werte-Notation wird der Alphakanal mit dem 7. und 8. Wert definiert. Es handelt sich ebenfalls um Hexadezimalwerte. Definieren Sie für jeden Paragrafen eine eigene Deckkraft.

### 7. Definieren Sie für jeden Paragrafen eine andere Art von Default Font. Informieren Sie sich, welche Arten von Fonts und Default Fonts Ihnen zur Verfügung stehen.

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

### 8. Definieren Sie für jeden Paragrafen und jede Formatierung (span, em etc.) eine andere Schriftgröße.

8.1 Definieren Sie die Schriftgröße in Pixeln. Pixel sind eine absolute Angabe.

8.2 Definieren Sie die Schriftgröße in Ems. 1em entspricht der Standardtextgröße bzw. der Textgröße des Parent-Elements des Elements, für die die Textgröße definiert wird. 2em entspricht dann einer Verdopplung. Beobachten Sie die Veränderung zu den Ergebnissen von Teilaufgabe 8.1.

8.3 Definieren Sie die Schriftgröße in Rems. Rem Werte werden relativ zum root HTML-Element definiert. Beobachten Sie die Veränderung zu den Ergebnissen von Teilaufgabe 8.1 und 8.2.

### 9. CSS Elemente sind von Boxen umgeben, um die Gestaltung von Layouts zu vereinfachen und Elemente aufeinander abzustimmen.

9.1 Visualisieren Sie das Boxdesign, indem Sie für die verschiedenen Tags eine Umrandung hinzufügen. Färben Sie die verschiedenen Tags unterschiedlich.

9.2 Platzieren Sie Ihre Paragrafen innerhalb eines div-Elements und visualisieren Sie die Umrahmung der Paragrafen, indem Sie eine Umrandung hinzufügen.

9.3 Setzen Sie für das div-Element die display-Eigenschaft und experimentieren Sie mit verschiedenen Parametern. Wie verändert sich die Anordnung der Elemente innerhalb des div mit den Parametern?
https://developer.mozilla.org/en-US/docs/Web/CSS/display

### 10. Boxen verfügen über verschiedene Parameter, die die Darstellung beeinflussen.

* Content
* Padding
* Border
* Margin
* Height
* Width

Experimentieren Sie selbstständig mit den Parametern einer Box und informieren Sie sich über die unterschiedlichen Möglichkeiten zur Manipulation dieser.

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model
