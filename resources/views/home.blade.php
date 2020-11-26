@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

                @php
                $rol = auth()->user()->rol->nombre;
                @endphp

                @if ($rol == 'Normal')
                    <div class="card">
                        <div class="card-header">Prueba Psicotécnica!</div>

                        <div class="card-body">

                            @php
                                $iduser = auth()->user()->id;
                                $exists = DB::table('answers')->where('idUser',$iduser)->first();
                            @endphp

                            @if (!isset($exists))
                                Has Ingresado, <a href="/f6"> ir a la prueba!</a>
                            @else
                                Has Ingresado, ya realizaste la prueba!
                            @endif
                            
                        </div>
                    </div>
                @endif

                @if ($rol == 'Administrador')
                    <div class="card">
                        <div class="card-header">Resultados Pruebas!</div>

                        <div class="card-body">
                            <table id="example" class="table table-bordered table-hover table-responsive"
                                style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Nombre Usuario</th>
                                        <th>Pregunta 1</th>
                                        <th>Pregunta 2</th>
                                        <th>Pregunta 3</th>
                                        <th>Pregunta 4</th>
                                        <th>Pregunta 5</th>
                                        <th>Pregunta 6</th>
                                        <th>Pregunta 7</th>
                                        <th>Pregunta 8</th>
                                        <th>Tiempo 1 a 2</th>
                                        <th>Tiempo 2 a 3</th>
                                        <th>Tiempo 3 a 4</th>
                                        <th>Tiempo 4 a 5</th>
                                        <th>Tiempo 5 a 6</th>
                                        <th>Tiempo 6 a 7</th>
                                        <th>Tiempo 7 a 8</th>
                                        <th>Tiempo 8 fin</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($answerUsers as $answerUser)
                                        <tr>
                                            <td>{{ $answerUser->name }}</td>
                                            <td>{{ $answerUser->preguntaUno }}</td>
                                            <td>{{ $answerUser->preguntaDos }}</td>
                                            <td>{{ $answerUser->preguntaTres }}</td>
                                            <td>{{ $answerUser->preguntaCuatro }}</td>
                                            <td>{{ $answerUser->preguntaCinco }}</td>
                                            <td>{{ $answerUser->preguntaSeis }}</td>
                                            <td>{{ $answerUser->preguntaSiete }}</td>
                                            <td>{{ $answerUser->preguntaOcho }}</td>
                                            <td>{{ $answerUser->timeP1_P2 }} seg</td>
                                            <td>{{ $answerUser->timeP2_P3 }} seg</td>
                                            <td>{{ $answerUser->timeP3_P4 }} seg</td>
                                            <td>{{ $answerUser->timeP4_P5 }} seg</td>
                                            <td>{{ $answerUser->timeP5_P6 }} seg</td>
                                            <td>{{ $answerUser->timeP6_P7 }} seg</td>
                                            <td>{{ $answerUser->timeP7_P8 }} seg</td>
                                            <td>{{ $answerUser->timeP8_FIN }} seg</td>
                                            <td>{{ $answerUser->created_at }}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
