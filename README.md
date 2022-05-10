# Ta-te-ti Challenge


# Back

En la carpeta `back`, debe ejecutarse `npm install`, para instalar  las dependencias requeridas.
Tambien debera crearse un archivo `.env`, donde deberan estar presentes las siguientes variables,
con sus respectivos valores.

```
    DB_USER= ""
    DB_PASSWORD= ""
    DB_HOST= localhost
    DB_NAME= ""
 
```

* Con el comando `npx jasmine`, posicionados en la carpeta `back`, se ejecutaran los test correspondientes.


# Route 

### Create User: 

- Metodo: post.
- Route: /user/createUser

```
   {
      name: "user_default",
      username: "user_test"
   }

```

### All user: 

- Metodo: get
- Route: /user/allUser


### Create game:

- Metodo: post
- Route: /game/createGame

```
    {
       players: ["user_test_01", "user_test_02"],
       winner: "user_test_01",
       loser: "user_test_02",
       equality: "",
       user: ["user_test_01", "user_test_02"]
    
    }


```

### All games

- Metodo: get
- Route: /game/allGame


# Client

Asi tambien, en la carpeta `client`, debera ejecutarse tambien el comando `npm install`, a fin de instalar 
las dependencias requeridas. 
