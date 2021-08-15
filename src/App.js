import './App.css';
import Products from "./components/product/Products";

 export default function App() {
    return (
      <div className="products">
        <Products title={'milk'} price={'20ua'}/>
        <Products title={'bread'} price={'18ua'}/>
        <Products title={'juice'} price={'26ua'}/>

      </div>
    );
}



