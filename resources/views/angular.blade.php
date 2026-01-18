<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Jose Carranco</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Jose Carranco Portfolio" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('angular/dist/styles.css') }}">
  </head>
  <body>
    <app-root></app-root>
    <script src="{{ asset('angular/dist/runtime.js') }}" type="module"></script>
    <script src="{{ asset('angular/dist/polyfills.js') }}" type="module"></script>
    <script src="{{ asset('angular/dist/main.js') }}" type="module"></script>
  </body>
</html>
