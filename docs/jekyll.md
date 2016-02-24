# Generación de Sitios Estaticos

Cuando los proyectos requieren velocidad y simplicidad, construir un sitio no requiere la tecnología de un CMS. Mucho menos requiere una base de datos y utilizar complejos de esquemas de registro.

En torno al control de versiones cada vez es más común encontrar documentación generada automáticamente a partir de archivos de texto. Incluso se ha buscado la generación de investigación desde la experimentación a la presentación del documento final.

Para dirigir nuestro estudio hacia ruby, comenzaremos hablando de algunas herramientas de creación de sitios simples.

## Jekyll

Basado en ruby, utiliza páginas en formato markdown para su creación. Para la instalación de Jekyll puedes ver este [tutorial](http://andytaylor.me/2012/11/03/installing-ruby-and-jekyll/) para osx. Actualmente Jekyll no exite para windows, pero hay algunos proyectos similares.

### Instalación de Jekyll
```
gem install jekyll

```

Posteriormente creamos nuestro primer proyecto en Jekyll.

```
jekyll new christmas-recipes
```  
Y requerimos inicar el servidor para que actualize automáticamente los cambios.

```
jekyll serve --watch
```
