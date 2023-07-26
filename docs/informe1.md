Universidad ORT Uruguay Facultad de Ingeniería       
Obligatorio 1 Fundamentos de Ingeniería de Software      
Nicolás de la Hoz (286894), Ignacio Sena (286403) y Renato Ríos (270586)     

# Informe entrega 1

# Repositorio Git

Nombre del repositorio: “proyecto-sena-delahoz-rios”

Contenido:

-   Carpeta “\docs”: contiene archivos .md de los informes y la carpeta "\img" que contiene imágenes (incluye toda la documentación).
    
-   Carpeta “\src”: contiene una carpeta “\domain” que tiene todos los archivos del dominio y otra “\interface” que tiene todos los archivos para la interfaz.
    
-   README. md: archivo que describe los objetivos del proyecto.
    
Comandos ejecutados: 
Clone, status, add, commit, branch, checkout, log, push, pull, merge, rename.

# Versionado

Para aplicar buenas prácticas de versionado se decidió realizar los commits y las ramas de la siguiente manera:

## Commits:

Se realizarán commits cada día que se trabaje en el proyecto, para facilitar la revisión del mismo y la integración continua. Los commits tendrán descripciones cortas sobre qué cambios se realizó y un número que identifique esa versión con el siguiente formato: x.y.z. La ’z’ variará de commit en commit, ante cualquier mínimo cambio se le sumará uno a ese número. La ’y’ variará al agregar una funcionalidad importante, lo cual le sumará uno. Por último la ’x’ variará al sacar una versión utilizable del programa que se esté produciendo, es decir, cuando todas las funcionalidades previstas se hayan completado. (Para esta entrega el número de versión no va a variar ya que es solo un informe y no el producto como tal).

## Ramas:

Las ramas contarán con nombres breves y descriptivos, el cual deberá representar claramente el propósito de la misma y el número de versión actual cuando se creó la rama.

Por ejemplo, “informe1 - 0.0.0”, describe la rama en la cual se trabajará con el informe 1 y que fue creada en la versión 0.0.0 del proyecto. En el transcurso del trabajo se crearán más ramas de acuerdo a las necesidades que se presenten, como la rama para corregir errores, para trabajar en nuevas funcionalidades y otras.

## Resumen de commits:
- (HEAD -> main, origin/main, origin/HEAD) Trabajo Entregable
- (informe1-0.0.0) Arreglo en el modelo conceptual y mkdwn
- (origin/informe1-0.0.0) Problema espacios mkdown, solucionado
- Problema espacios mkdown, para ver en github
- Cambios menores en trabajo individual
- Cambio una linea, por error al mostrar mkdwn
- Merge branch 'informe1-0.0.0'
- Emparejar main con informe1-0.0.0
- Etapa final: correciones pequeñas
- Etapa final: se añadieron las pre y pos condiciones en Use cases
- Etapa final
- Cierre: cambio boceto
- Se modificaron los bocetos luego de la validacion
- Merge branch 'informe1-0.0.0'
- (informe1-0.0.0) Creación de la carpeta img para añadir los bocetos y el modelo conceptual
- Avance: falta el modelo conceptual, y pulir requerimientos
- Avance en informe1-0.0.0
- (origin/informe1-0.0.0) Trabajo avanzado, falta pulir detalles y realizar algunos puntos
- Merge pull request #1 from ORT-FIS-2023S1/informe1-0.0.0
- Finalización de entrevistas y planificación a futuro. Segunda etapa informe
- Creación de cuestionario y alguna entrevista, definición del versionado. Primer etapa del informe
- Prueba en informe1.md (agregar nombres)
- Initial commit
 
## Evolución del proyecto:

Reuniones realizadas con todos los integrantes:

- 12/04/2023: comienzo con el informe para la entrega 1 e investigación sobre el formato “Markdown”. (18:30 - 20:15) 1.45hs

- 19/04/2023: realización de cuestionario y alguna entrevista (18:30-20:00) 1.30hs

- 20/04/2023: planificación y finalización de entrevistas. (16:30-18:15) 1.45hs

- 21/04/2023: planificación. (14:00-15:05) 1.05hs

- 25/04/2023: creación de user personas (19:00-20:00) 1hs

- 30/04/2023: realización de bocetos y use cases (9:00-11:05) 2.05hs

- 1/05/2023: revisión del trabajo realizado hasta el momento y justificación (18:00-20:05) 2.05

- 3/05/2023: revisión del trabajo realizado hasta el momento y justificación (18:30-21:00) 2.30hs

- 5/05/2023: finalización de los bocetos (encargado/responsable) (16:00-17:30) 1.30hs

- 6/05/2023: validación y reflexiones (19:00 - 20:30) 1.30hs

- 7/05/2023: cierre del trabajo (9:00-10:00) 1hs

Trabajo total de reuniones: 18hs aproximadamente.

# Elicitación

Con el fin de identificar las necesidades y las restricciones de los distintos interesados en el proyecto para descubrir los requerimientos del mismo, se realizaron las siguientes técnicas de elicitación:

 ## Cuestionario:
  
Responsables:      
Se envió un formulario de google forms a responsables.      
Preguntas y respuestas: [https://docs.google.com/forms/d/1Lk4Vk0V2dooBaLX5sxj51ntnhPN58pDGkcSc2SCYYvQ/edit](https://docs.google.com/forms/d/1Lk4Vk0V2dooBaLX5sxj51ntnhPN58pDGkcSc2SCYYvQ/edit)

Conclusiones: Los responsables cuestionados acerca de la alimentación de sus alumnos a cargo, tienen ideas similares acerca del cuidado de los hábitos alimenticios de los mismos, así como del control sobre esta temática que ellos creen que deberían de tener. Se observa una preocupación generalizada acerca de qué comen, en qué cantidad y calidad. Hay una coincidencia en el deseo de poder controlar estos factores bajo la idea de que esto les brindará mayor tranquilidad. Lo que más se reiteró, fue la necesidad de que dicha solución tenga datos precisos sobre qué contiene cada una de las comidas y su costo, por ejemplo el etiquetado y el calendario de comidas se repitieron en varias opiniones. Seguido a esto, encontramos que la facilidad para poder acceder y navegar dentro de la aplicación es también valuable para los posibles usuarios.

## Entrevistas:     

Ex-alumno del comedor - Ariana Fernández, 19 años. Colegio Forward. Entrevista realizada en la casa de Nicolás de la Hoz el día 22/4.         
     
Preguntas y respuestas:        

[https://docs.google.com/forms/d/1SDTFdGS6vsrdhLOZXtttQTNo8wfDMlShifIA6aYQbnw/edit](https://docs.google.com/forms/d/1SDTFdGS6vsrdhLOZXtttQTNo8wfDMlShifIA6aYQbnw/edit)

Conclusiones: Sorpresivamente, se observan ciertos datos coincidentes con las entrevistas a responsables. Esto se ve reflejado en la reafirmación en el hecho de que las comidas deben de ser controladas por estos, ya que se entiende que son a los que más les concierne la salud de sus alumnos a cargo. Podemos ver que en este caso no hay control de alergias y siquiera hay opciones como para que alumnos con problemas con ciertas comidas puedan comer durante el día. Se reitera la necesidad de un calendario en una aplicación de este estilo, y se menciona el pago online para mayor facilidad a la hora de abonar.

Maestra - Mariela Feola, 58 años. Escuela N°72, Rocha. 24/23    

Preguntas y respuestas:

[https://docs.google.com/forms/d/1_xUmi31tW5Fz2sX6IeHrC61ZVRZb-9QfQo37PCsBvMU/edit](https://docs.google.com/forms/d/1_xUmi31tW5Fz2sX6IeHrC61ZVRZb-9QfQo37PCsBvMU/edit)

Conclusiones: Se comenta un desinterés de los responsables sobre la alimentación de los alumnos, que va de la mano a una desinformación sobre el tópico por parte de los mismos. Coincide en darle de igual manera la responsabilidad de la comida a los responsables, junto con la información necesaria para que esta no sea una decisión contraproducente. Se plantean razones desde el lado de la institución para la creación de una aplicación referente al tema: información precisa sobre la aceptación de los menús, lo que permitiría una gestión de recursos acorde a las necesidades de los alumnos. Aparece nuevamente el menú de cada día como un infaltable para la aplicación, además de que surge el valor nutricional como un nuevo factor a tener en cuenta.

Cocinera - Paola Pereira, 39 años. Escuela N°72, Rocha. 24/23    

Preguntas y respuestas:

[https://docs.google.com/forms/d/1Bwu6MbywJeE5r23Bk0Y5LatTEbWqxC1i90-KMc26Apg/edit](https://docs.google.com/forms/d/1Bwu6MbywJeE5r23Bk0Y5LatTEbWqxC1i90-KMc26Apg/edit)

Conclusiones: Se reitera la necesidad de que los padres sean conscientes de qué es lo que comen sus hijos. Desde su posición, pide que la aplicación no se centre solo en los alumnos, sino que también les de ciertas facilidades a los cocineros: por ejemplo recetas actualizadas para cada época del año. Esto podría tener relevancia a la hora de la aceptación, de la variedad e incluso desde un punto de vista nutricional.

Director - Daniel Cardozo, 52 años. Escuela N°72, Rocha. 24/23     

Preguntas y respuestas:

[https://docs.google.com/forms/d/1SYg68HT2V06bV_0IDDk48THB_S1pgd09lFkR9dW1aIc/edit](https://docs.google.com/forms/d/1SYg68HT2V06bV_0IDDk48THB_S1pgd09lFkR9dW1aIc/edit)

Conclusiones: Como fue recurrente en las entrevistas anteriores, se da a entender la necesidad de que los responsables estén informados sobre lo que ingieren los alumnos. Plantea la necesidad de una aplicación para descentralizar a la escuela a la hora de brindar información sobre el espacio del comedor. Coincide en que dicha aplicación debe manejar el menú de cada día y la información nutricional de cada uno.

**Aclaración importante: Debido a falta de tiempo a la cocinera y al director se les envió el formulario de manera online y no se realizó una entrevista como tal.**

## Ingeniería Reversa:

OrderEAT es una plataforma que como bien describe su página revoluciona la forma en que funcionan los comedores de clientela recurrente de manera digital. Se investigó dicha aplicación para recopilar ideas y conocer su propuesta ya que se usa en varios colegios del país.

Conclusiones:

-   Fácil de usar: para realizar cualquier acción dentro de la aplicación, no se necesitan demasiados pasos.
    
-   Intuitiva: la aplicación remarca cada acción importante dentro de la misma, diferenciándose del resto de la interfaz.
    
-   Centrada: no abarca las realidades de todos los comedores, está más orientada a cantinas y comedores de pago.
    
## Fuentes de información:

‘Chat GPT’: [https://openai.com/blog/chatgpt](https://openai.com/blog/chatgpt)
*Se utilizó 'ChatGPT' para obtener ideas ya que se puede "hacer pasar por el tipo de persona que elijas".*

‘OrderEAT’: [https://ordereat.tech/](https://ordereat.tech/)
[https://www.youtube.com/watchv=DA5FM68ZH3w&ab_channel=OrderEAT](https://www.youtube.com/watch?v=DA5FM68ZH3w&ab_channel=OrderEAT)

Xataka: [https://www.xataka.com.co/aplicaciones/softcafeteria-la-aplicacion-colombiana-que-te-permite-controlar-lo-que-tu-hijo-come-en-el-colegio](https://www.xataka.com.co/aplicaciones/softcafeteria-la-aplicacion-colombiana-que-te-permite-controlar-lo-que-tu-hijo-come-en-el-colegio)

### Conclusiones generales:

A partir de toda la información recaudada se decidió orientar el proyecto a la creación de una aplicación de uso genérico tanto para escuelas públicas como privadas, ya que ambos tipos de institución se pueden ver beneficiados, como también los responsables y los alumnos que acuden a las mismas.
 
#### Los beneficios de la aplicación son:

Responsables:

-   Consultar el menú de manera semanal.
    
-   Consultar la información de cada plato.
    
-   Ver las estadísticas de sus alumnos a cargo. 
    
-   Recibir advertencias por problemas relacionados a la salud (alergias, intolerancias, entre otros) de cada alumno a cargo en específico, para evitar inconvenientes.
    
-   Realizar los pagos con diferentes opciones de manera remota para el caso de instituciones privadas.
    
-   Fácil y rápido acceso a toda la información.
    
Alumnos:

-   No tener que hacer uso de efectivo.
    
-   Reducir el tiempo de espera para obtener la comida. Si la mayoría de los alumnos eligen y pagan su comida por la aplicación, se agiliza el proceso de producción y entrega.
    
-   Una alimentación más adecuada a sus necesidades

Instituciones:

-   Cantidad de porciones a realizar de antemano, evitando la sobre o subproducción, con lo que se reducen las pérdidas.
    
-   Conocer quienes poseen intolerancias, alergias u otra disfunción alimenticia que pueda perjudicar su salud. Con lo cual se aumenta la seguridad, evitando que coman algo que potencialmente les caiga mal.
    
-   Información sobre la aceptación de ciertos menús, lo que permitiría saber cuales requieren cambios o incluso cuales habría que eliminar.
  
## User personas:

Datos demográficos:     
Nombre: María Fernández.    
Edad: 33 años.    
Profesión: Abogada.     
Estado civil: divorciada.        
      
Descripción: María es una madre trabajadora con dos hijos que asisten a un colegio privado. Ella trabaja a tiempo completo y no tiene mucho tiempo para preparar almuerzos para sus hijos en casa. Quiere asegurarse de que sus hijos coman comidas nutritivas y balanceadas durante el horario escolar.    
     
Intereses:
-   Acceder fácilmente al menú escolar junto a toda su información.
    
-   Poder realizar pedidos de comidas para sus hijos de manera rápida y conveniente.
    
-   Hacer seguimiento de las preferencias dietéticas y restricciones alimenticias de sus hijos.
    
-   Ahorrar tiempo y esfuerzo en la preparación de las comidas de sus hijos.
    
Frustraciones: Falta de acceso a la información del menú y los ingredientes de las comidas, lo que dificulta la planificación de las comidas de sus hijos. Preocupación por la calidad y la variedad de las comidas ofrecidas en el comedor escolar.      

----------

Datos demográficos:     
Nombre: Clara Repetto.    
Edad: 7 años.    
Estudiante.    
      
Descripción: Clara es una alumna de 7 años que asiste a un colegio privado. Es una niña introvertida a la cual le cuesta pedir la comida en su comedor. Muchas veces no le da tiempo de pensar entre las opciones durante la cola de la misma. No le gusta manejar dinero y suele pedir siempre las mismas cosas en la cantina.      

Intereses:

-   Limitar la interacción durante la compra de su merienda.
    
-   Estar menos tiempo en la cola de la cantina.
    
-   Diversificar su dieta.
    
-   Evitar pagar personalmente y manejar dinero en efectivo.
    
----------

Datos demográficos:    
Nombre: Julio Macedo.    
Edad: 29 años.    
Profesión: Carpintero.    
Estado civil: casado.    
      
Descripción: Julio es padre de Julián, un alumno de escuela pública que le gusta jugar con sus amigos y disfruta de comer golosinas y comida “chatarra”. Julio le da el dinero para su merienda y él usualmente lo malgasta o compra comida altamente procesada.     
     
Intereses:

-   A Julio le interesa saber lo que está comiendo Julián.
    
-   Que Julián no maneje efectivo.
    
-   Balancear la alimentación de Julián.

----------

Datos demográficos:    
Nombre: Olga Marts.       
Edad: 46 años.          
Profesión: administradora del comedor escolar.          
Estado civil: casada.        
       
Descripción: Olga es la administradora del comedor escolar de un colegio privado. Ella es responsable de planificar los menús, gestionar las órdenes de comida, mantener registros de las preferencias dietéticas y restricciones alimenticias de los estudiantes, y comunicarse con los padres sobre eventos especiales o cambios en el menú. Necesita una aplicación que le facilite la planificación de los menús, la gestión de las órdenes y la comunicación con los padres de manera eficiente.

      
Intereses:

-   Planificar los menús del comedor escolar de manera eficiente.
    
-   Tener un mejor control a la hora de gestionar las órdenes de comida y recibir información rápidamente de pedidos.
    
-   Mantener registros precisos de las preferencias dietéticas y restricciones alimenticias de los estudiantes.
    
-   Comunicarse con los padres sobre eventos especiales o cambios en el menú.
    
----------

Datos demográficos:     
Nombre: Sergio Cáceres.        
Edad: 57 años.          
Profesión: Encargado de un comedor.        
Estado civil: divorciado.            
     
Descripción: Sergio trabaja en un comedor de una escuela privada. El se encarga de entregarle los platos a los alumnos y de supervisar que todo esté yendo correctamente en la cocina. Le gusta ser social y tanto la gran mayoría de alumnos como de empleados le tienen afecto. Su uso del celular se reduce al envío de mensajes y realización de llamadas.
        
Intereses:

-   Utilizar la tecnología sin tener que pasar por capacitaciones ni cursos.
    
-   Información simple, fácil de comprender e interpretar.
    
-   Buscar otras opciones de menús estacionales, ya que la aplicación permitiría el aviso a los responsables de manera fácil y sin necesidad de reuniones.
    
-   Recibir retroalimentación sobre sus platos y adaptarse al mismo.
    
-   No malgastar alimentos preparando comida de más.
    
----------

## Modelo conceptual:

**Ver carpeta “\img”**

![Modelo Conceptual](\img\ModeloConceptual.png)

Archivo: “ModeloConceptual.png”.

Aclaraciones:

-Las entidades y relaciones de color rojo representan solo a las escuelas privadas.

# Especificación

### Requerimientos funcionales (orientado a responsables):

Prioridad Alta:

-   El sistema debe permitir seleccionar la institución a la cual asiste el alumno.
    
-   El sistema debe mostrar un calendario semanal (de 2 semanas) con el menú disponible para cada día (si el menú de ese día no está disponible, se advertirá).
    
-   El sistema debe de mostrar los ingredientes de cada plato, junto a su información nutricional y el precio de los mismos (en caso de que tenga -institución privada-).
    
-   El sistema debe de advertir de manera diferencial el menú apto para personas con alergias o intolerancias; llevando un registro de las mismas.
    
-   El sistema debe permitir seleccionar uno o múltiples platos, asignarlos a un alumno y poder pagarlos de forma online.
    
-   El sistema debe contar con una cartera, que se asocie a la cuenta de un responsable donde el pueda tener su saldo y utilizarlo en la aplicación sin necesidad de realizar transacciones cada vez que se realiza un pago.
    
-   El sistema debe retornar el dinero de la compra en caso de que el alumno falte (se utiliza la lista de la escuela).
    
-   El sistema debe poder agregar o eliminar platos de los pedidos.
    
-   El sistema debe mostrar un historial de las comidas consumidas por el alumno y el monto asociado (precio de cada plato y precio total).
    
-   El sistema debe mostrar una serie de estadísticas referidas a los alumnos y su consumo (muestra las estadísticas de manera semanal, en forma de gráfico de barras –1 semana– junto a los platos consumidos cada día e información nutricional del consumo total -calorías, proteínas, entre otros mencionados-).
    
-   El sistema debe identificar a los alumnos para quienes se les está realizando la compra de su alimento.

-   El sistema debe contar con diferentes opciones de pago (con tarjetas de credito/debito, en la cuota de la escuela, con la cartera o mismo por el alumno en efectivo).   
    
Prioridad Media:

-   El sistema debe permitir dar opinión acerca del menú y platos (a la institución).
    
-   El sistema debe mostrar notificaciones a los usuarios en caso de modificaciones en los menús y precios.
    
Prioridad Baja:

-   El sistema debe de permitir configurar si se desea recibir notificaciones o no.
    
-   El sistema debe de permitir agregar una foto de perfil y un nombre personalizado en la cuenta de usuario.
    
### Requerimientos funcionales (orientado al comedor/institución):

Prioridad Alta:

-   El sistema debe admitir pagos o no (y adaptarse a ello -no mostrar precio en escuelas públicas-) dependiendo del tipo de institución (privada o pública).
    
-   El sistema debe permitir al usuario identificarse.
    
-   El sistema debe permitir modificar el menú (los platos del día y el día en que se sirve ese menú) y modificar cada plato (actualizar la información nutricional e ingredientes, el nombre del plato, su imagen y el precio si lo amerita).
    
-   El sistema debe mostrar la cantidad de pedidos de ese día por plato, así como también la cantidad de alumnos que no pidieron ningún plato. Esto con el fin de calcular aproximadamente los platos a preparar.
    
-   El sistema debe confirmar los pedidos recogidos por los alumnos, mostrando el nombre del alumno, su apellido, clase, foto y el plato que pidió, marcando si lo recogió o no.
    
-   El sistema debe eliminar el pedido en caso de que el alumno falte para evitar producir comida de más.
    
-   El sistema debe permitir dar permisos a otras personas que puedan actuar como encargados (cocineros y cantineros)
    
-   El sistema debe permitir crear un nuevo pedido en el momento, por si el alumno decide comprarlo en el lugar (en instituciones privadas) o si el responsable del alumno no reservo (instituciones públicas).
    
Prioridad Media:

-   El sistema debe mostrar estadísticas asociadas al consumo de menús.
    
-   El sistema debe notificar en caso de queja o sugerencia.

Prioridad Baja:

-   El sistema debe ser personalizable para cada institución, eligiendo color, títulos, textos y otros, que permiten identificar a la misma.
    
-   El sistema debe de permitir agregar una foto de perfil y un nombre personalizado en la cuenta de usuario

### Requerimientos no funcionales:

Prioridad Alta:

-   La interfaz será mobile first, pero tendrá interfaz desktop (adaptable a todos los dispositivos con ancho de pantalla comprendido entre 300 y 1920 píxeles). Teniendo presente que el mayor tráfico provendrá de dispositivos móviles.
    
-   La interfaz utilizará HTML5, CSS3 y Javascript junto a sus estándares.
    
-   El sistema debe mostrar tanto menús, calendario, historial del alumno como estadísticas actualizadas de los comedores tanto para los responsables como para el comedor/institución.
    
-   El sistema debe soportar varios usuarios realizando tanto el pago de la comida como accediendo a las funcionalidades mismas.
    
-   El sistema debe cumplir con las regulaciones y leyes de privacidad y protección de datos del país (Ley número 18331).
    
-   El sistema deberá cumplir el estándar de accesibilidad WCAG (nivel A).
    
-   El sistema se desarrollará en español e inglés, teniendo la posibilidad de añadir otros idiomas a futuro.
    
-   El sistema debe ser compatible con diferentes navegadores web modernos, como Chrome, Firefox, Safari, Opera y Edge.
    
-   La interfaz estará separada de la lógica (buenas prácticas de OOP).
    
Prioridad Media:

-   El sistema debe integrarse con redes sociales para facilitar la comunicación con los usuarios y promover su uso.
    
## User Stories:

**Seleccionar institución:**
Como responsable quiero poder elegir la institución a la que necesito pedir y que la aplicación recuerde la opción que elegí para así tener acceso al menú de dicha institución y permitirme un rápido acceso en las próximas interacciones con la misma.

Criterios de Aceptación:
-   La opción elegida deberá ser guardada y relacionarla al dispositivo donde se accedió en ese momento.
    
**Ver calendario semanal:**
Como responsable quiero ver los días de la semana y en cada uno ver las opciones de comida disponibles, para planificar las comidas de los alumnos de los cuales soy responsable

Criterios de aceptación:
-   Menú semanal publicado el primer día de la semana siguiente (domingo).
    
**Ver información sobre platos:**
Como responsable quiero ver la información nutricional, los ingredientes y el precio de cada comida, para conocer los platos de la institución.

Criterios de aceptación:

-   Cada plato debe tener la información pertinente.

**Ver historial de consumo:**
Como responsable quiero ver el historial de consumo de los alumnos de los que soy responsable tanto de manera diferencial como conjunta, para llevar una cuenta de lo que gasté y de lo que mis alumnos a cargo consumieron.

Criterios de aceptación:

-   Selección de cada alumno juntos o por separado para ver su historial.
    
-   Mostrar el precio total además de el de cada compra.
    
-   Advertir que platos han sido pagados y cuáles no.
    
**Ver saldo disponible:**
Como responsable quiero ver el saldo disponible que tiene el alumno del cual soy responsable, para gestionar el uso de mi dinero y saber si debo cargar más.

Criterios de aceptación:

-   Debe de actualizarse en tiempo real
    
-   Debe de poder recargarse dinero de forma online

**Identificar alumnos:**
Como responsable quiero que la cantina del colegio sepa a qué alumnos les estoy comprando comida para que no haya confusiones a la hora de retirar la comida.

Criterios de aceptación:

-   Los alumnos deben estar correctamente identificados dentro de la base de datos de la institución.
    
**Ver cantidad de pedidos:**
Como institución quiero la cantidad de pedidos que tengo de cada comida que ofrezco, para planificar el uso de alimentos y no sobreproducir o que queden personas sin recibir lo que pidieron

Criterios de aceptación:

-   La cantidad de pedidos se debe de actualizar en tiempo real
    
-   Si se cancela el pedido de un plato, debe de verse en la cantidad de pedidos

**Recibir opiniones:**
Como institución me gustaría recibir toda opinión que tengan los responsables acerca del servicio que brindamos para así mejorar el mismo y mantener una buena relación con los mismos.

Criterios de aceptación:

-   Las quejas deben de guardarse en forma anónima.

## Use Cases:

Ingresar al sistema           
Actor: Responsable.            
Precondición: el responsable recién abrió la aplicación.            
Postcondición: el sistema muestra todas las opciones de la aplicación para el responsable.           
Curso normal:            
| Acción de los actores | Respuesta del Sistema |
|----------|----------
| 1. Selecciona elegir institución | 2. Muestra barra de búsqueda con instituciones en orden alfabético |
| 3. Confirma institución | 4. Permite el ingreso a la cantina online de dicha institución. |

Cursos alternativos:
1.1 La institución buscada no está.               
3.1 Se confirma institución sin haber seleccionado una, se emite el mensaje “elija una institución para continuar”.          

----------

Ingresar al sistema           
Actor: Encargado de comedor.          
Precondición: el encargado recién abrió la aplicación.            
Postcondición: el sistema muestra todas las opciones de la aplicación para el encargado.          
Curso normal:            
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Selecciona la vista de encargado | 2. Muestra la ventana de ‘identificarse’, con los datos requeridos para su identificación (contraseña, mail e institución).|
| 3. Confirma mail, contraseña e institución | 4. Permite el ingreso a la cantina online de dicha institución con permisos de editor. |

Cursos alternativos:          
3.1 El mail es incorrecto. Se emite el mensaje ‘el mail ingresado no es correcto, ingrese un mail válido’.        
3.2 La contraseña es inválida. Se emite el mensaje “La contraseña no es válida”            
3.3 Las credenciales no coinciden con la institución. Se emite el mensaje “Los datos no coinciden”.         

---------- 

Seleccionar Menú            
Actor: Responsable.         
Precondición: el responsable se encuentra en la ventana del calendario.       
Postcondición: el sistema agrega los pedidos.        
Curso normal:       
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Elige un día del calendario semanal. | 2. Muestra el menú de ese día.|
| 3. Elige una opción de menú del día. | 4. Muestra un pop-up con información adicional del menú, con la opción de añadir dicho menú a la ventana de pedidos. Además, se elegirá el alumno al cual se le quiere asignar la comida. |
| 5. Añade un plato a la ventana de pedidos. | 6. Se asocia al alumno seleccionado anteriormente con dicho plato.|
| 7. Confirma pedido | 8. Muestra la ventana de pedidos con los pedidos añadidos.

Cursos alternativos:              
1.1. Selecciona la opción “Próxima semana”. Cambia las opciones de menú por las de la siguiente semana.           
7.1. Se confirma sin asociar un alumno al plato. Aparece el aviso: "Por favor, seleccione un alumno" y se cancela la acción.          
7.2. Alguno de los alumnos elegidos presenta una intolerancia o alergia a alguno de los ingredientes del plato. Se impide el pedido y se emite el aviso: “No es recomendable que el alumno [Nombre alumno] consuma este plato”.           

----------

Ver pedidos       
Actor: Responsable.       
Precondición: el responsable se encuentra en la ventana pedido y realizó algún pedido.        
Postcondición: el sistema muestra el pedido modificado.         
Curso normal:        
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Se selecciona “Modificar Pedido” | 2. Muestra el pedido y su alumno asociado, con las cantidades seleccionadas anteriormente con su precio unitario y el precio total.|
| 3. Se selecciona “+” o “-” asociado a un plato mostrado. | 4. Agrega o elimina una unidad de ese plato de la ventana de pedidos. |

Cursos Alternativos:          
1.1. Se selecciona “Eliminar Pedido”. Elimina el pedido seleccionado.          

  ----------

Depositar en cartera       
Actor: Responsable.       
Precondición: el responsable ya esta identificado (ingresó mail, contraseña e institución).          
Postcondición: el sistema actualiza el monto anterior sumandole el que se añadió.           
Curso normal:          
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Se selecciona “Cartera” en la barra de navegación | 2. Se muestra el saldo actual, un espacio para poner los datos de la tarjeta y otro para elegir cuánto se quiere cargar.|
| 3. Se selecciona “Añadir”. | 4.Aparece el aviso: “¿Desea confirmar la acción?”, en caso positivo se añade el monto elegido y en negativo vuelve a la ventana de cartera.|

Cursos Alternativos:         
3.1 El campo de monto a cargar está vacío: se emite el mensaje “Por favor ingrese el monto que quiere añadir”.           
3.2 Algún campo de la tarjeta es incorrecto: se emite el mensaje “Por favor revise los datos de su tarjeta”.        

----------
  
Ver historial              
Actor: Responsable.          
Precondición: el responsable se encuentra en una ventana distinta a "Historial" y ya esta identificado (ingresó mail, contraseña e institución) con sus alumnos a cargo asociados.             
Postcondición: el sistema muestra estadísticas del alumno seleccionado.          
Curso normal:          
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Se selecciona “Historial” en la barra de navegación | 2. Muestra el historial de los pedidos pagados y/o ya consumidos por alumno junto al precio total.|
| 3. Se selecciona “Estadísticas” dentro de cada alumno | 4. Muestra información nutricional en forma de gráfica de barras de manera semanal y un resumen de la información nutricional del alumno seleccionado.|

Cursos Alternativos:           
4.1 El alumno seleccionado no consumió nada en esa semana o en un día en especificó, se muestra la semana o el día vació.         

----------

Modificar perfil         
Actor: Responsable.         
Precondición: el responsable ya esta identificado (ingresó mail, contraseña e institución).          
Postcondición: el sistema muestra y actualiza las modificaciones realizadas.          
Curso normal:          
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Se selecciona “Otras opciones” en la barra de navegación | 2.Muestra las opciones “Editar perfil”, “Ver notificaciones” y “Realizar queja”.|
| 3. Se selecciona “Editar perfil” | 4. Aparecen opciones de cambio de foto de perfil, nombre, contraseña, correo electrónico y recepción de notificaciones. |
| 5. Se selecciona “Confirmar” | 6. Se guardan los cambios realizados. |        

Cursos Alternativos:       
5.1. Se selecciona “Cancelar”, lo que cancela todos cambios realizados.            

----------

Ver notificaciones      
Actor: Responsable.      
Precondición:        
Postcondición: el sistema muestra las notificaciones de la institución y permite arbirlas para verlas completas.      
Curso normal:      
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Se selecciona “Otras opciones” en la barra de navegación | 2. Muestra las opciones “Editar perfil”, “Ver notificaciones” y “Realizar queja”.|
| 3. Se selecciona “Ver notificaciones” | 4. Aparecen todas las vistas previas de las notificaciones provenientes de la institución. |


----------  

Dar opinión        
Actor: Responsable.             
Precondición: el responsable ya esta identificado (ingresó mail, contraseña e institución).        
Postcondición: el sistema envia la opinión a la ventana "Comunicación y ver opiniones" del/los encargados.                
Curso normal:           
| Acción de los actores | Respuesta del Sistema |
|----------|----------|
| 1. Se selecciona “Otras opciones” en la barra de navegación | 2. Muestra las opciones “Editar perfil”, “Ver notificaciones” y “Dar opinión”.|
| 3. Se selecciona “Dar opinión” | 4. Aparece un recuadro en donde se introduce el texto. |
| 5. Se selecciona “Enviar” | 6. Se envía el mensaje escrito. |

Cursos Alternativos:         
5.1. Se selecciona “Enviar” y no hay nada escrito: aparecerá el mensaje de advertencia “El campo de texto no puede estar vacío”.          
5.2 Se selecciona “Cancelar”, lo que elimina el texto escrito en el recuadro “mensaje”.                

# Bocetos IU:

**Ver carpeta “\img”**

![Boceto responsable](\img\BocetoResponsableBajaFidelidad.png)

Archivo: “BocetoResponsableBajaFidelidad.png”.

***Aclaraciones:***
- Para utilizar la cartera es necesario identificarse previamente. (Mail y contraseña del responsable) Así como también, para ver el historial y las estadísticas del alumno. Se trabajó teniendo por supuesto que el inicio de sesión estaba realizado.
- Al asignar un alumno a un pedido se lo identifica por su cédula de identidad.

![Boceto encargado](\img\BocetoEncargado-InstitucionBajaFidelidad.png)

Archivo: “BocetoEncargado-InstitucionBajaFidelidad.png”.   

*** Aclaración: ***    
El archivo "altaFidelidadEjemploResponsable.png" se añadió como ejemplo para que se comprenda mejor el formato de la aplicación y para familiarizarnos con Figma.


# Validación y verificación

## Verificación:

Completitud:

- [x]  ¿Se encuentran todos los requerimientos correctamente priorizados?

- [x]  ¿Son todas las clases de usuarios identificados y sus características descriptas?

- [x] ¿Se identifican y describen las dependencias con otros sistemas?

- [x]  ¿Están todas las características de calidad tenidas en cuenta en la especificación?

Verificabilidad y no ambigüedad:

- [x]  ¿Tiene cada requerimiento una única interpretación?

- [x]  ¿Puede ser cada requerimiento verificado por alguna prueba, demostración, revisión o análisis?

Correctitud y consistencia:

- [x]  ¿Están los requerimientos escritos en forma consistente y a un nivel de detalle adecuado?

- [ ]  ¿Existe duplicación de requerimientos o conflicto entre requerimientos?

- [x]  ¿Está cada requerimiento dentro del alcance del problema a resolver?

- [x]  ¿Evitan los requerimientos incluir aspectos de diseño o implementación de la solución?

Trazabilidad:

- [x]  ¿Puede cada requerimiento ser identificado correctamente y en forma única?
              
- [ ]  ¿Se referencian correctamente los requerimientos entre sí?
              
- [x]  ¿Puede cada requerimiento ser referenciado hasta su origen (alguna necesidad de los stakeholders)?

Casos de uso:

- [x] ¿Cumple el caso de uso un único objetivo o tarea?

- [x]  ¿Es su objetivo un resultado medible para el usuario?

- [x]  ¿Queda claro que actor(es) participan y benefician del caso de uso?

- [x]  ¿Existe una secuencia lógica en los pasos que permita entender la transacción entre actor y sistema?

- [x]  ¿Es el nivel de abstracción de las transacciones adecuado para el caso de uso?

- [ ]  ¿Está el caso de uso libre de detalles de diseño e implementación de posibles soluciones?

- [x]  ¿Se documentan todos los posibles cursos alternativos ~~y excepcionales~~?

- [x]  ¿Existen pre y pos condiciones que contextualizan correctamente el caso de uso?    

  Gracias a la verificación se quitaron los requerimientos duplicados, se modificaron los ambiguos y se agregaron las precondiciones y postcondiciones en los casos de uso.

## Validación:

### Retroalimentación:

Mariela Feola, 58 años, maestra:

Se le mostró el boceto y se intentó que navegara a través de él sin ayuda, solo ayudando o explicando cuando no entendió lo que se mostraba.

Modo responsable:

-   Hubo confusión con la identificación: esperaba que hubiese una y nunca se especificó dentro del boceto que ya suponíamos al responsable ingresado como premisa.
    
-   Especificar a qué ventana lleva cada botón de la barra de navegación, al menos dentro del boceto de baja fidelidad.

Modo encargado:

-   Se cuestionó el hecho de planificar dos semanas al mismo tiempo, por lo alejado de la realidad que está eso al momento de la aplicación. Se modificó esa funcionalidad de la aplicación en base a este cuestionamiento, dejando que se planifique sin restricciones (si se quiere planificar a largo plazo se puede, eso lo evaluará quien lo tenga que evaluar).
    
-   Remarca la falta de una ventana que cuente la cantidad total de pedidos y la coteje con la cantidad de alumnos presentes en la institución (los padres pueden haber pedido pero el alumno por algún motivo no ir, lo cual lleva a que ese pedido sea descartado). Esto se cambió en base a sus observaciones, agregando una ventana la cual especifica esta información.
    
-   De la mano al punto anterior, remarca que no se menciona en ningún momento la cantidad de alumnos a los cuales no se les pidió/reservó nada. A la hora de planificar la cantidad de platos a hacer a la institución esto también le interesa. Esto se cambió en base a sus observaciones, agregando una ventana la cual especifica esta información.
    
-   La ventana de pedidos (encargados) estaba confusa, por lo cual gracias a su queja se cambió.
    
-   En la ventana comunicación (encargados), la parte de las opiniones de los responsables estaba poco visible, cuando es la parte más importante de la misma. Se cambió en torno a eso.

------


# Reflexión

## Trabajo individual:

Renato (trabajo total 18hs + 1hs): este trabajo me hizo reflexionar sobre la incomodidad que sentimos los humanos ante la ambigüedad. Nos gusta tener definido aquello que debemos hacer, pero en la realidad es difícil saber exactamente qué se debe hacer ante problemas nuevos. Esto último fue lo que experimenté junto a mis compañeros en este proyecto.

Ante una consigna tan ambigua me sentí frustrado y con cierto enojo, pero luego comprendí que en la vida real y en los futuros proyectos que tendré me enfrentare a situaciones no tan diferentes a esta. El cliente rara vez sabrá con exactitud lo que quiere y nosotros tendremos que indagar para encontrar cual es el verdadero problema, con el objetivo de brindar una solución que satisfaga correctamente la problemática que tiene.

Aprendí ciertas estrategias y métodos para definir correctamente la problemática a solucionar, sin embargo, fue la experiencia de debatir con mis compañeros e intentar comprender su punto de vista lo que más me aportó.

-------

Nicolás (trabajo total 18hs + 3hs): al trabajar todos en conjunto y sin problemas me sentí cómodo con el trabajo, aunque la consigna no me pareció del todo entretenida. Creo que todos aportamos al trabajo por lo tanto estoy satisfecho y considero que es un buen informe, obviamente tiene sus errores. Lo que más me gusto fue la etapa de planificar y realizar los bocetos, ya que fue de las más enriquecedoras y en lo personal me gusta el tema del diseño (por esto mismo me ofrecí a dibujarlos, luego de ya tener definida su estructura con todo el equipo, claro está). Por otra parte, me gustó mucho conocer sobre Figma, Git y GitHub, ya que me parecen herramientas fundamentales para el desarrollo en equipo. 

-------

Ignacio (trabajo total 18hs + 2hs): si bien los integrantes del grupo ya nos conocíamos de antes, esta consigna dio lugar a mucha discusión y desacuerdo. Esto se debió en su mayor parte a la ambigüedad en ciertos aspectos de la letra y la orientación tan abierta en la búsqueda de información lo que provocó que todos llegáramos en muchas ocasiones a conclusiones diferentes.

Si hablamos en términos del informe, me parece que el trabajo final está bastante bien planteado. Hubo, como dije antes, mucho enfrentamiento lo que llevó a ver y rever todos los aspectos que salían a la luz durante su creación y a que todos participamos prácticamente de igual manera.

Si pienso con qué me quedo de todo esto, voy por el lado de ponerme en los pies de quien recibe esto en vez de ser solo el que lo escribe, el ser detallado y conciso con las cosas que se quieren; por otra parte la búsqueda de información y el uso de herramientas indagatorias fue algo bastante interesante, ya que nunca había tenido que realizar nada tan puntual ni con un fin parecido.

  

## Técnicas aplicadas y aprendizajes

-   En lo que respecta al equipo, siempre trabajamos juntos, los 3 enfocados a un mismo tema debido al alto discernimiento en lo que respecta al diseño de esta aplicación. Era contraproducente avanzar en paralelo cuando al unir lo trabajado individualmente se perdía mucho tiempo en discusiones.
    
-   Una de las cosas más valiosas aprendidas durante el proyecto fue el uso de git y github así como de Figma.
    
-   El uso de google encuestas para indagar sobre el tema a personas de interés fue algo para algunos de nosotros totalmente nuevo.
    
-   El bocetaje: si bien los bocetos no son algo ajeno a nosotros, realizarlos como se vió en clase fue algo nuevo y muy interesante.
    
-   Use cases, user personas, user stories: si bien sabíamos de su existencia por cursos anteriores, nunca habíamos tenido que realizar ninguna de estas técnicas de elicitación de manera fiel a lo que en verdad son. Fue bastante dificultoso y llevó su tiempo.
    
-   Descubrimos que definir un problema tiene a su vez ciertas dificultades y que hay todo un campo de la ingeniería dedicado a esto.
    
-   Ingeniería de requerimientos: este es otro punto que si bien lo habíamos hecho ya en cursos anteriores, lo hicimos sin el nivel de especificidad y plenitud que se planteó en este curso. Desde separarlos en funcionales y no funcionales, la forma de escribirlos, saber diferenciarlos correctamente y asociarlos luego con el resto de técnicas de licitación para que nada quede en el aire.
    
-   La creación de un modelo conceptual acorde al problema: si bien es un tópico fresco ya que se está cursando paralelamente en Base de Datos, es bastante diferente hacerlo en base a algo que se creó de cero y de autoría propia.
    


## Glosario:

- Pop-Up: Un pop-up es un tipo de ventana que aparece repentinamente en la pantalla del sitio web.

- Institución: colegio o escuela pública dedicada a la educación.

- Información nutricional: la información nutricional de un alimento incluye el valor energético y nutrientes como grasas, azúcares y proteínas, calorías y otros.

- Usuario: cualquier persona que utilice la página/aplicación.

- Responsable: Padre, madre, o tutor de alumnos de algún colegio.

- Encargado: Personal de la institución, la cual lleva control de la página/aplicación.

- Calendario: sistema de división del tiempo, el cual contendrá el menú de cada día dividido por 2 semanas.

- Menú del día: conjunto de platos que se ofrecen al alumnado cada día.

- Plato: conjunto de alimentos preparados que conforman una comida.

- Pedido: conjunto de platos que el responsable desea comprar.

- Alumno: persona que recibe enseñanzas en una institución académica.

- Historial: conjunto de pedidos pagados de un responsable.

- Estadísticas (Responsable): muestra la información nutricional y la cantidad de platos consumidos por el alumno a su responsable.

- Estadísticas (Encargado/institución): muestra, cantidad de platos vendidos y su nivel de aceptación y total recaudado.

- Etiquetado: etiqueta alimentaria es cualquier marbete, rótulo, marca, imagen u otra materia descriptiva o gráfica, que se haya escrito, impreso, estarcido, marcado, marcado en relieve o en huecograbado o adherido al envase de un alimento o a un producto alimentario. 
Fuente: [https://www.fao.org/food-labelling/es/](https://www.fao.org/food-labelling/es/)

- Valor nutricional: El valor nutricional de un alimento, determina el valor energético y la carga de nutrientes del mismo: grasas, hidratos de carbono, azúcares, proteínas, vitaminas y minerales.
Fuente: [https://veigler.com/valornutricional/#:~:text=%C2%BFQu%C3%A9%20es%20el%20valor%20nutricional,y%20minerales%2C%20sal%2C%20etc%C3%A9tera](https://veigler.com/valor-nutricional/#:~:text=%C2%BFQu%C3%A9%20es%20el%20valor%20nutricional,y%20minerales%2C%20sal%2C%20etc%C3%A9tera).

- Cartera: cartera digital donde se puede guardar dinero y utilizar en la aplicación.

- Cantina: Establecimiento dentro de la institución académica en el que se sirven bebidas y comidas.

- Comedores de pago: El comedor de pago es un espacio o lugar en el cual las personas se reúnen para ingerir alimentos, ya sea desayuno, almuerzo o merienda y deben de pagar por estos alimentos.

- Estadísticas (Responsable): muestra la cantidad de platos consumidos por cada alumno del cual se es responsable.

- Opinión: Idea, juicio o concepto que una persona tiene o se forma acerca de algo o alguien.

- Consumo: es lo que comió el alumno.

- Mobile first: es un enfoque de desarrollo y diseño web que se enfoca en la priorización del diseño y el desarrollo para dispositivos móviles por encima del diseño y desarrollo para pantallas de escritorio. Fuente: [https://developer.mozilla.org/es/docs/Glossary/Mobile_First](https://developer.mozilla.org/es/docs/Glossary/Mobile_First)

- Cartera: Lugar virtual donde se almacena el dinero del responsable.

- Lista de la escuela: recuento de alumnos presentes en la escuela durante cada día.