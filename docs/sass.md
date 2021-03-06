## Sass

* Sass significa "Extension CSS Language" o "Css con superpoderes"
* Transcompiler Languague
* Similar a CoffeScript.  

Sass puede ser utilizado en tres formas: command-tool, módulo para ruby independiente o como plugin para cualquier aplicación incluyendo ruby o Merb. El primer paso es intalar a través del sistema de Ruby Gem.  

```
 gem install sass
```
Si usted se encuenta en windows es necesario la instalación de [Ruby primero](http://rubyinstaller.org/downloads/)  

```shell
$ sass input.scss output.css
$ sass --version
```
Además es posible decirle a sass que vigile los cambios en los archivos de todo el directorio.
```bash
$ sass --watch input.scss:output.css
$ sass test.scss
$ sass --watch app/sass:public/stylesheets
```
Esto nos permitirá vigilar los cambios en los archivos scss y generar automáticamente la salida __css__ de nuestro proyecto.  
Aplicaciones utiles para Sass se encuentra [scout](mhs.github.io/scout-app/) es una aplicación que facilita el manejo de SAss y [Compass](Compass.html)     


## Nesting

Sas permite que las reglas CSS sean anidadas una con otra. La regla interna sólo aplica con el selector de la regla externa. Ejemplo:
```css
#main p {
  color: #00ff00;
  width: 97%;

  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}
```
la compilación entregará lo siguiente:
```css
#main p {
  color: #00ff00;
  width: 97%; }
  #main p .redbox {
    background-color: #ff0000;
    color: #000000; }
```


**Practica 1.** Escribir un pequeño blog usando Sass.  

1. Puedes obtener el codigo [Git Source](https://github.com/emoron/ProgrammingEveryone/commit/72b8cf6e203c56c54197b941380ca3025e87fe4f)  
2. Creamos una Hoja de Estilo de manera similar a [Git Source](https://github.com/emoron/ProgrammingEveryone/blob/66a43eb8ea0ad9898cf1031238009d918c319df3/Dise%C3%B1o/src/main.scss).  
3. De manera similar se agregan estilos para casa elemento del documento.  
4. Ahora incluiremos [modernizr](https://modernizr.com/) para permitir compatibilidad con otros browser. Modernizr se encarga de detectar las características que nuestro navegador ofrece. [Git Source](https://github.com/emoron/ProgrammingEveryone/commit/bcc104b020c134ec88830b417c16335a3b6fd1f1)    
5. Adicionalmente ahora probaremos el uso del operador '&' el cual nos permite copiar parte del codigo que se utiliza en cierta sección.[Git Source](https://github.com/emoron/ProgrammingEveryone/commit/83c974afe3222791992c25df00b081a34db58a0f)

## Variables, Mixins
* Las variables con contenedores de  valores
* Todas las variables inician con el signo de $.
```css
$primary-color
$secundary-color
```
Los mixins permiten reutilizar características de algún elemento que deseemos reutilizar en nuestro proyecto.

```css
.box {
  border-radius: 4px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px; }
.button {
  border-radius: 4px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  backgroud: #345; }
```
aplicando mixins tenemos:

```css
@mixin roundy{
    border-radius: 4px;
    border-top-right-radius:8px;
    border-top-left-radius: 8px;
}
.box {
    @include roundy;
}

.button{
    @include roundy;
    backgroud: #345;
}
```

Los Mixins tienen la característa que pueden recibir argumentos que son pasados al contenido del mismo.
```css
@mixin roundy($radius-one,$radius-two){
    border-radius: $radius-one;
    border-top-right-radius:$radius-two;
    border-top-left-radius: $radius-two;
}
```

Paletas de Colores

Sass puede generar paletas de colores, o basados en los colores complementarios, normalmente son seleccionades de la paleta de colores pero nos ayuda seleccionar automaticamente.

```
$background: #cd3cc1;
$text-color: #3ccd48;

body{
  background: $backgroud;
  font-family: sans-serif;
  color: $text-color;
}

a{
  color: $text-color;
}
```

Ahora agregamos definiciones para aclarar o obscurecer el texto.

```
$background: #cd3cc1;
$text-color: #3ccd48;

body{
  background: $backgroud;
  font-family: sans-serif;
  color: $text-color;
}

a{
  color: lighten($text-color, 20%);
}
```
```
$background: #cd3cc1;
$text-color: #3ccd48;
$darken-Title: darken($text-color);
body{
  background: $backgroud;
  font-family: sans-serif;
  color: $text-color;
}

a{
  color: $darken-Title;
}
```
Para seleccionar los colores complementarios.  


```
$background: #cd3cc1;
$text-color: complement(#3ccd48);
$darken-Title: darken($text-color);
body{
  background: $backgroud;
  font-family: sans-serif;
  color: $text-color;
}

a{
  color: $darken-Title;
}
```
<img src="img/Color-Complementary-2.png" alt="Drawing" style="width: 100px;"/>
<img src="img/Color-Complementary.png" alt="Drawing" style="width: 100px;"/>
Incluso podemos mezclar colores, para lograr efectos interesantes.  
```
$background: desaturate(#cd3cc1);
$text-color: mix(#369,#187;
$darken-Title: darken($text-color);
body{
  background: $backgroud;
  font-family: sans-serif;
  color: $text-color;
}

a{
  color: $darken-Title;
}
```

## Importación de Partes de CSS

En proyectos con gran cantidad de código es conveniente separar los componentes de la hoja de estilo, para su optimización. Sin embargo al momento de cargar el CSS en el navegador de los clientes, es conveniente mantener en un sólo archivo todas las declaraciones.

Ahora creamos un archivo ```_variables.scss```y colocaremos las declaraciones de colores. Debe llevar un ```underscore``` para que sass no genere el archivo ```css``` correspondiente.  

```
$background: desaturate(#cd3cc1);
$text-color: mix(#369,#187;
$darken-Title: darken($text-color);

```
Dentro del archivo de ```styles.scss``` colocaremos:

```Compass
@import "_variables.scss";

body{
  background: $backgroud;
  font-family: sans-serif;
  color: $text-color;
}

a{
  color: $darken-Title;
}
```

Como buena práctica se recomienda crear archivos separados según el contexto del documento de ésta manera el ```main.scss``` únicamente contiene la llamada a los archivos scss.

```Compass
@import "_variables.scss";
@import "_global.scss";
@import "pages/_about_us.scss";

```
> Recordar que el orden en el que aparecen, es sumamente importante. Ya que la declaración de variables no declaradas, causará error de compilación.  


## [Funciones SaSS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#function_directives)

Es posible definir funciones propias para realizar algunos calculos en nuestro diseño.

```Compass
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
```

## Media Queries

En ocaciones deseamos adaptar nuestro diseño para que responda al tamaño de la pantalla. El siguiente ejemplo se declaran clases para adaptarse [ver ejemplo](../src/mediaqueries.scss).  

```Compass
body{
  font-family: Helvetica;
}
.content{
  .sidebar{
    background: #999;
    color: white;
    padding: 5px;
    float: left;
    width: 100px;
    a{
      display: block;
      color:white;
    }
  }
  .main{
    padding: 5px;
    background: #bbb;
    display: @inline-block;
    width: 60%;
  }
}

@media (max-width:480px) {
  .content{
    .sidebar{
      width: 95%;
      a{
        display: inline;
      }
    }
    .main{
      width: 95%;
    }
}
```


Para evitar repetir código Sass nos permite incluir las media Queries dentro de declaraciones anidadas.

```Compass
body{
  font-family: Helvetica;
}
.content{
  .sidebar{
    background: #999;
    color: white;
    padding: 5px;
    float: left;
    width: 100px;
    a{
      display: block;
      color:white;
    }
    @media (max-width:480px) {
      width: 95%;
      a{
        display: inline;
      }
    }
  }
  .main{
    padding: 5px;
    background: #bbb;
    display: @inline-block;
    width: 60%;
  @media (max-width:480px) {
      width: 95%;
  }
}
}

```

## Funciones Iterativas

```Compass
.red{
  color:red;
}
.green{
  color: green;
}
.blue{
  color:blue;
}
```

Sass posee el operador ```#{variable}``` que puede ser utilizado para iterar sobre la variable.

Tal que podemos declarar un mixin de la siguiente forma:
```Compass
@mixin color_class($color){
  .#{$color}{
    color:$color;
    background-image: url("images/#{color}.jpg");
  }
}
```
Podemos incluir sentencias __@if__ para crear efectos en las sentencias.

```Compass

@mixin color_class($color){
  .#{$color}{
    color:$color;
    background-image: url("images/#{color}.jpg");
  @if $color == red {
    border: 1px solid black;
  }
  }
}
```  

Adicionalmente se tienen las sentencias __@else__ , __@else if __ para controlar el flujo del sass.

```Compass
@mixin box($width){
  @if $width > 100px;
    padding: 0px;
  } @else if $width == 100 px{
    padding: 5px;
  }
```
Sass posee tambien loops __@for__ y __@each__

```
@for $i from 1 through 100 {
  .box:nth-child(#{$i}){
    background:darken(white,$i);
  }
}

```

```
@each $member in tom,jhonny,colin, phil {
  .bandmember.#{$member}{
    backgroud:url("images/#{member}.jpg")
  }
}
```
## Mixins avanzados

Es posible que un mixin reciba una cantidad dinamica de argumentos usando una variable dinamica [Ejemplo](../src/mixins.scss).

```Compass
@mixin band($name,$members...){
  @each $member in $members{
    .#{$name}.bandmember.#{$member}{
      backgroud:url("images/#{member}.jpg")
  }
}

```
