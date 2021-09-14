var nombre = prompt('Ingrese su primer nombre:'); 
var apellido = prompt('Ingrese su apellido:');
var nombre_completo = nombre+" "+apellido;

var carrera = prompt('Ingrese la carrera que está cursando:');

var ramo1 = prompt('Ingrese el primer ramo que está cursando:');
var ramo2 = prompt('Ingrese el segundo ramo que está cursando:');
var ramo3 = prompt('Ingrese el tercer ramo que está cursando:');

var r1n1 = prompt('Ingrese nota 1 del ramo ['+ramo1+'] (por favor ingrese los decimales con punto):')
var r1n2 = prompt('Ingrese nota 2 del ramo ['+ramo1+'] (por favor ingrese los decimales con punto):')
var r1n3 = prompt('Ingrese nota 3 del ramo ['+ramo1+'] (por favor ingrese los decimales con punto):')
r1n1 = parseFloat(r1n1);
r1n2 = parseFloat(r1n2);
r1n3 = parseFloat(r1n3);
var promedio_r1= ((r1n1+r1n2+r1n3)/3).toFixed(2)

var r2n1 = prompt('Ingrese nota 1 del ramo ['+ramo2+'] (por favor ingrese los decimales con punto):')
var r2n2 = prompt('Ingrese nota 2 del ramo ['+ramo2+'] (por favor ingrese los decimales con punto):')
var r2n3 = prompt('Ingrese nota 3 del ramo ['+ramo2+'] (por favor ingrese los decimales con punto):')
r2n1 = parseFloat(r1n1);
r2n2 = parseFloat(r1n2);
r2n3 = parseFloat(r1n3);
var promedio_r2 = ((r2n1+r2n2+r2n3)/3).toFixed(2)

var r3n1 = prompt('Ingrese nota 1 del ramo ['+ramo3+'] (por favor ingrese los decimales con punto):')
var r3n2 = prompt('Ingrese nota 2 del ramo ['+ramo3+'] (por favor ingrese los decimales con punto):')
var nota_apr = prompt('Ingrese la nota con la que espera pasar el ramo '+ramo3+':')
r3n1 = parseFloat(r3n1);
r3n2 = parseFloat(r3n2);
nota_apr = parseFloat(nota_apr);
r3n3 = ((nota_apr)*3)-(r3n1+r3n2).toFixed(2)

document.write('<div class="container"><h1 class="mb-3 pb-3">Notas finales</h1>');

if (nombre_completo===' ') {
    document.write('<p>Por favor recuerda escribir tu nombre.</p>');
} else {
    document.write('<p><strong>Nombre:</strong><span class="pl-5">'+nombre_completo+'</span></p>');
}

if (carrera===' ') {
    document.write('<p>Por favor recuerda ingresar tu carrera.</p>');
} else {
    document.write('<p><strong>Carrera:</strong><span class="ml-1 pl-5">'+carrera+'</span></p>');
}

document.write('<table class="table">');
document.write('<thead class="thead-dark">');
document.write('<tr>');
document.write('<th scope="col-3">Ramo</th>');
document.write('<th scope="col-2">Nota 1</th>');
document.write('<th scope="col-2">Nota 2</th>');
document.write('<th scope="col-2">Nota 3</th>');
document.write('<th scope="col-3">Promedio</th>');
document.write('</tr></thead>');

document.write('<tbody>');
document.write('<tr>');
document.write('<th scope="row col-3">'+ramo1+'</th>');
document.write('<td scope="col-2" class="font-weight-bold">'+r1n1+'</td>');
document.write('<td scope="col-2" class="font-weight-bold">'+r1n2+'</td>');
document.write('<td scope="col-2" class="font-weight-bold">'+r1n3+'</td>');
document.write('<td scope="col-3" class="font-weight-bold">'+promedio_r1+'</td>');
document.write('</tr>');

document.write('<tbody>');
document.write('<tr>');
document.write('<th scope="row col-3">'+ramo2+'</th>');
document.write('<td scope="col-2" class="font-weight-bold">'+r2n1+'</td>');
document.write('<td scope="col-2" class="font-weight-bold">'+r2n2+'</td>');
document.write('<td scope="col-2" class="font-weight-bold">'+r2n3+'</td>');
document.write('<td scope="col-3" class="font-weight-bold">'+promedio_r2+'</td>');
document.write('</tr>');

document.write('<tbody>');
document.write('<tr>');
document.write('<th scope="row col-3">'+ramo3+'</th>');
document.write('<td scope="col-2" class="font-weight-bold">'+r3n1+'</td>');
document.write('<td scope="col-2" class="font-weight-bold">'+r3n2+'</td>');
document.write('<td scope="col-2" class="font-weight-bold">-</td>');
document.write('<td scope="col-3" class="font-weight-bold">-</td>');
document.write('</tr></table>');

if (r3n3>7) {
    document.write('<p>Lamentablemente, no podrás obtener la nota de aprobación que deseas con tus notas actuales.</p>');
} else {
    document.write('<p class="font-weight-light">Para aprobar el ramo <stron>'+ramo3+'</strong> con nota '+nota_apr+', necesitas obtener un <strong class="font-weight-bold">'+r3n3.toFixed(2)+'</strong> en la nota 3</p>');
}

document.write('</div>');