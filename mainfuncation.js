let pacientes = [];
let type;
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
    console.log("Escolha a opção:\n1:Adiciona uma nova consulta\n2:Lista as consultas\n3:Atualiza uma consulta\n4:Cancela uma consulta\n5:Para sair");
}
do{
    menu()
    type=prompt()
    switch (type) {
    case '1':
        console.log("Digite o nome do paciente");
        pacientes.push(registro())
        console.log('Consulta adicionada com sucesso');
        console.log(pacientes);
        break;
    
    case '3':
        console.log('Digite o nome do paciente da consulta para atualizar');
        ent=prompt()
        for(i=0;i<pacientes.length;i++){
            if(pacientes[i].nome==ent){
                pacientes.splice(i,1,registro())
                console.log("consulta atualizada com sucesso");
            }
        }

    
    case '2':
        if(pacientes.length=='0'){
            console.log("A agenda esta vazia");
            console.log('Digite 1 para adicionar uma consulta');
        }
        else{
            console.log('Digite o nome do paciente que deseja buscar ou deixe vazio para listar todas as consultas');
            ent=prompt()  
            for(let i=0;i<pacientes.length;i++){
                if(!ent){
                    console.log(pacientes);
                }
                else if(pacientes[i].nome==ent){
                  console.log('paciente encontrado',pacientes[i]);
                }
                else{
                  console.log('paciente não localizado');
                }
              } 
        }
        break;
    
    case '4':
        console.log('Digite o nome dos paciente que deseja cancelar a consulta');
        ent=prompt()
        for(let i=0;i<pacientes.length;i++){
            if(pacientes[i].nome==ent){
                console.log("A consulta do paciente "+ent+' foi deletada com sucesso');
                pacientes.splice(i,1)
            }
        break;
        }
}
}while(type!=5)