const unidades = {
    potencia: {
      "CV": 0.7355,
      "HP": 0.7457,
      "kW": 1,
      "kcal/h": 0.00116222
    },
  
    energia: {
      "J": 1,
      "cal": 4.184,
      "kcal": 4184,
      "kW.h": 3600000
    },
  
    pressao: {
      "bar": 1,
      "kgf/cm²": 0.980665,
      "kPa": 0.01,
      "psi": 0.0689476,
      "mca": 0.0980665,
      "cmHg": 0.0133322
    },
  
    velocidade: {
      "m/s": 1,
      "km/h": 0.2777778,
      "mi/h": 0.44704
    },
  
    tempo: {
      "s": 1,
      "min": 60,
      "hora": 3600,
      "ano": 31536000
    },
  
    medida: {
      "m": 1,
      "cm": 0.01,
      "mm": 0.001,
      "pé": 0.3048,
      "milha": 1609.34,
      "polegada": 0.0254
    },
  
    area: {
      "m²": 1,
      "cm²": 0.0001,
      "mm²": 0.000001,
      "hectare": 10000,
      "Alqueire SP": 24200
    },
  
    volume: {
      "m³": 1,
      "cm³": 0.000001,
      "Litros": 0.001,
      "galão US": 0.003785,
      "Bushel": 0.0352
    },
  
    peso: {
      "kg": 1,
      "Ton": 1000,
      "Sacas 60 kg": 60
    }
  };
  
  const grandeza = document.getElementById("grandeza");
  const valor = document.getElementById("valor");
  const unidadeDe = document.getElementById("de");
  const unidadePara = document.getElementById("para");
  const resultado = document.getElementById("resultado");
  const btnConverter = document.getElementById("btnConverter");
  
  grandeza.addEventListener("change", carregarUnidades);
  btnConverter.addEventListener("click", converter);
  
  function carregarUnidades() {
    const tipo = grandeza.value;
  
    unidadeDe.innerHTML = "";
    unidadePara.innerHTML = "";
    resultado.innerHTML = "Resultado aparecerá aqui";
  
    if (tipo === "") {
      return;
    }
  
    const listaUnidades = Object.keys(unidades[tipo]);
  
    listaUnidades.forEach((unidade) => {
      unidadeDe.innerHTML += `<option value="${unidade}">${unidade}</option>`;
      unidadePara.innerHTML += `<option value="${unidade}">${unidade}</option>`;
    });
  }
  
  function converter() {
    const tipo = grandeza.value;
    const valorDigitado = parseFloat(valor.value);
    const de = unidadeDe.value;
    const para = unidadePara.value;
  
    if (tipo === "" || isNaN(valorDigitado) || de === "" || para === "") {
      resultado.innerHTML = "Preencha todos os campos.";
      return;
    }
  
    const valorBase = valorDigitado * unidades[tipo][de];
    const valorConvertido = valorBase / unidades[tipo][para];
  
    resultado.innerHTML = `${valorDigitado} ${de} = ${valorConvertido.toFixed(4)} ${para}`;
  }