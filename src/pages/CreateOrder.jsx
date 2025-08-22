import React from "react";
import Button from "../components/Button";

function CreateOrder(){
    
    return(
        <>            
            <h1>Novo pedido</h1>
            <div>


                {/*Por conta dessa estrutura abaixo que não está exibindo no navegador (trabalhar ela)
                    <p>{nomeDaEmpresa}</p>
                    <p>{dataPedido}</p>
                    <p>{numeroPedido}</p>
                    <p>{cliente}</p>
                */}
                


                
            </div>
            <div>
                {/*Trabalhar melhor nessa estrutura de tabela*/}
                <table>
                    <tr>Primeiro Item do pedido</tr>
                    <Button>Adicionar item</Button>
                </table>
            </div>
            <Button>Salvar pedido</Button>
        </>
    )
};

export default CreateOrder;