let pacientes = [];
let paciente = {
    nome: '',
    medico: '',
    data: '',
    hora: '',
}
let type;
let att;
const prompt = require('prompt-sync')()
ent = prompt()
function registro(){
    let paciente = {
        nome: '',
        medico: '',
        data: '',
        hora: '',
    }
  paciente.nome=prompt()
  console.log("Digite o nome do Medico");
  paciente.medico=prompt()
  console.log("Digite a data da consulta");
  paciente.data=prompt()
  console.log("Digite a hora da consulta");
  paciente.hora=prompt()
  return paciente
  
} 
function menu(){
    console.log("Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta");
    let ent=prompt()
    return ent
}
if(!type){
    type=menu()
    if(type=='1'){
        console.log("Digite o nome do paciente");
        pacientes.push(registro())
        console.log('Consulta adicionada com sucesso');
        console.log(pacientes);
        type='';
        menu()
    } else if(type=='3'){
        console.log('Digite o nome do paciente da consulta para atualizar');
        ent=prompt()
        for(i=0;i<pacientes.length;i++){
            if(pacientes[i].includes(ent)){
                registro(ent)
                console.log("consulta atualizada com sucesso");
                console.log(pacientes);
                menu()
            }
        }

    } else if(type=='2'){
        if(pacientes.length=='0'){
            console.log("A agenda esta vazia");
            console.log('Digite 1 para adicionar uma consulta');
            menu()
        }
        else{
            console.log('Digite o nome do paciente que deseja buscar ou deixe vazio para listar todas as consultas');  
        }
    } else if(type=='4'){
        console.log('Digite o nome dos paciente que deseja cancelar a consulta');
    }
}
      else {
    switch (type) {
        case '2':
        for(let i=0;i<pacientes.length;i++){
            if(!ent){
                console.log(pacientes);
                menu()
            }
            else if(pacientes[i].nome==ent){
              console.log('paciente encontrado',pacientes[i]);
              menu()
            }
            else{
              console.log('paciente não localizado');
              menu()
            }
          } 
          break;
          case '4':
            if(!att){
                att=ent;
            }
            for(let i=0;i<pacientes.length;i++){
                if(pacientes[i].nome==att){
                    console.log("A consulta do paciente "+att+' foi deletada com sucesso');
                    pacientes.splice(i,1)
                    att='';
                    type='';
                    console.log(
                      "Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta");                 
                }
            }
            break;       
  }};