function CriarTarefa(){
        
    const valor = document.getElementById("tarefa").value;

    
    if (valor.trim() === "") return;

    
    const newDiv = document.createElement("div");
    newDiv.classList.add("d-flex", "justify-content-between", "p-3", "border", "mb-2","bg-white");
    newDiv.textContent = valor;


    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "✔";
    btnConcluir.classList.add("btn", "btn-success", "btn-sm");
    const botoes = document.createElement("div");
    botoes.appendChild(btnConcluir);
    newDiv.appendChild(botoes);
        
    

    const currentDiv = document.getElementById("Task");
    currentDiv.appendChild(newDiv);
    
    
    document.getElementById("tarefa").value = "";
};
