<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

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
        $answerUsers =
        DB::select(DB::raw("SELECT
        users.name,
        answers.preguntaUno,
        answers.preguntaDos,
        answers.preguntaTres,
        answers.preguntaCuatro,
        answers.preguntaCinco,
        answers.preguntaSeis,
        answers.preguntaSiete,
        answers.preguntaOcho,
        answers.timeP1_P2,
        answers.timeP2_P3,
        answers.timeP3_P4,
        answers.timeP4_P5,
        answers.timeP5_P6,
        answers.timeP6_P7,
        answers.timeP7_P8,
        answers.timeP8_FIN,
        answers.created_at
        FROM
        users
        INNER JOIN
        answers
        ON
            users.id = answers.idUser
        WHERE
            users.FK_RolesId = 2
        ORDER BY
            answers.created_at DESC"));

        return view('home', compact('answerUsers'));
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
