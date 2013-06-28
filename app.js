// Código de la aplicación de estudiantes
$(document).on("ready", chilaquiles);
var db = [];

function chilaquiles ()
{
	existe();
	$("#nuevo").on("submit", alburear);
	$("#limpiar").on("click", borrar);
	// $("#recargar").on("click", vadenuevo);
}
function borrar()
{
	delete localStorage.estudiantes;
	limpiarTarjetas();
}
function existe()
{
	if(localStorage.estudiantes)
	{
		db = JSON.parse(localStorage.estudiantes);
		vadenuevo();
	}
}
function alburear(datos)
{
	var n = $("#nombre").val();
	var c = $("#curso").val();
	var s = $('#nuevo input[name="sexo"]:checked').val();

	guardarDB(n, c, s);

	agregarTarjeta(n, c, s);
	
	$("#nuevo")[0].reset();
	//document.getElementById("nuevo").reset();
	//$(t).css("display", "inline-block !important");
	datos.preventDefault();
}
function agregarTarjeta(n, c, s)
{
	$("#tarjetas").slideDown();
	var t = $("#original").clone();
	$(t).attr("id", "");
	$(t).addClass("manejo");

	$(t).find("#nombre_tarjeta").text(n);
	$(t).find("#curso_tarjeta").text(c);
	$(t).find("#sexo_tarjeta").text(s);

	$(t).appendTo("#tarjetas");
	$(t).hide().slideDown(1000);
}
function limpiarTarjetas()
{
	$(".manejo").fadeOut();
}
function guardarDB(nom, cur, sex)
{
	//localStorage.estudiantes = [];
	db.push(
		{
			nombre: nom,
			curso: cur,
			sexo: sex
		}
	);
	localStorage.estudiantes = JSON.stringify(db);
}
function vadenuevo()
{
	for(i in db)
	{

		agregarTarjeta(db[i].nombre, db[i].curso, db[i].sexo);
	}
}





