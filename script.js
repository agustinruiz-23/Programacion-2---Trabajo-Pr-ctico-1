let productos = [
    {
        "sku": "5147",
        "producto": "Tarjeta Gráfica",
        "mes": new Date("2021-01-01"),
        "cantidadvendida": 6,
        "precio": "250",
        "totalventas": "1500",
    },
    {
        "sku": "9712",
        "producto": "Monitor",
        "mes": new Date("2021-01-01"),
        "cantidadvendida": 3,
        "precio": "350",
        "totalventas": "1050",  
    },
    {
        "sku": "6318",
        "producto": "Camara Web",
        "mes": new Date("2021-01-01"),
        "cantidadvendida": 4,
        "precio": "80",
        "totalventas": "320",
    },
    {
        "sku": "3871",
        "producto": "Parlantes",
        "mes": new Date("2021-01-01"),
        "cantidadvendida": 4,
        "precio": "60",
        "totalventas": "240",
    },
    {
        "sku": "7612",
        "producto": "Mouse",
        "mes": new Date("2021-01-01"),
        "cantidadvendida": 6,
        "precio": "30",
        "totalventas": "180",
    },
    {
        "sku": "9317",
        "producto": "Audifonos",
        "mes": new Date("2021-01-01"),
        "cantidadvendida": 3,
        "precio": "50",
        "totalventas": "150",
    },
    {
        "sku": "1234",
        "producto": "Teclado",
        "mes": new Date("2021-01-01"),
        "cantidadvendida": 4,
        "precio": "35",
        "totalventas": "140",
    }
   
];
function listar() {
    let tabla = "<table border='1'><thead><tr><th>SKU</th><th>Producto</th><th>Mes</th><th>Cantidad Vendida</th><th>Precio</th><th>Total Ventas</th></tr></thead><tbody>";

    for (let i = 0; i < productos.length; i++) {
        tabla += "<tr><td>" + productos[i].sku + "</td><td>" + productos[i].producto + "</td><td>" + productos[i].mes + "</td><td>" + productos[i].cantidadvendida + "</td><td>" + productos[i].precio + "</td><td>" + productos[i].totalventas + "</td></tr>";
    };

    tabla += "</tbody></table>"; 
    tabla += "Cantidad de productos:" + productos.length;

    document.getElementById("tabla-html").innerHTML = tabla;
}   
//BOTON PUSH//
function agregar() {
    let producto = {
        "sku": document.getElementById("codigo").value,
        "producto": document.getElementById("prod").value,
        "mes": document.getElementById("mes").value,
        "cantidadvendida": document.getElementById("cantidad-vendida").value,
        "precio": document.getElementById("precio").value,
        "totalventas": document.getElementById("total-ventas").value,
    };

    productos.push(producto);

    document.getElementById("codigo").value = "";
    document.getElementById("prod").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("cantidad-vendida").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("total-ventas").value = "";

    listar();
}


//BOTON UNSHIFT//
function principio()
{
    let producto={
        "sku": document.getElementById("codigo").value,
        "producto": document.getElementById("prod").value,
        "mes": document.getElementById("mes").value,
        "cantidadvendida": document.getElementById("cantidad-vendida").value,
        "precio": document.getElementById("precio").value,
        "totalventas": document.getElementById("total-ventas").value,
    };
    productos.unshift(producto);
    document.getElementById("codigo").value = "";
    document.getElementById("prod").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("cantidad-vendida").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("total-ventas").value = "";
    listar();
}
//BOTON SHIFT//
function eliminarp()
{
    productos.shift();
    listar();
}
//BOTON POP//
function botonpop()
{
    productos.pop();
    listar();
}
//BOTON BUSCAR//
let tabla = ""; 
function buscar()
{
    let clave=document.getElementById("clave").value;
    for(i=0;i<productos.length;i++)
    {
        if(productos[i].sku==clave)
        {
            tabla += "<tr><td>" + productos[i].sku + "</td><td>" + productos[i].producto + "</td><td>" + productos[i].mes + "</td><td>" + productos[i].cantidadvendida + "</td><td>" + productos[i].precio + "</td><td>";
        };
        if (tabla=="")
        {
            tabla="CÓDIGO NO ENCONTRADO"; "<br>"
        }
    }
    document.getElementById("resultado-buscar").innerHTML=tabla;

}
// BOTON TOTAL //
function sumatotal() 
{
    let totalVentas = 0;

    for (let i = 0; i < productos.length; i++) 
        
        if (!isNaN(parseFloat(productos[i].totalventas))) {
            totalVentas += parseFloat(productos[i].totalventas);
        }
    document.getElementById("resultado-total").innerHTML = "El total de las ventas es: " + totalVentas;
}
