#  Day 04 - Frontend boot camp

## Contents

1. [Chapter I](#chapter-i) \
   1.1. [Express](#express) 
2. [Chapter II](#chapter-ii) \
   2.1 [Работа с БД через node.js](#работа-с-бд-через-nodejs) \
   2.2 [Rest API](#rest-api) \
   2.3 [Работа с Postman](#работа-с-Postman) 



## Chapter I
В этой главе мы рассмотрим создание сервера с помощью фреймворка Express. Подключим базу данных к серверу, рассмотрим архитектурный подход REST API и научимся работать с Postman. 

**Важно!**
Если ты знаком с другим фреймворком, на котором ты можешь написать небольшой сервер, или ты знаешь язык, на котором можешь это реализовать, и ты не видишь необходимости в изучении фреймворка express, ты можешь выполнять задания текущего и последующих дней с помощью той технологии, которой владеешь. Однако в таком случае необходимо в папке задания написать инструкцию по запуску сервера в файле instructions.md, чтобы у проверяющих не возникло вопросов в ходе проверки твоих заданий.

### Express
Express — это фреймворк для Node.js, который реализовывает слой функций, необходимых для создания эффективных приложений и API.
[Express предоставляет следующие механизмы](./materials/Express.md).

## Chapter II

### Работа с БД через node.js

Для подключения базы данных к серверу и работы с ней мы будем использовать Sequelize. \
Sequelize — это популярный ORM, созданный для Node.js. \
Взаимодействие с базами данных - обычная задача для серверных приложений. Обычно это выполнялось с помощью необработанных SQL-запросов, которые может быть сложно построить, особенно для тех, кто плохо знаком с SQL или базами данных в целом.
В конце концов, появились объектно-реляционные сопоставители (ORM), призванные упростить управление базами данных. Они автоматически отображают объекты (сущности) из нашего кода в реляционной базе данных, как следует из названия.

Пример связки [sequelize + express](https://github.com/sequelize/express-example/tree/master/express-main-example/express).

### Rest API

REST API — является самым популярным архитектурным решением взаимодействия веб-приложения с сервером. Его также называют RESTful.

Термин состоит из двух аббревиатур, которые расшифровываются следующим образом. API (Application Programming Interface) — это код, который позволяет двум приложениям обмениваться данными с сервера. На русском языке его принято называть программным интерфейсом приложения. REST (Representational State Transfer) — это способ создания API с помощью протокола HTTP. На русском его называют «передачей репрезентативного состояния» или «передачей „самоописываемого“ состояния».

REST API можно применить везде, где веб-приложению необходимо предоставить данные с сервера. Например при отображении профиля в социальных сетях. На данный момент это самый распространенный способ организации API. Он вытеснил ранее популярные способы SOAP и WSDL.

Сам по себе RESTful не является стандартом или протоколом. Разработчики руководствуются принципами REST API для создания эффективной работы с серверов для своих сайтов и приложений.

**Принципы REST API**

У RESTful есть [7 принципов написания кода интерфейсов](./materials/Restful.md).

**Упражнение 1.** \
Представь, что к тебе пришел заказчик с просьбой разработать приложение для внутреннего пользования сотрудниками ресторана. На первом этапе тебе нужно создать БД под будущее приложение. [Заказчик приложил ТЗ](./src/chapter_2/Exercise_1.md). Рекомендации к выполнению задания, представлены в ТЗ.
### Работа с Postman

“Разработка API сложна, Postman делает её лёгкой” © Postdot Technologies, Inc

Основное предназначение приложения — создание коллекций с запросами к твоему API. Любой разработчик или тестировщик, открыв коллекцию, сможет с лёгкостью разобраться в работе твоего сервиса. Ко всему прочему Postman позволяет проектировать дизайн API и создавать на его основе Mock-сервер. Твоим разработчикам больше нет необходимости тратить время на создание «заглушек». Реализацию сервера и клиента можно запустить одновременно.

Пример запроса в Postman:

<img width="721" alt="EventLoop" src="https://user-images.githubusercontent.com/48245816/170867197-d13e35ed-a54d-4735-b5e7-fbc74a9cae88.jpg">


[Скачать Postman](https://www.postman.com)

**Упражнение 2.** \
Теперь тебе надо создать сервис, связав твою БД из прошлого задания и небольшой сервер на Express, который ты напишешь. 

Должны обрабатываться следующие endpoints: \
`-` GET /menu — клиент может посмотреть меню и все, что в него входит. \
`-` POST /orders — создать заказ. \
`-` PUT /orders/id — изменить заказ. \
`-` DELETE /orders/id — закрыть заказ (для закрытия советуем не удалять запись из таблицы, а просто изменять одно из полей с true на false). \
`-` GET /orders — получить все текущие заказы из ресторана. \
`-` POST /waiters —  возможность добавить нового сотрудника.

>Пожалуйста, оставьте обратную связь по проекту в [форме обратной связи.](https://forms.gle/a18zQDu7J6Yt7Jw19)