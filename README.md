# Сервер для мобильной аэропонной установки

## Конечные точки

### _/auth/_

#### _/auth/registration_
Параметры:
```json
{
    "body": {
        "email": "string",
        "username": "string",
        "password": "string"
    }
}
```
Описание:

Регистрация нового пользователя

Возвращаемое значение:
```json
{
    "token": "string"
}
```

___

#### _/auth/login_
Параметры:
```json
{
    "body": {
        "email": "string",
        "password": "string"
    }
}
```
Описание:

Аутенфикация пользователя

Возвращаемое значение:
```json
{
    "token": "string"
}
```


### _/experiment/_

#### _/experiment/_
Параметры:
_/experiment/new?id=string_id_string

Описание:
Получить эксперимент по индификатору

Возвращаемое значение:
```json
{
    "experiment": {}
}
```

___

#### _/experiment/new_
Параметры:
```json
{
    "body": {
        "title": "string",
        "description": "string"
    }
}
```

Описание:
Создать новый эксперимент

Возвращаемое значение:
```json
{
    "id": "id_id_id"
}
```

___

#### _/experiment/measurement_
Параметры:
```json
{
    "body": {
        "id": "string",
        "measurement": {}
    }
}
```

Описание:

Запись новых результатов экспериментов

Возвращаемое значение:
```json
{
    "experiment": {}
}
```

___

#### _/experiment/title
Параметры:
```json
{
    "body": {
        "id": "string",
        "title": "string"
    }
}
```

Описание:

Редактирования названия

Возвращаемое значение:
```json
{
    "experiment": {}
}
```

___

#### _/experiment/description
Параметры:
```json
{
    "body": {
        "id": "string",
        "description": "string"
    }
}
```

Описание:

Редактирвоание описания

Возвращаемое значение:
```json
{
    "experiment": {}
}
```

### _/device/_
#### _/device/_
_/device/?id=id_id_id_

Описание:

Получить информацию по устройству по индификатору

Возвращаемое значение:
```json
{
     "device": {}
}
```

___

#### _/device/new_
Параметры:
```json
{
    "header": {
        "Authorization": "Bearer token"
    },
    "body": {
        "name": "string",
        "passord": "string",
        "description": "string"
    }
}
```

Описание:

Инициализировать новое устройтсво

Возвращаемое значение:
```json
{
     "status": true
}
```

___

#### _/device/experiment_
Параметры:
```json
{
    "header": {
        "Authorization": "Bearer token"
    },
    "body": {
        "id": "string"
    }
}
```

Описание:

Завершить текущий эксперимент и начать новый

Возвращаемое значение:
```json
{
     "status": true
}
```

___

#### _/device/description_
Параметры:
```json
{
    "header": {
        "Authorization": "Bearer token"
    },
    "body": {
        "id": "string",
        "description": "string"
    }
}
```

Описание:

Изменить описание эксперимента

Возвращаемое значение:
```json
{
     "status": true
}
```

___

#### _/device/experiment-push_
Параметры:
```json
{
    "body": {
        "name": "string",
        "password": "string",
        "measurements": {},
        "date": 11.11.2000
    }
}
```

Описание:

Добавить измерения в текущий экспримент

Возвращаемое значение:
```json
{
     "status": true
}
```

### _/user/_

#### POST _/user/password_
Параметры:
```json
{
    "header": {
        "Authorization": "Bearer token"
    },
    "body": {
        "password_": "string",
    }
}
```

Описание:

Изменить пароль пользователя

Возвращаемое значение:
```json
{
     "status": true
}
```

___

#### POST _/user/username_
Параметры:
```json
{
    "header": {
        "Authorization": "Bearer token"
    },
    "body": {
        "username": "string",
    }
}
```

Описание:

Изменить имя пользователя

Возвращаемое значение:
```json
{
     "status": true
}
```
