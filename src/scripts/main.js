// animações 
AOS.init();


//trabalhando com dias, horas, minutos, segundos
const dataDoEvento = new Date ("Dec 12, 2024, 19:00:00")
const timesTempDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timesTempAtual = agora.getTime();

    const distanciaAteOevento = timesTempDoEvento - timesTempAtual;

    //trabalhando com segundos - conversão em dias, horas, minutos
    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMinuto = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    //calculando tempo antes do evento
    const diasAteOevento = Math.floor(distanciaAteOevento / diaEmMs); //arredondando o valor em dias 
    const horasAteOevento =  Math.floor((diasAteOevento % diaEmMs) / horaEmMinuto); //arredondando o valor em horas
    const minutosAteOevento = Math.floor((distanciaAteOevento % horaEmMinuto)  / minutoEmMs);
    const segundosAteOevento = Math.floor((distanciaAteOevento % minutoEmMs) / 1000);

    //saida de dados
    // console.log(diasAteOevento);    
    // console.log(horasAteOevento);

    document.getElementById('contador').innerHTML = `${diasAteOevento}d, ${horasAteOevento}h, ${minutosAteOevento}m, ${segundosAteOevento}s`;
     if(distanciaAteOevento < 0 ){
        clearInterval (contaAsHoras);
        document.getElementById('contador').innerHTML = 'EVENTO EXPIRADO'
     }

}, 1000);