# MMWP2024 - Übungsserie 03 - Responsive Design und Media-Queries

Lehrveranstaltung Multimediale Webprogrammierung <br> Wintersemester 2024/25

Link zum Kurs: https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/46557921282 <br>
Zum Vertiefen der Kenntnisse: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

### 1. Öffnen Sie Ihren Browser und starten Sie den responsiven Design Modus.

https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/

1.1 Machen Sie sich mit dem Modus vertraut. Experimentieren Sie mit verschiedenen Ausrichtungen und Bildschirmgrößen

1.2 Öffnen Sie die Lösungen aus den vorherigen Seminaren und experimentieren Sie mit verschiedenen Bildschirmgrößen. Welches Verhalten können Sie bei welchen Aufgaben feststellen?

### 2. Legen Sie eine Webseite mit einem 4x4 Grid von Elementen unterschiedlicher Größe sowie einem Header und Footer an und füllen Sie die Elemente, Header und Footer, mit Text.

2.1 Konfigurieren Sie die Elemente so, dass bei einer Veränderung des Browserfensters bzw. des Bildschirms mithilfe des Responsive Design Modus die Lesbarkeit und Struktur der Elemente erhalten bzw. gleichbleibt.

https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks

https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design

### 3. Konfigurieren Sie Ihre Ergebnisse so, dass Sie sowohl im Portrait als auch im Landscape auf Smartphones, Tablets sowie auf Desktop-PCs ein ansprechendes und nutzbares Layout vorweisen.

3.1 Ab bestimmten Punkten reicht eine Veränderung der Größen im Grid nicht mehr aus, um eine korrekte Darstellung zu gewährleisten. Diese Punkte werden als breakpoints bezeichnet.
Experimentieren Sie mit der Darstellung auf Smartphones, insbesondere bei Drehung des Bildschirms.

Nutzen Sie Media Queries um an von Ihnen festgestellten Breakpoints die Eigenschaften zu verändern. Zögern Sie nicht an Breakpoints auf andere Gestaltungsformen als das 3x3 Grid zu wechseln. Das Grid muss jedoch für Desktop-PC-Bildschirmgrößen erhalten bleiben.

```css
@media (max-width: 1250px) {
    
}
```

Media Query für Angaben, die nur bei Viewport-Größen von 1250px oder weniger angewendet werden.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

https://developer.mozilla.org/en-US/docs/Glossary/Viewport

3.2 Konfigurieren Sie Ihre Darstellung so, dass bei einem Wechsel von Portrait auf Landscape Modus ein angemessenes Layout entsteht.

```css
@media all (orientation: landscape) {

}

@media (min-width: 30em) and (orientation: landscape) {
    
}
```

Nutzen Sie Angaben zu Maxima und Minima, relative Einheiten und Grid/Flexbox um Elemente von selbst so responsive wie möglich zu machen.

3.3 Integrieren Sie Bilder und Videos in Ihr Design. Konfigurieren Sie diese Elemente ebenfalls mit einem responsiven Verhalten.

3.4 Konfigurieren Sie den von Ihnen verwendeten Text mit einem responsiven Verhalten.

## Selbststudienzeit/Weitere Schritte:

Nutzen Sie die Tutorials für eine weitere Vertiefung:

https://www.w3schools.com/css/css_rwd_mediaqueries.asp
