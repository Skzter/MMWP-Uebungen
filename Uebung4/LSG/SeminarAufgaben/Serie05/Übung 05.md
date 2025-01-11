# MMWP2024 - Übungsserie 05 - Einführung in Canvas

Lehrveranstaltung Multimediale Webprogrammierung <br> Wintersemester 2024/25

Link zum Kurs: https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/46557921282 <br>
Zum Vertiefen der Kenntnisse: https://www.w3schools.com/html/html5_canvas.asp

### 1. Legen Sie eine HTML und eine JS Datei an. Erstellen Sie einen Canvas und generieren Sie mit JS einem roten Rechteck.

Nachdem Sie das Element über seine ID gefunden haben, müssen Sie den drawing context aus dem Element extrahieren. Dafür steht getContext zur Verfügung.

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext

Für diese Aufgabe benötigen Sie einen 2D rendering context. Die Funktion getContext(„2d“) setzt diesen Kontext.

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

Definieren Sie anschließend mit fillStyle das Styling innerhalb von Formen auf dem Canvas.

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle

Definieren Sie anschließend das Rechteck. Achten Sie auf das Koordinatensystem des Canvas.

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

### 2. Erstellen Sie einen zweiten Canvas und füllen Sie diesen mit Text. Welches Verhalten können Sie feststellen, wenn Sie die Abgrenzungen des Canvas mit Ihrem Text überschreiten?

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text

### 3. Mit Canvas können Bilder dargestellt und bearbeitet und ergänzt werden, um bspw. Graphen zu erzeugen.

3.1 Erstellen Sie ein Bild einer von Ihnen gewählten Größe mit von Ihnen gewähltem Inhalt.

3.2 Erstellen Sie einen Canvas sowie eine Funktion, die den Context des Canvas auf 2D setzt.

3.3 Generieren Sie in der von Ihnen in 3.2 angelegten Funktion ein HTMLImageElement. Nutzen Sie dafür den Konstruktor der Klasse.

https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement

3.4 Nutzen Sie das onload-Event, um sicherzustellen, dass das Bild vor dem Zeichnen geladen wurde. Setzen Sie nach dem Laden und Zeichnen die Quelle für das Element auf das von Ihnen in 3.1 gezeichnete Element.

https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src

3.5 Mit dem Image-Objekt, das in 3.4 erstellt wurde, soll auf das von Ihnen in 3.1 erstellte Bild gezeichnet werden, das damit als Hintergrund dient. Beginnen Sie die Zeichnung des Image-Objekts auf dem Canvas mit der drawImage-Funktion.

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

3.6 Experimentieren Sie mit den Funktionen, die der CanvasRenderingContext2D zur Verfügung stellt und zeichnen Sie über das Image-Element auf den Canvas. Nutzen Sie bspw. lineTo und moveTo.

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo

3.7 Rufen Sie die Funktion, die Sie in den Teilaufgaben 3.2 bis 3.6 erstellt haben, auf und betrachten Sie den Canvas. Experimentieren Sie mit Veränderungen an der Zeichnung.

## 4. Mit Canvas lassen sich Animationen realisieren.

Experimentieren Sie mit einer der folgenden Animationen und vollziehen Sie diese nach:

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations

https://wiki.selfhtml.org/wiki/JavaScript/Canvas/Animation

Achten Sie insbesondere auf die Funktionsweide von requestAnimationFrame

https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

## Selbststudienzeit/Weitere Schritte:

Nutzen Sie die Tutorials für eine weitere Vertiefung: https://joshondesign.com/p/books/canvasdeepdive/title.html
