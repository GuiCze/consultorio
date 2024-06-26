let pacientes = [];
let paciente = {
    nome: '',
    medico: '',
    data: '',
    hora: '',
}
let type;
let att;
let ent;
console.log("Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta");
process.stdin.on("data", function (data) {
    ent = data.toString().trim();
    if(!type){
          type=ent;
          if(type=='1'){
              console.log("Digite o nome do paciente");
          } else if(type=='3'){
              console.log('Digite o nome do paciente da consulta para atualizar');   
          } else if(type=='2'){
            if(pacientes.length=='0'){
                console.log("A agenda esta vazia");
                console.log('Digite 1 para adicionar uma consulta');
                type='';
            }
            else{
                console.log('Digite o nome do paciente que deseja buscar ou deixe vazio para listar todas as consultas');  
            }
          } else if(type=='4'){
            console.log('Digite o nome do paciente que deseja cancelar a consulta');
          }
          }
      else {switch (type) {
      case '1':
          if(!paciente.nome) {
            paciente.nome = ent;
            console.log("Digite o nome do medico");
        } else if (!paciente.medico) {
            paciente.medico=ent
            console.log("Digite a data da consulta");
        } else if (!paciente.data) {       
          paciente.data = ent;
          console.log('Digite o horario da consulta');
        } else if (!paciente.hora){
            paciente.hora = ent;
            pacientes.push(paciente);
            console.log('A consulta foi marcada com sucesso');
            console.log(
              "Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta");
          paciente = {};
          type = "";
        } 
        break;
        case '2':
        
        for(let i=0;i<pacientes.length;i++){
            if(!ent){
                console.log(pacientes);
                type='';
                console.log(
                    "Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta");
            }
            else if(pacientes[i].nome==ent){
              console.log('paciente encontrado',pacientes[i]);
              type='';
              console.log(
                "Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta");
            }
            else{
              console.log('paciente não localizado');
              type='';
            }
          } 
          break;
          case '3':
            if(!att){
                att=ent;
            }
            for(let i=0;i<pacientes.length;i++){
                if(pacientes[i].nome==att){
                    if(!paciente.nome) {
                        paciente.nome = ent;
                        console.log("Digite o nome do medico\n");
                    } else if (!paciente.medico) {
                        paciente.medico=ent
                        console.log("Digite a data da consulta");
                    } else if (!paciente.data) {       
                      paciente.data = ent;
                      console.log('Digite o horario da consulta');
                    } else if (!paciente.hora){
                        paciente.hora = ent;
                        pacientes.splice(i,1,paciente);
                        console.log('A consulta foi atualizada com sucesso');
                        console.log(
                          "Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta");
                      paciente = {};
                      type = "";
                    } 
                }
                else{
                  console.log('paciente não localizado');
                }} 
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
  }}});