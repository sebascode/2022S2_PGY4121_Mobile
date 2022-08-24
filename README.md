# Proyecto DEMO de profesor para Alumnos
Este no es más que un demo de código hecho clase a clase para verificar los conocimientos que se van impartiendo y también para almacenar un repositorio de datos con el código ejecutado en clases.
Se da permiso inmediato de usar como material académico y sin límite de distribución para este motivo.

## Modo de uso
Se disponen distintas **Branch** para permitir a distribución del código de manera agnóstica usando un solo repositorio para distintas secciones del mismo ramo.
Cada sección posee un `branch`.
Para usarlo se deben seguir los siguientes pasos:
1. Clonar repositorio en tu carpeta de preferencia usando el comando `git clone https://github.com/sebascode/2022S2_PGY4121_Mobile.git`
2. Ingresar a la carpeta cambiando el directorio en la terminal utilizada (ej. usando el comando `CD`: `cd 2022S2_PGY4121_Mobile`)
   - Opcionalmente: puedes cambiar el nombre de la carpeta a uno que te parezca más descriptivo, no afectará el proyecto ya clonado ni sus actualizaciones futuras.
3. Cambiar a la rama que desees (recomando ir a la rama de la sección) utilizando el comando `git checkout seccion/{tuseccion}` (donde `{tuseccion}` es el código de sección, ejemplo: 001V)
   - Opcionalmente: si desconoces si tu sección está creada, puede revisar la lista de branches desde el **Github** o bien utilizar el comando `git branch -r` (donde `-r` indica a git que son las ramas remotas las que queremos ver).
4. Profit 📈

> Recuerda que debes estar dentro de la carpeta del proyecto para ejecutar tu código `git` e `ionic`

## ¿Cómo saber si tengo instalado Ionic?
Ionic es un framework híbrido para desarrollo de plataformas, lo que significa que utilizamos un lenguaje y unas librerías para crear contenido para múltiples dispositivos.
Específicamente, utilizamos `Angular` y `node`, sumado a esto, con la librería `Ionic` damos interpretación a nuestro código para que se compile para diferentes dispotivos móviles, tales como iPhone, Android o Windows Phone.

Para comprobar que versiones posees instaladas de cada lenguaje, sigue el siguiente paso a paso:
1. Abrir consola, terminal (no se recomienda powershell en computadores duoc).
2. Verificar si `node` se encuentra instalado corriendo el comando `node -version`, si entrega versión, todo ok ✅.
   - Si entrega un mensaje similar a `node: command not found` es porque no se encuentra node instalado, por consecuencia `npm` tampoco estará instalado.
   - Para corregir, debes instalar `node` desde su página web: [Node JS](https://nodejs.org/es/)
3. Verificar si `npm` se encuentra instalado corriendo el comando `npm -version`, si entrega versión, todo ok ✅.
4. Verificar si `ionic` se encuentra instalado corriendo el comando `ionic`, si entrega un mensaje del `ionic cli`, todo ok ✅.
   - En caso de no estar instalado, correr el comando `npm install -g @ionic/cli` y esperar.
5. Profit 📈

Cualquier consulta se puede dirigir directamente a: s.contrerasb@profesor.duoc.cl