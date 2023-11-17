
import './Card.css'


const Card = () => {

    return(
        <div>
            <div className="cardcontainer">
                <div className='cardimage'>

                {products.map((product) => (
          <div key={product.id} className="product">
            <img className="m-2" src={product.image} alt={product.title} />
            <h3 className="card-title mb-0">{product.title}</h3>
            <p>${product.price}</p>
            <button  className="btn btn-outline-dark btn-lg" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}

               
                
                </div>
            </div>
        </div>
    )
}

export default Card;