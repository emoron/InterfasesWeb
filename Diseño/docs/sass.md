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
