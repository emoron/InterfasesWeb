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


### Repositorio de Ejemplo

Podemos descargar el repositorio https://github.com/barryclark/jekyll-now para inicializar nuestro proyecto.

Local Development

## Desarrollo Local


Instale Jekyll y ademas ```gem install github-pages```estos plugins permiten desarrollar paginas en su maquina local incluidos el Sass, Jekyll.


Clone su repositorio   
```
git clone git@github.com:yourusername/yourusername.github.io.git
```

* Para servir el sitio y ver los cambio usar:
```jekyll serve
```

* Visitar http://127.0.0.1:4000/  
* Comente los cambios en la rama principal de su usuario Github las páginas serán reconstruidas y servidas ahi.


## Referencias
* https://github.com/barryclark/jekyll-now
* http://jmcglone.com/guides/github-pages/
* https://24ways.org/2013/get-started-with-github-pages/
* http://oli.jp/2011/github-pages-workflow/
* http://andytaylor.me/2012/11/03/installing-ruby-and-jekyll/
* http://www.thinkful.com/learn/a-guide-to-using-github-pages/
* https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/
* https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/
* http://colorlabsproject.com/tutorials/how-to-create-simple-plugin-tabs-widget/
