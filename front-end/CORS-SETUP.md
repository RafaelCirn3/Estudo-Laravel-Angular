# 🔧 Configuração CORS - Laravel Backend

Para que o frontend Angular consiga se comunicar com o backend Laravel, é necessário configurar o CORS (Cross-Origin Resource Sharing).

## Configuração Automática

O Laravel já vem com suporte a CORS através do pacote `fruitcake/laravel-cors` (incluído por padrão).

### Passo 1: Verificar o arquivo `config/cors.php`

Certifique-se de que o arquivo está configurado assim:

```php
<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'], // Em produção, especifique apenas: ['http://localhost:4200']

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
```

### Passo 2: Verificar middleware no `app/Http/Kernel.php`

Certifique-se de que o middleware CORS está ativo:

```php
protected $middleware = [
    // ...
    \Fruitcake\Cors\HandleCors::class,
    // ...
];
```

Ou em Laravel 11+, verifique em `bootstrap/app.php`:

```php
return Application::configure(basePath: dirname(__DIR__))
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->api(prepend: [
            \Illuminate\Http\Middleware\HandleCors::class,
        ]);
    })
    // ...
```

## Configuração Manual (se necessário)

Se o CORS não estiver funcionando, adicione os headers manualmente criando um middleware:

### 1. Criar Middleware

```bash
php artisan make:middleware Cors
```

### 2. Editar `app/Http/Middleware/Cors.php`

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    public function handle(Request $request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', 'http://localhost:4200')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    }
}
```

### 3. Registrar no Kernel

Em `app/Http/Kernel.php` ou `bootstrap/app.php`:

```php
protected $middleware = [
    \App\Http\Middleware\Cors::class,
];
```

## Testando a Conexão

### 1. Iniciar o Backend Laravel

```bash
cd back-end
php artisan serve
```

O servidor estará rodando em `http://localhost:8000`

### 2. Iniciar o Frontend Angular

```bash
cd front-end/front-end
npm start
```

O servidor estará rodando em `http://localhost:4200`

### 3. Testar no Navegador

Abra `http://localhost:4200` e verifique se as requisições estão funcionando.

## Problemas Comuns

### Erro: "CORS policy: No 'Access-Control-Allow-Origin' header"

**Solução**: Verifique se o middleware CORS está ativo e configurado corretamente.

### Erro: "blocked by CORS policy: Response to preflight request"

**Solução**: Certifique-se de que o método OPTIONS está permitido nas rotas da API.

Adicione em `routes/api.php` (se necessário):

```php
Route::options('{any}', function() {
    return response('', 200);
})->where('any', '.*');
```

### Erro de autenticação/cookies

**Solução**: Se usar autenticação com cookies, configure:

```php
// config/cors.php
'supports_credentials' => true,
'allowed_origins' => ['http://localhost:4200'],
```

E no frontend (se usar cookies):

```typescript
// Adicione withCredentials nas requisições HTTP
this.http.get(url, { withCredentials: true })
```

## Configuração de Produção

### CORS em Produção

```php
// config/cors.php
'allowed_origins' => [
    'https://seu-dominio.com',
    'https://www.seu-dominio.com'
],

'supports_credentials' => true,
```

### Environment do Frontend

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.seu-dominio.com/api'
};
```

## Verificação Final

✅ Backend Laravel rodando em `http://localhost:8000`  
✅ Frontend Angular rodando em `http://localhost:4200`  
✅ CORS configurado no Laravel  
✅ Environment configurado no Angular  
✅ Requisições HTTP funcionando  

---

**Com essa configuração, seu frontend e backend estarão se comunicando perfeitamente! 🚀**
