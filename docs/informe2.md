Universidad ORT Uruguay Facultad de Ingeniería       
Obligatorio 2 Fundamentos de Ingeniería de Software      
Nicolás de la Hoz (286894), Ignacio Sena (286403) y Renato Ríos (270586) 

# Informe entrega 2

## Construcción

La aplicación fue construida con HTML, CSS, Javascript, Node y se utilizó Bootstrap principalmente para realizar la navegación del sitio y Flaticon para los iconos.

Se implementaron las siguientes funciones principales de la misma:

- Consultar menús y menú del día 
- Mostrar registro
- Mostrar saldo disponible
- Realizar pedidos

Se codificaron las clases 'day', 'meal', 'order', 'responsable', 'student' y 'system', ademas de un archivo para pre-cargar datos.

- Day: contiene el nombre del día, un objeto fecha y una lista de platos correspondientes a dicho día, es decir, el menú del día.
- Meal: contiene el nombre del plato, su precio, los ingredientes que lo constituyen y las posibles advertencias de NO consumo de dicho plato. Ya sea por alergias, intolerancias u otros.
- Order: contiene el responsable que ordeno, para el alumno que ordeno, el plato ordenado y la fecha de dicha orden.
- Responsable: contiene el nombre del responsable, su saldo y una lista de los estudiantes a cargo de dicho responsable.
- Student: contiene la id de estudiante, su nombre, las prohibiciones de dicho estudiante y un registro de las ordenes para dicho estudiante.
- System: contiene una lista de dias, es decir, todos los menús a mostrar, el responsable actual que esta utilizando la aplicación y el pedido actual que esta realizando el responsable actual.

Aclaraciones: tanto los días como los responsables, estudiantes y platos, se esperan que sean ingresados correctamente ya que de eso se encargaría la otra parte le la aplicación, por tanto seguramente no se controlan todas las entradas de datos que sean incorrectas.

## Interfaz de usuario

Se realizó una interfaz de usuario orientada a dispositivos móviles y responsiva que soporta hasta 280 px de ancho. La misma se navega entre secciones y está separada lógicamente de las clases del ‘domain’. 

Con el objetivo de aplicar buenas prácticas de implementación de frontend se utilizó HTML semántico, se mantuvo una consistencia a la hora de nombrar las clases y los id’s de los elementos, se agregaron comentarios para mejorar la legibilidad del código y en el caso del CSS se utilizaron comentarios para dividir entre secciones.
 
El diseño de la aplicación se realizó de una manera sencilla y comprensible para que cualquiera pueda usar la aplicación sin problemas y entenderla rápidamente. Todo esto siguiendo una consistencia en los colores brindados y aplicándolos de manera uniforme sin que molesten a la hora de usar la aplicación. También informando para qué sirve cada elemento y en el caso de los iconos se agregaron sus respectivos textos para evitar múltiples interpretaciones de los mismos.

A su vez, para cumplir con los estándares de accesibilidad WCAG se empleó la extensión WAVE, y gracias a esta se pudo verificar y corregir todos los errores de accesibilidad. Finalmente, se utilizó HTML validator y CSS validator para validar que el código HTML y CSS estén correctos.

## Codificación

El equipo estableció como necesarias las extensiones ‘live server’ y ‘eslint’ para el desarrollo de este proyecto. Cada miembro configuró su equipo para disponer de las extensiones antes mencionadas.

Se aplicaron buenas prácticas de OOP separando la interfaz del dominio y definiendo para cada una de las clases del dominio una única responsabilidad, siendo la clase ‘System’ la encargada de “conectar todo”. Esto hace posible que si en algún momento es necesario modificar algo de la interfaz, las funcionalidades de la aplicación como tal seguirán funcionando ya que son independientes a esta.

Para realizar un análisis estático de código se empleó eslint y se lo configuró para trabajar con los estándares de codificación de Google, desactivando las reglas de 'linebreak-style' y 'require-jsdoc'. Esta herramienta aseguró el uso del estándar de codificación de Google y mejoró la legibilidad del código Javascript.

## Test unitario

Se utilizó Jest para realizar el test unitario y se probaron las clases del ‘domain’ logrando el 100% de cobertura. El test unitario fue muy útil, ya que permitió encontrar varios tipos de errores para así resolverlos en el momento.

## Reflexión

Nicolás de la Hoz: 
Aunque en esta entrega siguió habiendo incertidumbre sobre lo que se tenía que hacer y que no, me gusto realizar el proyecto, más que nada la parte de implementar ya que como equipo asumimos roles y cada uno se enfocó en lo que hacía mejor y le gustaba. Por ejemplo, yo me encargué del diseño de la página y de validarlo, además de realizar algunas de las funciones más ´sencillas´ y parte del test unitario; de mientras mis compañeros, se encargaron de realizar las clases del dominio y las funcionalidades más complejas del sistema. Esto permitió que cada uno se enfoque en algo puntual, (obviamente siguiendo un orden coherente y coordinado por todo el equipo) lo que hizo que nos concentremos en hacer de la mejor manera posible cada partecita de la aplicación. Por tanto estoy altamente satisfecho con el trabajo realizado (aunque no sea perfecto) y con mis compañeros de equipo.

Renato Ríos: 
En esta segunda entrega he podido realizar las siguientes reflexiones: 
- No hay tiempo para hacerlo todo, pero si aquello que es importante, por eso es necesario —esencial— priorizar. 
- Cada miembro de un equipo tiene un conjunto de habilidades y virtudes únicas, estas se pueden ver resaltadas o degradadas dependiendo de la dinámica del equipo. En este proyecto cada miembro realizó aquello que más le gusta (y por consecuencia, en lo que mejor se desempeñaba), con lo cual se lograron —a mi parecer— excelentes resultados.
- Las tecnologías cambian de un año a otro, pero es nuestra habilidad para aprender y adaptarnos, lo que tiene valor a largo plazo.

Ignacio Sena:
Coincidiendo con Nicolás, el hecho de que cada integrante se centró en un ámbito dentro de su zona de confort le añadió mucho interés a este trabajo. Pudimos por primera vez, aunque sea ligeramente, tocar lo que es un espacio de trabajo más profesional, utilizando Git y GitHub y repartiendo nuestras obligaciones para hacer las cosas más rápidas y de mejor manera. Hubo mucho aprendizaje sobre la marcha y de parte de nosotros mismos, tanto con las tecnologías anteriormente mencionadas como con JavaScript, esLint, Jest, etc, lo cual es vital en la carrera que estamos intentando llevar a cabo. Creo que después de este obligatorio somos, aunque sea, un poco más y mejores desarrolladores que antes. 

Técnicas aplicadas y aprendizajes:
Divide y vencerás, fue la técnica que aplicamos para poder enfrentar este proyecto. El tiempo era escaso y las implementaciones varias, por lo tanto, fue necesario priorizar aquello que íbamos a llevar a la realidad.

Uno de los aprendizajes que más destacamos es aprender a utilizar Git, cómo realizar testing con Jest y emplear ESlint, ya que nos parecen herramientas fundamentales para el desarrollo de proyectos grandes en equipo. Estas 3 herramientas facilitaron la colaboración entre el equipo y la obtención de código de calidad.
