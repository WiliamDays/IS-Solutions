import Button from "../components/Button";
import React, { useState, useEffect } from "react";

function CreateOrder(){
    const [dataPedido, setDataDoPedido] = useState(null);

    useEffect(() => {
        setDataDoPedido(new Date()); 
    }, []);

    return(
        <>            
            <h1>Novo pedido</h1>
            <div>
                <p>Data do pedido: {dataPedido && dataPedido.toLocaleString()}</p>
                
                {/*Por conta dessa estrutura abaixo que não está exibindo no navegador (trabalhar ela)   
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