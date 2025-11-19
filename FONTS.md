# Polices utilisées

## Bubble Body Neue

La police **Bubble Body Neue** est utilisée pour tous les titres (en majuscules, bold, style minimaliste moderne).

Actuellement, le site utilise **Bubblegum Sans** comme alternative disponible sur Google Fonts.

### Pour utiliser la vraie police Bubble Body Neue :

1. Si vous avez le fichier de la police, placez-le dans un dossier `fonts/`
2. Ajoutez dans `css/style.css` :

```css
@font-face {
  font-family: 'Bubble Body Neue';
  src: url('../fonts/BubbleBodyNeue-Bold.woff2') format('woff2'),
       url('../fonts/BubbleBodyNeue-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}
```

3. La variable CSS `--font-titre` utilisera automatiquement cette police.

## Inter / Space Grotesk

Ces polices sont utilisées pour les paragraphes et le texte courant. Elles sont chargées via Google Fonts dans chaque page HTML.


