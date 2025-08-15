import React from "react";
import Button from "../components/Button";

function CreateOrder(){
    
    return(
        <>            
            <h1>Novo pedido</h1>
            <div>



                <p>{nomeDaEmpresa}</p>
                <p>{dataPedido}</p>
                <p>{numeroPedido}</p>
                <p>{cliente}</p>


                
            </div>
            <div>
                <table>
                    <tr>Primeiro</tr>
                    <Button>Adicionar item</Button>
                </table>
            </div>
            <Button>Salvar pedido</Button>
        </>
    )
};

export default CreateOrder;