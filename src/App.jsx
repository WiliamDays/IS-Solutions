import "./styles/App.scss";
import Button from "./components/Button.jsx";
import CreateOrder from "./pages/CreateOrder.jsx";

function App(){
    return(
        <>
            <Button 
                className="novoPedido"
            >
                Criar novo pedido
            </Button>

            <CreateOrder/>
            
        </>
        
    )
};

export default App;