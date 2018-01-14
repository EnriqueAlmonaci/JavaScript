var display = document.getElementById('display');
var cantidad = "";
var cantidades = [];
var operacion = "";
var resultado = 0;
var ciclos = 0;
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
        operacion = "";
        resultado = 0;
        cantidades = [];
        ciclos = 0;
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
          cantidades.push(cantidad);
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
            cantidades.push(cantidad);
            display.innerHTML = cantidad;
        }
        break;
      case "punto":
      if (cantidad == 0)
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
          }
          cantidades.push(cantidad);
          display.innerHTML = cantidad;
        }
      }
        break;
      case "sign":
        if (cantidad == 0)
        {
          cantidad = "";
          display.innerHTML = "0";
        }
        else {
          if(cantidad.indexOf('-') != -1){
              if (resultado != 0)
              {
                cantidad = resultado.toString();
                cantidades.push(cantidad);
                display.innerHTML = cantidad;
              }
              else {
                cantidad = cantidad.substring(1,cantidad.length);
                cantidades.push(cantidad);
                display.innerHTML = cantidad;
              }
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
                if (resultado != 0)
                {
                  cantidad = "-" + resultado.toString();
                }
                else {
                    cantidad = "-" + cantidad;
                }

              }
              cantidades.push(cantidad);
              display.innerHTML = cantidad;
          }
        }
        break;
        case "mas":
          operacion = "suma";
          cantidades.push("+");
          if (cantidad == 0)
          {
            cantidad = 0;

          }else {

              cantidad = "";
          }
          display.innerHTML = cantidad;
          break;
        case "menos":
          operacion = "resta";
          cantidades.push("-");
          if (cantidad == 0)
          {
            cantidad = 0;

          }else {

              cantidad = "";
          }
          display.innerHTML = cantidad;
          break;
        case "por":
         operacion = "multiplica";
          cantidades.push("*");
          if (cantidad == 0)
          {
            cantidad = 0;

          }else {

              cantidad = "";
          }
          display.innerHTML = cantidad;
          break;
        case "dividido":
          operacion = "divide";
          cantidades.push("/");
          if (cantidad == 0)
          {
            cantidad = 0;

          }else {

              cantidad = "";
          }
          display.innerHTML = cantidad;
        break;
        case "igual":
        if (ciclos == 0)
        {
          ciclos = ciclos + 1;
        }
        else {
          var ultimaop = cantidades[cantidades.length-2];
          var ultimonum = cantidades[cantidades.length-1];
          cantidades.push(ultimaop);
          cantidades.push(ultimonum);
        }

        display.innerHTML = opera(cantidades);
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
