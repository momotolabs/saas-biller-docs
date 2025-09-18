---
title: Generar Factura Electrónica paso a paso
description: A guide in my new Starlight docs site.
---

**Generación de facturas**

Para crear una nueva factura, dar clic en la sección facturas que se encuentra en el menú principal

![Página de registro](../../../biller/facturas1.png)

 Al desplegarse la pantalla principal de **Facturas** haz clic en el botón “Nueva factura electrónica”

![Página de registro](../../../biller/nueva-facturaboton.png)

 Al seleccionarlo, se abrirá un modal en el que podrás elegir el tipo de factura que deseas generar de la lista disponible 

 ![Página de registro](../../../biller/modal-factura.png)

 ## Seleccción tipo de factura ##

Del modal desplegado, selecciona la opción **Factura** 

![Página de registro](../../../biller/select.png)

Luego haz clic en el botón **Confirmar.**

![Página de registro](../../../biller/confirmarbtn.png)



## Llenado de  Formulario Factura electrónica ##

Automáticamente se  despliega el formulario de creación de factura

![Página de registro](../../../biller/form-felectronica.png)

## Añadir cliente ##

Para la emisión de una factura electrónica, **el registro del cliente no siempre es obligatorio. Solo será requerido cuando el monto de la factura supere los veinticinco mil dólares,aplicable únicamente a este tipo de factura.** En los demás casos, el ingreso de los datos del cliente es obligatorio.

El formulario para añadir un cliente se despliega al hacer clic en el botón **“Añadir cliente”.**

![Página de registro](../../../biller/add-cliente.png)

Al hacer clic en el botón “Añadir cliente”, se despliega un formulario adicional. En este, **si el cliente ya existe, puede buscarse ingresando su número de documento de identidad.**
En caso de que no exista, es posible crear un nuevo registro desde cero, seleccionando el tipo de cliente correspondiente: Natural o Jurídico.

![Página de registro](../../../biller/add-cliente1.png)

## Añadir cliente natural: ##

El cliente natural solicita los siguientes campos requeridos **(*)**

•	Nombre 

•	Tipo de documento (NIT, DUI, Pasaporte, Otro, Carnet de residente)

•	Número de documento

•	Dirección de correo electrónico 


**Nota aclaratoria: este es único para cada cliente, no puede usarse para registrar clientes diferentes con el mismo correo, cada cliente debe tener un correo diferente, si es personal o de uso comercial (empresa)**

•	Departamento

•	Municipio

•	Dirección

Mediante el siguiente formulario:

![Página de registro](../../../biller/natural-form.png)


Al completar los campos clic en el botón **guardar** y se agrega de forma automática al modal 

![Página de registro](../../../biller/agregadoc.png)


## Añadir cliente jurídico: ##

El cliente jurídico solicita los siguientes campos requeridos **(*)**

•	Nombre

•	NRC

•	NIT

•	Teléfono

•	Nombre comercial 

•	Correo electrónico 

**Nota aclaratoria: este es único para cada cliente, no puede usarse para registrar clientes diferentes con el mismo correo, cada cliente debe tener un correo diferente, si es personal o de uso comercial (empresa)**

•	Actividad económica (seleccionar del catalogo que se despliega)

•	Departamento 

•	Municipio

•	Dirección 

Mediante el siguiente formulario:

![Página de registro](../../../biller/add-clientej.png)


Al completar los campos clic en el botón **guardar** y se agrega de forma automática al modal 

![Página de registro](../../../biller/add-cliente2.png)

## Añadir productos ##

Para añadir un producto, haga clic en el botón **“Añadir producto”.**

![Página de registro](../../../biller/add-producto.png)

A continuación, seleccione el tipo de producto que desea registrar entre las siguientes opciones:


![Página de registro](../../../biller/lista.png)


- Producto o servicio

- Ítem no afecto

- Otro tipo de contribuciones

## Añadir productos o sevicios ##

**Nota: La búsqueda de productos puede realizarse por descripción o código de producto:**

Para añadir un producto como bien o servicio, el sistema solicita completar los siguientes campos: 

**Los campos marcados con (*) son obligatorios.**

![Página de registro](../../../biller/product-servicio.png)

- Cantidad (*)

- Precio unitario (*)

- Tipo de venta (*): gravada, exenta o no sujeta

- Monto de descuento

- Total (*)


Al completar los campos requeridos debera dar clic en el botón **Guardar** y el producto sera añadido al modal

![Página de registro](../../../biller/producto1.png)


## Añadir ítems no afectos ##


En esta sección se deben completar únicamente los siguientes campos:

**Los campos marcados con (*) son obligatorios.**

![Página de registro](../../../biller/no-afecto.png)

- Tipo de ítem (*): Bienes

- Descripción (*)

- Monto (*)

Al completar los campos requeridos debera dar clic en el botón **Guardar** y el producto sera añadido al modal

![Página de registro](../../../biller/no-afectop.png)


## Añadir otras contribuciones ##

En esta sección se deben completar los siguientes campos obligatorios:

**Los campos marcados con (*) son obligatorios.**

![Página de registro](../../../biller/otrasc.png)

- Tipo de venta (*): gravada, exenta o no sujeta

- Código del tributo (*)

- Descripción (*)

- Monto (*)

Al completar los campos requeridos debera dar clic en el botón **Guardar** y el producto sera añadido al modal

![Página de registro](../../../biller/otrasc1.png)


## Añadir información de pago ##

En esta sección se define la forma en que se llevará a cabo la transacción. Para ello, es necesario seleccionar la condición de operación, la cual puede ser:


![Página de registro](../../../biller/info-pago.png)


- Contado

- Crédito

- Otro

Posteriormente de haber realizado la selección de la Condicion de la operación, hay que **añadir un método de pago** desde el catálogo que se despliega. 
![Página de registro](../../../biller/catalogo-pago.png)


Luego dar clic en el botón **Guardar**

![Página de registro](../../../biller/fpago.png)

De forma inmediata se añade al modal de pago 

![Página de registro](../../../biller/fpago1.png)

De no seleccionar una opción de las requeridas, muestra el siguiente modal indicando que se debe seleccionar un método de pago 


![Página de registro](../../../biller/observaciones.png)


## Información adicional ##

Esta sección permite registrar especificaciones complementarias vinculadas al tipo de documento a emitir. Las opciones disponibles son:

![Página de registro](../../../biller/info-adicional.png)

- Extensión

- Venta a cuenta de terceros

- Otros documentos asociados

- Documentos relacionados

El llenado de esta sección deberá realizarse conforme al modelo de negocio correspondiente. En caso de que la información no aplique a las operaciones del usuario, no será necesario completarla.


## Extensión ##

Para añadir la extensión de un cliente, es necesario completar los siguientes campos obligatorios (*):



![Página de registro](../../../biller/extension.png)

- Tipo de documento del receptor (*)

- Número de identificación del receptor (DUI, NIT, Pasaporte, Carnet de residente, Otro) (*)

**Nota: El número de documento debe ser veridico, de lo contrario el sistema le dira que es invalido**

- Nombre del receptor (*)

- Placa de vehículo (*)

Una vez completados los campos, haga clic en el botón **Agregar extensión**

![Página de registro](../../../biller/extension1.png)

## Venta a terceros ##

Si la generación del DTE no corresponde a una venta a cuenta de terceros, no será necesario completar esta sección. En caso contrario, cuando el DTE se emita a nombre de un tercero, deberán ingresarse los siguientes datos:

![Página de registro](../../../biller/cterceros.png)

- NIT

- Nombre
 
 Una vez completados los campos, haga clic en el botón **Guardar** y sera añadido al modal

 ![Página de registro](../../../biller/terceros.png)

 ## Documentos asociados ##

 Los documentos asociados son requeridos en los siguientes casos:

- Factura electrónica

- Comprobante de crédito fiscal

- Factura de exportación


Estos documentos pueden estar vinculados a:

- Emisor/Receptor

- Médico

**Emisor / Receptor:**

Si se requiere asociar un documento que corresponde al Emisor o al Receptor se mostrará la siguiente pantalla al dar clic en el documento seleccionado

- Emisor

 ![Página de registro](../../../biller/emisor.png)

 - Receptor

  ![Página de registro](../../../biller/receptor.png)
  
  **Médico**

  Cuando sea necesario asociar un documento que corresponda a un médico, al dar clic en el documento seleccionado se mostrará la pantalla correspondiente. **Esta opción aplica únicamente para el Comprobante de Crédito Fiscal y la Factura.**

Para completar el registro, el usuario deberá llenar los siguientes campos obligatorios (*) y opcionales:

  ![Página de registro](../../../biller/medico.png)

- Documento asociado (*)

- Servicio realizado (*)

- Nombre del médico que prestó el servicio (*)

- Descripción del documento asociado

- Identificación del documento asociado

- NIT del médico que prestó el servicio (*)

Una vez ingresada la información requerida, **haga clic en el botón Agregar para guardar el documento asociado.**

Al finalizar el llenado de los campos, **haga clic en el botón Guardar factura.**

  ![Página de registro](../../../biller/gfactura.png)

 De esta manera, la factura se generará correctamente y quedará lista para el proceso de sellado por parte del Ministerio de Hacienda.

