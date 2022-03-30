var marks = ["","","","","","","","",""];
var jugador1 = true;
var ganador = false;

function reiniciar(){
    jugador1 = true;
    ganador = false;

    document.getElementById("tablero").classList.remove('tablaGanadora');
    document.getElementById("player").setAttribute("style","color:black;");
    document.getElementById("player").innerHTML = "PLAYER 1";
    document.getElementById("btnRes").setAttribute("style","visibility:hidden;")
    for(i=0;i<9;i++){
        document.getElementById(i).innerHTML = "";
        document.getElementById('c'+i).classList.remove('celdaGanadora');
        document.getElementById('c'+i).classList.remove('marcada');
        document.getElementById('c'+i).classList.add('celda');  
        marks[i] = "";

    }
}

function estavacio(){
    
    var flag = true;
    for(i=0;i<9;i++){
        if(marks[i] != ""){
            flag = false;
        }  
    }
    return flag;
}

function comparer(car,simb){
    return car == simb;
}

function cambioCelda(n1,n2,n3){
    document.getElementById("c"+n1).classList.remove('marcada');
    document.getElementById("c"+n1).classList.add('celdaGanadora');
    document.getElementById("c"+n2).classList.remove('marcada');
    document.getElementById("c"+n2).classList.add('celdaGanadora');
    document.getElementById("c"+n3).classList.remove('marcada');
    document.getElementById("c"+n3).classList.add('celdaGanadora');
}

function detectCell(simb){
    if((comparer(marks[0],simb) == true) && (comparer(marks[1],simb) == true) && (comparer(marks[2],simb) == true)){ 
        cambioCelda(0,1,2);
        ganador = true;
    }else{
        if((comparer(marks[0],simb) == true) && (comparer(marks[3],simb) == true) && (comparer(marks[6],simb) == true)){
            cambioCelda(0,3,6);
            ganador = true;
        }else{
            if((comparer(marks[6],simb) == true) && (comparer(marks[7],simb) == true) && (comparer(marks[8],simb) == true)){
                cambioCelda(6,7,8);
                ganador = true;
            }else{
                if((comparer(marks[2],simb) == true) && (comparer(marks[5],simb) == true) && (comparer(marks[8],simb) == true)){
                    cambioCelda(2,5,8);
                    ganador = true;
                }else{
                    if((comparer(marks[0],simb) == true) && (comparer(marks[4],simb) == true) && (comparer(marks[8],simb) == true)){
                        cambioCelda(0,4,8);
                        ganador = true;
                    }else{
                        if((comparer(marks[2],simb) == true) && (comparer(marks[4],simb) == true) && (comparer(marks[6],simb) == true)){
                            cambioCelda(2,4,6);
                            ganador = true;
                        }else{
                            if((comparer(marks[3],simb) == true) && (comparer(marks[4],simb) == true) && (comparer(marks[5],simb) == true)){
                                cambioCelda(3,4,5);
                                ganador = true;
                            }else{
                                if((comparer(marks[1],simb) == true) && (comparer(marks[4],simb) == true) && (comparer(marks[7],simb) == true)){
                                    cambioCelda(1,4,7);
                                    ganador = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function ganadorLoader(simb){
    if(simb == "X"){
        document.getElementById("player").setAttribute("style","color:black;");
        document.getElementById("player").innerHTML = "GANADOR: PLAYER 1";
        document.getElementById("score1").innerHTML = parseInt(document.getElementById("score1").innerHTML)+1;
    }else{
        document.getElementById("player").setAttribute("style","color:#631919;");
        document.getElementById("player").innerHTML = "GANADOR: PLAYER 2"; 
        document.getElementById("score2").innerHTML = parseInt(document.getElementById("score2").innerHTML)+1;
    }
    document.getElementById("tablero").classList.add('tablaGanadora');
    document.getElementById("btnRes").setAttribute("style","visibility:visible;")
}

function hayempate(){
    var flag = true;
    for(i=0;i<9;i++){
        if(marks[i] == ""){
            flag = false;
        }  
    }
    return flag;
}

function calcular(id){
    if(estavacio() == false){
        if(document.getElementById(id).innerHTML == "X"){
            detectCell("X");
        }else{
            detectCell("O");
        }
        if(ganador == true){
            ganadorLoader(document.getElementById(id).innerHTML);
        }else{
            if(hayempate() == true){
                document.getElementById("tablero").classList.add('tablaGanadora');
                document.getElementById("btnRes").setAttribute("style","visibility:visible;")
                document.getElementById("player").setAttribute("style","color:black;");
                document.getElementById("player").innerHTML = "EMPATE";
            }
        }
    }

}

function marcar(id,cid){
    if(marks[id] == ""){
        if(jugador1){
            document.getElementById("player").setAttribute("style","color:#631919;");
            document.getElementById("player").innerHTML = "PLAYER 2";
            marks[id] = "X";
            document.getElementById(id).innerHTML = "X";
            jugador1 = false;
        }else{
            document.getElementById("player").setAttribute("style","color:black;");
            document.getElementById("player").innerHTML = "PLAYER 1";
            marks[id] = "O";
            document.getElementById(id).innerHTML = "O";
            jugador1 = true;
        }
        document.getElementById(cid).classList.add('marcada');
        document.getElementById(cid).classList.remove('celda');
    }
    calcular(id);
}