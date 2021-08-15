export default function Products(props) {
    let {title, price} = props;
      let classNameTitle = "product";
      return (
          <div className={classNameTitle}>
            <h2>{title}</h2>
            <h3>price is - {price}</h3>
            <hr/>
          </div>
      );
}
