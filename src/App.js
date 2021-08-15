import './App.css';

 export default function App() {
   let classNameTitle = "product";
    return (
      <div className="products">
        <div className={classNameTitle}>
            <h2>milk</h2>
            <h3>price is - 100$</h3>
            <hr/>
        </div>
        <div className={classNameTitle}>
            <h2>milk</h2>
            <h3>price is - 100$</h3>
            <hr/>
        </div>
        <div className={classNameTitle}>
            <h2>milk</h2>
            <h3>price is - 100$</h3>
            <hr/>
        </div>
      </div>
    );
}



