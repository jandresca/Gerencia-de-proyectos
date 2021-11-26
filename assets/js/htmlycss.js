const printError = (elemId, hintMsg) => {
  document.getElementById(elemId).innerHTML = hintMsg;
};

const validateForm = () => {
  //preguntas
  let p1 = document.Form.p1.value;
  let p2 = document.Form.p2.value;
  let p3 = document.Form.p3.value;
  let p4 = document.Form.p4.value;
  let p5 = document.Form.p5.value;
  let p6 = document.Form.p6.value;
  let p7 = document.Form.p7.value;
  let p8 = document.Form.p8.value;
  let p9 = document.Form.p9.value;
  let p10 = document.Form.p10.value;
  var nombre = document.Form.nombre.value;
  let p1Err = p2Err = p3Err = p4Err = p5Err = p6Err = p7Err = p8Err = p9Err = p10Err = nombreErr=true;

  // validación del formulario
  a = p1.charAt(0);
  b = p2.charAt(0);
  c = p3.charAt(0);
  d = p4.charAt(0);
  e = p5.charAt(0);
  f = p6.charAt(0);
  g = p7.charAt(0);
  h = p8.charAt(0);
  i = p9.charAt(0);
  j = p10.charAt(0);

  //validar campo nombre
  if (nombre == "") {
    printError("nombreErr", "Por favor ingrese su Nombre ");
  } else {
    var regex =
      /^[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ1234567890ñÑ.,-]{3,100}$/;
    //var regex = /^[a-zA-áéíóúñüàè]{5,50}$/;
    if (regex.test(nombre) === false) {
      printError(
        "nombreErr",
        "Por favor ingrese un Nombre valido y con Max 100 letras"
      );
    } else {
      printError("nombreErr", "");
      nombreErr = false;
    }
  }
  //primera pregunta
  if (a === "v" || a === "f") p1Err = false;
  

  if (p1 == "") {
    printError("p1Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p1Err", "");
    p1Err = false;
  }

  //segunda pregunta
  if (b === "v" || b === "f")  p2Err = false;
  

  if (p2 == "") {
    printError("p2Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p2Err", "");
    p2Err = false;
  }
  //tercera pregunta
  if (c === "v" || c === "f") p3Err = false;
  

  if (p3 == "") {
    printError("p3Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p3Err", "");
    p3Err = false;
  }

  //Cuarta pregunta
  if (d === "v" || d === "f") p4Err = false;
  

  if (p4 == "") {
    printError("p4Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p4Err", "");
    p4Err = false;
  }

  //quinta pregunta
  if (e === "v" || e === "f") p5Err = false;
  

  if (p5 == "") {
    printError("p5Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p5Err", "");
    p5Err = false;
  }
  //sexta pregunta
  if (f === "v" || f === "f") p6Err = false;
  

  if (p6 == "") {
    printError("p6Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p6Err", "");
    p6Err = false;
  }
  //septima pregunta
  if (g === "v" || g === "f") p7Err = false;
  

  if (p7 == "") {
    printError("p7Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p7Err", "");
    p7Err = false;
  }

  //octava pregunta
  if (h === "v" || h === "f") p8Err = false;
  

  if (p8 == "") {
    printError("p8Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p8Err", "");
    p8Err = false;
  }

  //novena pregunta
  if (i === "v" || i === "f") p9Err = false;

  if (p9 == "") {
    printError("p9Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p9Err", "");
    p9Err = false;
  }

  //decima pregunta
  if (j === "v" || j === "f") p10Err = false;


  if (p10 == "") {
    printError("p10Err", "Por favor selecciona una opción (Verdadero o Falso)");
  } else {
    printError("p10Err", "");
    p10Err = false;
  }

  let buenas = 0;

  // validación de respuestas
  if (
    (p1Err || p2Err || p3Err || p4Err || p5Err || p6Err || p7Err || p8Err || p9Err || p10Err || nombreErr) == true
  ) {
    return false;
  } else {
    if ( a === "v" && b === "f" && c === "v" && d === "v" && e === "f" && f === "v" && g === "v" && h === "f" && i === "v" && j === "v") {
      alert(
        `Felicidades Aprobaste el Examen ${nombre}, preguntas correctas 10/10`
      );
    } else {
      a === "v" ? buenas++ : "";
      b === "f" ? buenas++ : "";
      c === "v" ? buenas++ : "";
      d === "v" ? buenas++ : "";
      e === "f" ? buenas++ : "";
      f === "v" ? buenas++ : "";
      g === "v" ? buenas++ : "";
      h === "f" ? buenas++ : "";
      i === "v" ? buenas++ : "";
      j === "v" ? buenas++ : "";
      alert(`No Aprobaste el Examen ${nombre}, el numero de preguntas buenas son ${buenas}/10, por favor intentalo de nuevo` );
    }
  }
};
