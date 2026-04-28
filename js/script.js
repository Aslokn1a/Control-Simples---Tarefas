function CreateTask(){
    
    if(CheckPending()){


    const valor = document.getElementById("tarefa").value;

    
    if (valor.trim() === "") return;

    const newDiv = document.createElement("div");
    newDiv.classList.add("d-flex", "justify-content-between", "p-3", "border", "mb-2","bg-white");
    newDiv.textContent = valor;


    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "✔";
    btnConcluir.classList.add("btn", "btn-success", "btn-sm");
    
    btnConcluir.onclick = function(){
        if(CheckFinished()){
        newDiv.remove();
        const DivFinish = document.getElementById("Finish");
        const Finalize = document.createElement("div");
        const btnDelete = document.createElement("button");
        btnDelete.textContent="X";
        btnDelete.classList.add("btn", "btn-danger", "btn-sm")
        
        btnDelete.onclick = function(){
            Finalize.remove();
            
        }

        Finalize.classList.add("d-flex", "justify-content-between","border", "border-secondary", "p-3", "mb-2","bg-success-subtle");
        Finalize.textContent = valor; 
        Finalize.appendChild(btnDelete)
        DivFinish.appendChild(Finalize);
        document.getElementById("warning").remove();
        } else{
            Warning();
        }
    };


    const botoes = document.createElement("div");
    botoes.appendChild(btnConcluir);
    newDiv.appendChild(botoes);
        
    

    const currentDiv = document.getElementById("Task");
    currentDiv.appendChild(newDiv);
    
    
    document.getElementById("tarefa").value = "";
    
    } else{
        Warning();
    }
};


function CheckPending(){
    const limite =60;
    const total = document.querySelectorAll('#Task > div').length;
    
    if(total>=limite){
        return false
    } else{
        return true
    }
};
function CheckFinished(){
    const limite =5;
    const total = document.querySelectorAll('#Finish > div').length;
    
    if(total>=limite){
        return false
    } else{
        return true
    }
};

function Warning(){
    
    const total = document.querySelectorAll('#warning').length;
    console.log(total)

    if(total<1){
    const warn = document.createElement("div");
    warn.classList.add("mx-auto", "p-3", "border","border-dark", "mb-2","bg-warning","row", "w-25", "d-flex","justify-content-center","rounded");
    warn.textContent = "Limite Atingido!"
    warn.id = "warning"
    const div1 = document.getElementById("TaskSection")
    div1.after(warn)
    }else{
        return;
    }
}
