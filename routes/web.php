<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/f1', 'HomeController@indexFase1')->name('f1');

Route::get('/f2', 'HomeController@indexFase2')->name('f2');

Route::get('/f3', 'HomeController@indexFase3')->name('f3');

Route::get('/f4', 'HomeController@indexFase4')->name('f4');

Route::get('/f4_2', 'HomeController@indexFase4_2')->name('f4_2');

Route::get('/f4_3', 'HomeController@indexFase4_3')->name('f4_3');

Route::get('/f5', 'HomeController@indexFase5')->name('f5');

Route::get('/f6', 'Fase6Controller@index')->name('f6');

Route::get('/gracias', 'Fase6Controller@gracias')->name('gracias');

Route::resource('fase6', 'Fase6Controller');
