<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// API routes
Route::prefix('api')->group(function () {
    Route::get('/get-all-projects', [ProjectsController::class, 'getAllProjects']);
    Route::get('/get-all-skills', [ProjectsController::class, 'getAllSkills']);
    Route::get('/get-project', [ProjectsController::class, 'getProject']);
    Route::get('/get-project-skills', [ProjectsController::class, 'getProjectSkills']);
    Route::get('/get-project-description', [ProjectsController::class, 'getProjectDescriptions']);
    // Route::post('/contact-submit', [ContactController::class, 'contactSubmit']);
    Route::get('/verify', [AuthController::class, 'verify']);
});

// React app (legacy)
Route::get('/react/{any}', function () {
    return view('app');
})->where('any', '.*');

// Angular app (default)
Route::get('/{any}', function () {
    return view('angular');
})->where('any', '.*');
