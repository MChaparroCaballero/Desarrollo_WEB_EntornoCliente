<?php
// Permitir que cualquier frontend acceda (evita errores de CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Datos de ejemplo
$usuarios = [
    [ "id" => 1, "nombre" => "Ana", "email" => "ana@example.com" ],
    [ "id" => 2, "nombre" => "Luis", "email" => "luis@example.com" ],
    [ "id" => 3, "nombre" => "Marta", "email" => "marta@example.com" ]
];

// Convertir el array a formato JSON y mostrarlo
echo json_encode($usuarios);