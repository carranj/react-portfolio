<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ContactController;

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

Route::prefix('api')->group(function () {
    Route::get('/get-all-projects', [ProjectsController::class, 'getAllProjects']);
    Route::get('/get-project', [ProjectsController::class, 'getProject']);
    Route::get('/get-project-skills', [ProjectsController::class, 'getProjectSkills']);
    Route::get('/get-project-description', [ProjectsController::class, 'getProjectDescriptions']);
    Route::post('/contact-submit', [ContactController::class, 'contactSubmit']);
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
