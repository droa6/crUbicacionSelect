# crUbicacionSelect
Javascript para elegir la ubicacion usando select anidados

#### Se brinca su uso tal cual, sin garantía. Por favor comentar si hay alguna corrección necesaria en cuanto a los datos desplegados o un error de código.

## Modo de uso:

Agregue la siguiente porción de HTML para añadir los select:

```
<form>
<select name="provincia" id="provincia"></select>
<select name="canton" id="canton"></select>
<select name="distrito" id="distrito"></select>
<select name="codigo" id="codigo"></select>
</form>
```

Edite el JS, en la ultima línea, de ser necesario con los valores que se ajusten a sus select si ya cuenta con ellos

```
$(document).ready(function() {
	setLocalizationSelects("provincia","distrito","canton","codigo");
});
```

Agregue el js a su página:

```
<script src="js/crUbicacionSelect.js"></script>
```

Ejemplo:
http://jsfiddle.net/xpvt214o/525744/
