<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Answer;

class Fase6Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('fases/fase6');
    }

    public function gracias()
    {
        return view('fases/gracias');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $idUser = auth()->user()->id;
        $preguntaUno = $request['preguntaUno'];
        $preguntaDos = $request['preguntaDos'];
        $preguntaTres = $request['preguntaTres'];
        $preguntaCuatro = $request['preguntaCuatro'];
        $preguntaCinco = $request['preguntaCinco'];
        $preguntaSeis = $request['preguntaSeis'];
        $preguntaSiete = $request['preguntaSiete'];
        $preguntaOcho = $request['preguntaOcho'];

        $timeP1_P2 = $request['timeP1_P2'];
        $timeP2_P3 = $request['timeP2_P3'];
        $timeP3_P4 = $request['timeP3_P4'];
        $timeP4_P5 = $request['timeP4_P5'];
        $timeP5_P6 = $request['timeP5_P6'];
        $timeP6_P7 = $request['timeP6_P7'];
        $timeP7_P8 = $request['timeP7_P8'];
        $timeP8_FIN = $request['timeP8_FIN'];

        $time1_2 = $timeP1_P2;
        $time2_3 = $timeP2_P3 - $timeP1_P2;
        $time3_4 = $timeP3_P4 - $timeP2_P3;
        $time4_5 = $timeP4_P5 -  $timeP3_P4;
        $time5_6 = $timeP5_P6 -  $timeP4_P5;
        $time6_7 = $timeP6_P7 -  $timeP5_P6;
        $time7_8 = $timeP7_P8 -  $timeP6_P7;
        $time8_9 = $timeP8_FIN -  $timeP7_P8;

        Answer::create( [
            'idUser' => $idUser,
            'preguntaUno' => $preguntaUno,
            'preguntaDos' => $preguntaDos,
            'preguntaTres' => $preguntaTres,
            'preguntaCuatro' => $preguntaCuatro,
            'preguntaCinco' => $preguntaCinco,
            'preguntaSeis' => $preguntaSeis,
            'preguntaSiete' => $preguntaSiete,
            'preguntaOcho' => $preguntaOcho,

            'timeP1_P2' => $time1_2,
            'timeP2_P3' => $time2_3,
            'timeP3_P4' => $time3_4,
            'timeP4_P5' => $time4_5,
            'timeP5_P6' => $time5_6,
            'timeP6_P7' => $time6_7,
            'timeP7_P8' => $time7_8,
            'timeP8_FIN' => $time8_9,
        ]);

        return redirect('/gracias')->with('success','Solicitud Enviada Correctamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
