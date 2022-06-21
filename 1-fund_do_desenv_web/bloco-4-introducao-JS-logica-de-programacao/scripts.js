var processoSeletivo = 100;

switch (processoSeletivo) {
    case ">= 100 && < 80":
        console.log("aprovada");
        break;

    case ">= 79 && < 40":
        console.log("lista");
        break; 

    case ">= 39 && < 0":
        console.log("reprovada");
        break; 

    default:
        console.log("valor errado");
}