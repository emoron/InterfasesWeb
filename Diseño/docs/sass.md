## Sass

* Sass significa "Extension CSS Language" o "Css con superpoderes"
* Transcompiler Languague
* Similar a CoffeScript
* Se instala a traves del sistema de Ruby Gem

```

 gem install sass

 $sass --version

```

```bash
sass test.scss
```

* Aplicaciones utiles para Sass se encuentra [scout](mhs.github.io/scout-app/) es una aplicación que facilita el manego de SAss y [Compass](Compass.html)     
```
sass -watch .
```
Esto nos permitirá vigilar los cambios en los archivos scss y generar automaticamente la salida __css__ de nuestro proyecto.
## Nesting

**Practica 1.** Escribir un pequeño blog usando Sass.  
1. Puedes obtener el codigo [Git Source](https://github.com/emoron/ProgrammingEveryone/commit/72b8cf6e203c56c54197b941380ca3025e87fe4f)  
2. Creamos una Hoja de Estilo de manera similar a [Git Source](https://github.com/emoron/ProgrammingEveryone/blob/66a43eb8ea0ad9898cf1031238009d918c319df3/Dise%C3%B1o/src/main.scss).  
3. De manera similar se agregan estilos para casa elemento del documento.  
4. Ahora incluiremos [modernizr](https://modernizr.com/) para permitir compatibilidad con otros browser. Modernizr se encarga de detectar las características que nuestro navegador ofrece. [Git Source](https://github.com/emoron/ProgrammingEveryone/commit/bcc104b020c134ec88830b417c16335a3b6fd1f1)    
5. 