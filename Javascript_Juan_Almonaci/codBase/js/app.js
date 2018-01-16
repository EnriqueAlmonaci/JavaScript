var display = document.getElementById('display');
var cantidad = "";
var cantidades = [];
var resultado = 0;
var ciclos = 0;
var ultimaop = "", ultimonum = "";
var Calculadora = document.querySelectorAll("img");
for (var i=0;i<Calculadora.length;i++)
{
Calculadora[i].addEventListener('click',function(){
var id = this.id;
var btn = document.getElementById(id);

if (btn)
{
    var w = btn.width - 2;
    var h = btn.height - 2;
    btn.style.width = w + "px";
    btn.style.height = h + "px";
    window.setTimeout(function(){
    btn.style.width = w + 2 + "px";
    btn.style.height = h + 2 + "px";},100);

    switch (btn.id) {
      case "on":
        cantidad = "";
        resultado = 0;
        cantidades = [];
        ciclos = 0;
        ultimaop = "";
        ultimonum = "";
        display.innerHTML = "0";
        break;
      case "1":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "1";

          }
          display.innerHTML = cantidad;
          break;
      case "2":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "2";
          }
          display.innerHTML = cantidad;
          break;
      case "3":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "3";
          }
          display.innerHTML = cantidad;
          break;
      case "4":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "4";
          }
          display.innerHTML = cantidad;
          break;
      case "5":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "5";
          }
          display.innerHTML = cantidad;
          break;
      case "6":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "6";
          }
          display.innerHTML = cantidad;
          break;
      case "7":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "7";
          }
          display.innerHTML = cantidad;
          break;
      case "8":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "8";
          }
          display.innerHTML = cantidad;
          break;
      case "9":
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
            cantidad = cantidad + "9";
          }
          display.innerHTML = cantidad;
          break;
      case "0":
        if (cantidad == 0)
        {
            cantidad = "";
            display.innerHTML = "0";
        }
        else {
            if (cantidad.length == 8)
            {
              cantidad = cantidad;
            }
            else {
              cantidad = cantidad + "0";
            }
            display.innerHTML = cantidad;
        }
        break;
      case "punto":
      if (cantidad == "0")
      {
          cantidad = "";
          display.innerHTML = "0";
      }
      else
      {
        if(cantidad.indexOf('.') != -1){
          display.innerHTML = cantidad;
        }
        else {
          if (cantidad.length == 8)
          {
            cantidad = cantidad;
          }
          else {
                cantidad = cantidad + ".";

                if (cantidades.length >= 1)
                {
                    cantidades = [];
                }

              }

          display.innerHTML = cantidad;
        }
      }
        break;
      case "sign":
        if (cantidad == "0")
        {
          cantidad = "";
          display.innerHTML = "0";
        }
        else {
          if(cantidad.indexOf('-') != -1){

                cantidad = cantidad.substring(1,cantidad.length);
                display.innerHTML = cantidad;

          }
          else {
              if (cantidad.length == 8)
              {
                if (resultado != 0)
                {
                  cantidad = resultado.toString();
                }
                else {
                    cantidad = cantidad;
                }

              }
              else {
                if (resultado != 0 && cantidad == "")
                {
                  if (resultado < 0)
                  {
                    resultado = Math.abs(resultado);
                    cantidades.splice(0,1, resultado);
                    cantidad = "";
                    display.innerHTML = resultado.toString().substring(0,8);
                  }
                  else {

                      resultado = eval(resultado * -1);
                      cantidades.splice(0,1, resultado);
                      cantidad = "";
                      display.innerHTML = resultado.toString().substring(0,8);
                  }

                }
                else {
                    cantidad = "-" + cantidad;
                    display.innerHTML = cantidad;
                }

              }

          }
        }
        break;
        case "mas":
          if (cantidad == "0")
          {
            cantidad = 0;

          }else if (cantidad == "" && cantidades.length == 0){

            cantidades.push("0");
            cantidades.push("+");
            cantidad = "";
          }
          else if (cantidad != "" && cantidades.length > 0);
          {

            if ( cantidades[0] == "0")
            {
              cantidades.splice(1,1,"+");
            }
            else {
              cantidades.push(cantidad);
              cantidades.push("+");
            }
            cantidad = "";
          }
          if (ciclos > 0)
          {
            ciclos = 0;
          }
          display.innerHTML = cantidad;
          break;
        case "menos":
          if (cantidad == "0")
          {
            cantidad = 0;

          }else if (cantidad == "" && cantidades.length == 0){

            cantidades.push("0");
            cantidades.push("-");
            cantidad = "";
          }
          else if (cantidad != "" && cantidades.length > 0);
          {
            if ( cantidades[0] == "0")
            {
              cantidades.splice(1,1,"-");
            }
            else {
              cantidades.push(cantidad);
              cantidades.push("-");
            }
            cantidad = "";
          }
          if (ciclos > 0)
          {
            ciclos = 0;
          }
          display.innerHTML = cantidad;
          break;
        case "por":
          if (cantidad == "0")
          {
            cantidad = 0;

          }else if (cantidad == "" && cantidades.length == 0){

            cantidades.push("0");
            cantidades.push("*");
            cantidades.push("0");
            cantidad = "";
          }
          else if (cantidad != "" && cantidades.length > 0);
          {
            if ( cantidades[0] == "0")
            {
              cantidades.splice(1,1,"*");
            }
            else {
              cantidades.push(cantidad);
              cantidades.push("*");
            }
            cantidad = "";
          }
          if (ciclos > 0)
          {
            ciclos = 0;
          }
          display.innerHTML = cantidad;
          break;
        case "dividido":
          if (cantidad == "0")
          {
            cantidad = 0;

          }else if (cantidad == "" && cantidades.length == 0){

            cantidades.push("0");
            cantidades.push("/");
            cantidades.push("0");
            cantidad = "";
          }
          else if (cantidad != "" && cantidades.length > 0);
          {
            if ( cantidades[0] == "0")
            {
              cantidades.splice(1,1,"/");
            }
            else {
              cantidades.push(cantidad);
              cantidades.push("/");
            }
            cantidad = "";
          }
          if (ciclos > 0)
          {
            ciclos = 0;
          }
          display.innerHTML = cantidad;
        break;
        case "igual":

        if (cantidades[2] == "0")
        {
          if (cantidad != "")
          {
              cantidades.splice(2,1,cantidad)
          }

        }
        else {

            if (cantidad != "" && ciclos == 0)
            {
                cantidades.push(cantidad);
            }
            else {

                if(ciclos == 0)
                {
                  cantidades.push(cantidades[0]);
                }
                else {

                  if (cantidades.length == 0 && cantidad != "")
                  {
                    cantidades.push(cantidad);
                    ultimonum = cantidad;
                  }

                }
            }

        }


        if (cantidades.length >= 3)
        {
           ultimaop = cantidades[cantidades.length-2];
           ultimonum = cantidades[cantidades.length-1];

        }
        else {
          if (ciclos > 0 && ultimaop != "" && ultimonum != "")
          {
            cantidades.push(ultimaop);
            cantidades.push(ultimonum);
          }

        }
          res = opera(cantidades);
          display.innerHTML = res.toString().substring(0,8);
          cantidades = [];
          cantidad = "";
          cantidades.push(res)
          ciclos = ciclos + 1;
          break;
        default:
    }
}
console.log(1+2+2);})
};

function opera(arreglo)
{
  var e = "";
  if (arreglo.length > 1)
  {
    for (i=0;i<arreglo.length;i++)
    {
        e = e + (arreglo[i]);
    }

    resultado = eval(e);
  }

return resultado;
};
