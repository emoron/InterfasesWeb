# Bourbon - Sistema de Spoilers CSS

Para acelerar el diseño [Bourbon](http://bourbon.io) incluye una serie de funciones que permiten evitar la tarea de repetir código.

```
#Dentro de main.scss
@include "bourbon/_bourbon.scss"
```

Al generar el css no aparece nada a menos que incluyamos mixins de bourbon en  nuestro diseño.

```css
@include "bourbon/_bourbon.scss"

body{
  @include linear-gradient(to top,red,orange);
}
```
Igualmente Bourbon posee variables para incluir como el tipo de letra.

```css
@include "bourbon/_bourbon.scss"

body{
  @include linear-gradient(to top,red,orange);
  font-family: $lucida-grande;
}
```
