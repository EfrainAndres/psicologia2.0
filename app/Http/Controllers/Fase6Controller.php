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
