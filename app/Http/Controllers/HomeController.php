<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function indexFase1()
    {
        return view('fases/index');
    }

    public function indexFase2()
    {
        return view('fases/fase2');
    }

    public function indexFase3()
    {
        return view('fases/fase3');
    }

    public function indexFase4()
    {
        return view('fases/fase4');
    }

    public function indexFase4_2()
    {
        return view('fases/f4_fase2');
    }

    public function indexFase4_3()
    {
        return view('fases/f4_fase3');
    }

    public function indexFase5()
    {
        return view('fases/fase5');
    }
}
