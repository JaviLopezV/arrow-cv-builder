export const PRIVACY_LAST_UPDATED = "2026-08-29";

export const privacyCopy = {
  es: {
    title: "Política de privacidad",
    intro:
      "Esta política explica de forma concreta cómo funciona Next CV Builder y qué ocurre con la información que introduces.",
    lastUpdated: "Última actualización",
    back: "Volver al creador de CV",
    controllerTitle: "1. Responsable",
    controller:
      "El proyecto es operado personalmente por Javier López Villanueva. Es un proyecto personal y no existe una empresa o sociedad detrás de la aplicación.",
    contact: "Contacto de privacidad",
    noContact:
      "Actualmente no se publica un correo específico de privacidad en la aplicación.",
    infoTitle: "2. Información que utiliza la aplicación",
    infoCv:
      "Información del CV: nombre, profesión o rol, etiquetas, correo electrónico, teléfono, GitHub, LinkedIn y el texto que añadas en secciones como perfil, experiencia, educación, proyectos, habilidades, tecnologías e idiomas. Las secciones personalizadas admiten texto libre. La aplicación actual no incluye un campo para fotografía, dirección postal, portfolio o certificaciones, aunque el usuario podría escribir información similar en campos de texto libre.",
    infoTechnical:
      "Información técnica: al visitar una web alojada públicamente se producen peticiones HTTP normales. El proveedor de alojamiento puede procesar datos técnicos como la dirección IP, fecha y hora, recurso solicitado, navegador o información de diagnóstico necesaria para servir y proteger la web. El código de esta aplicación no combina esos datos con el contenido del CV.",
    infoAnalytics:
      "No se han detectado Vercel Analytics, Speed Insights, Google Analytics ni otros sistemas de analítica o seguimiento en el proyecto.",
    processingTitle: "3. Cómo se procesan los datos del CV",
    processing:
      "El contenido del CV se procesa directamente en tu navegador mediante React. La previsualización se genera en el dispositivo y una copia de trabajo puede guardarse en el almacenamiento local del navegador para mantener los cambios entre sesiones. No existe un backend ni una base de datos propia que almacene una copia del CV, y el código no envía su contenido a Vercel ni a otro servicio.",
    serverTitle: "4. Datos enviados al servidor",
    server:
      "El navegador descarga desde Vercel los archivos necesarios para ejecutar la aplicación. Esas peticiones pueden incluir datos técnicos habituales, como la IP y cabeceras del navegador. El contenido escrito en el CV no se incluye en esas peticiones. Los enlaces de correo, GitHub y LinkedIn del propio CV solo abren esos destinos cuando el usuario decide pulsarlos; esta aplicación no transmite automáticamente el CV a esos servicios.",
    pdfTitle: "5. Generación de PDF y archivos",
    pdf: "La impresión o guardado como PDF usa window.print() y estilos de impresión del navegador. El JSON se importa leyendo un archivo local con la API del navegador y se exporta creando un Blob descargable en el dispositivo. Ninguno de estos procesos necesita subir el CV a un servidor. El sistema de impresión o destino elegido por el usuario queda bajo el control del navegador y del dispositivo.",
    purposesTitle: "6. Finalidades",
    purposes: [
      "Crear, editar y previsualizar el CV solicitado por el usuario.",
      "Conservar el trabajo entre sesiones en el mismo navegador.",
      "Permitir importar y exportar los datos en JSON.",
      "Permitir imprimir o guardar el documento como PDF.",
      "Servir, mantener y proteger técnicamente la aplicación pública.",
    ],
    legalTitle: "7. Base jurídica",
    legal:
      "Las operaciones sobre el CV se realizan para proporcionar la funcionalidad que el usuario solicita al utilizar la herramienta. Cuando la normativa de protección de datos resulte aplicable al tratamiento técnico necesario para servir y proteger la web, este puede apoyarse en la prestación solicitada y en el interés legítimo de mantener un servicio seguro y operativo. No se utiliza un consentimiento genérico para justificar funciones esenciales y actualmente no existe analítica no esencial que requiera consentimiento.",
    retentionTitle: "8. Conservación",
    retention:
      "La copia local del CV permanece en este navegador hasta que el usuario use “Eliminar datos locales”, borre los datos del sitio o el navegador los elimine. La aplicación no establece un plazo remoto porque no mantiene una copia remota del CV. Los posibles registros técnicos de infraestructura son gestionados por Vercel conforme a su configuración y políticas; este repositorio no define ni permite justificar un plazo concreto para ellos.",
    storageTitle: "9. Almacenamiento local y cookies",
    storage:
      "localStorage no es una cookie. La aplicación utiliza exactamente dos claves: next-cv-builder-data para el CV guardado y next-cv-builder-app-language para la preferencia de idioma de la interfaz. No se ha detectado uso de sessionStorage ni creación de cookies en el código. Por ello no se muestra un banner de cookies. La opción “Eliminar datos locales” borra únicamente esas dos claves, nunca ejecuta localStorage.clear().",
    providersTitle: "10. Proveedores y terceros",
    providers:
      "Vercel proporciona la infraestructura de alojamiento y puede tratar los datos técnicos necesarios para entregar y proteger la web, pero el código no le envía el contenido del CV. GitHub aloja el repositorio del código fuente; no es receptor del contenido introducido en los CV por el mero hecho de alojar el código. No se han detectado otros proveedores de runtime, APIs externas, autenticación, pagos o tracking.",
    transfersTitle: "11. Transferencias internacionales",
    transfers:
      "Proveedores internacionales de infraestructura como Vercel pueden procesar datos técnicos desde distintas ubicaciones de acuerdo con sus propias condiciones, configuración y garantías aplicables. Esta aplicación no realiza una transferencia adicional del contenido del CV a esos proveedores.",
    rightsTitle: "12. Control y derechos",
    rights:
      "El usuario controla directamente el CV almacenado en su navegador. Javier López Villanueva no puede acceder remotamente a esa copia, recuperarla, modificarla ni borrarla desde un servidor. Puedes eliminarla mediante la opción disponible en el footer o desde la configuración de datos del sitio del navegador. Si contactas sobre información técnica que pudiera haber sido tratada al operar la web, podrás ejercer los derechos que te reconozca la normativa aplicable, cuando sea posible identificar dicha información.",
    securityTitle: "13. Seguridad",
    security:
      "Se aplican medidas razonables de diseño para reducir la exposición del CV, como procesarlo localmente y no crear una base de datos propia. Ningún sistema puede garantizar seguridad absoluta. El usuario debe proteger el acceso a su dispositivo, navegador y archivos exportados.",
    minorsTitle: "14. Menores",
    minors:
      "La herramienta no está dirigida específicamente a menores ni solicita su edad. Si un menor la utiliza, debe evitar incluir información innecesaria y contar con la orientación de su representante cuando corresponda.",
    changesTitle: "15. Cambios en esta política",
    changes:
      "La política puede actualizarse si cambia el funcionamiento técnico, los proveedores o los requisitos aplicables. La fecha de última actualización se mostrará siempre en esta página.",
  },
  en: {
    title: "Privacy Policy",
    intro:
      "This policy explains specifically how Next CV Builder works and what happens to the information you enter.",
    lastUpdated: "Last updated",
    back: "Back to the CV builder",
    controllerTitle: "1. Controller",
    controller:
      "The project is personally operated by Javier López Villanueva. It is a personal project and there is no company or corporation behind the application.",
    contact: "Privacy contact",
    noContact:
      "No specific privacy email is currently published in the application.",
    infoTitle: "2. Information used by the application",
    infoCv:
      "CV information: name, profession or role, tags, email address, phone number, GitHub, LinkedIn and text added to sections such as profile, experience, education, projects, skills, technologies and languages. Custom sections accept free text. The current application has no dedicated field for a photograph, postal address, portfolio or certifications, although a user could enter similar information in free-text fields.",
    infoTechnical:
      "Technical information: visiting a publicly hosted website creates ordinary HTTP requests. The hosting provider may process technical data such as IP address, date and time, requested resource, browser or diagnostic information needed to serve and protect the website. This application's code does not combine that data with CV content.",
    infoAnalytics:
      "No Vercel Analytics, Speed Insights, Google Analytics or other analytics or tracking systems were detected in the project.",
    processingTitle: "3. How CV data is processed",
    processing:
      "CV content is processed directly in your browser using React. The preview is generated on the device and a working copy may be saved in the browser's local storage to retain changes between sessions. There is no backend or proprietary database storing a copy of the CV, and the code does not send its content to Vercel or another service.",
    serverTitle: "4. Data sent to the server",
    server:
      "The browser downloads the files needed to run the application from Vercel. Those requests may include ordinary technical data such as IP address and browser headers. Text entered in the CV is not included in those requests. Email, GitHub and LinkedIn links in the CV only open those destinations when the user chooses to click them; this application does not automatically transmit the CV to those services.",
    pdfTitle: "5. PDF and file generation",
    pdf: "Printing or saving as PDF uses window.print() and the browser's print styles. JSON is imported by reading a local file with the browser API and exported by creating a downloadable Blob on the device. None of these processes requires uploading the CV to a server. The printing system or destination selected by the user remains under the control of the browser and device.",
    purposesTitle: "6. Purposes",
    purposes: [
      "Create, edit and preview the CV requested by the user.",
      "Keep work between sessions in the same browser.",
      "Allow JSON data import and export.",
      "Allow the document to be printed or saved as PDF.",
      "Serve, maintain and technically protect the public application.",
    ],
    legalTitle: "7. Legal basis",
    legal:
      "CV operations are performed to provide the functionality requested by the user when using the tool. Where data protection law applies to technical processing needed to serve and protect the website, it may rely on the requested service and the legitimate interest in maintaining a secure and operational service. Generic consent is not used to justify essential functions, and there is currently no non-essential analytics requiring consent.",
    retentionTitle: "8. Retention",
    retention:
      "The local CV copy remains in this browser until the user selects “Delete local data”, clears site data or the browser removes it. The application sets no remote retention period because it keeps no remote copy of the CV. Any infrastructure logs are managed by Vercel according to its configuration and policies; this repository does not define or support a specific retention period for them.",
    storageTitle: "9. Local storage and cookies",
    storage:
      "localStorage is not a cookie. The application uses exactly two keys: next-cv-builder-data for the saved CV and next-cv-builder-app-language for the interface language preference. No sessionStorage use or cookie creation was detected in the code. A cookie banner is therefore not shown. “Delete local data” removes only those two keys and never calls localStorage.clear().",
    providersTitle: "10. Providers and third parties",
    providers:
      "Vercel provides hosting infrastructure and may process technical data needed to deliver and protect the website, but the code does not send it CV content. GitHub hosts the source-code repository; it is not a recipient of content entered into CVs merely because it hosts the code. No other runtime providers, external APIs, authentication, payment or tracking services were detected.",
    transfersTitle: "11. International transfers",
    transfers:
      "International infrastructure providers such as Vercel may process technical data from different locations according to their own terms, configuration and applicable safeguards. This application does not make an additional transfer of CV content to those providers.",
    rightsTitle: "12. Control and rights",
    rights:
      "The user directly controls the CV stored in their browser. Javier López Villanueva cannot remotely access, retrieve, modify or delete that copy from a server. You can remove it using the footer option or the browser's site-data settings. If you contact us about technical information that may have been processed while operating the website, you may exercise the rights granted by applicable law where that information can be identified.",
    securityTitle: "13. Security",
    security:
      "Reasonable design measures are used to reduce CV exposure, such as processing it locally and not creating a proprietary database. No system can guarantee absolute security. Users should protect access to their device, browser and exported files.",
    minorsTitle: "14. Children",
    minors:
      "The tool is not specifically directed at children and does not ask for age. If a child uses it, they should avoid including unnecessary information and seek guidance from a guardian where appropriate.",
    changesTitle: "15. Changes to this policy",
    changes:
      "This policy may be updated if technical operation, providers or applicable requirements change. The last-updated date will always be shown on this page.",
  },
} as const;
