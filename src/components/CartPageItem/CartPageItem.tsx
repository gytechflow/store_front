import { CartItem } from "../../models/CartItem";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../stores/slices/CartSlice";
import { useDispatch } from "react-redux";

export default function CartPageItem({ item }: { item: CartItem }) {
  const dispatch = useDispatch();

  return (
    <>
      <hr className="my-4" />
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={`${Config.imageAssetsUrl}${item.article.product.image}`}
            className="img-fluid rounded-3"
            alt={item.article.product.name}
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">seller: {item.article.seller.name}</h6>
          <h6 className="text-black mb-0">{item.article.product.name}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            className="btn btn-link px-2"
            onClick={() => dispatch(decrementQuantity(item.article.id))}
          >
            <i className="fas fa-minus"></i>
          </button>

          <input
            id="form1"
            min="0"
            name="quantity"
            value={item.quantity}
            type="number"
            className="form-control form-control-sm"
          />

          <button
            className="btn btn-link px-2"
            onClick={() => dispatch(incrementQuantity(item.article.id))}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">
            $ {item.article.price.amount * item.quantity}
          </h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a
            href="#!"
            className="text-muted"
            onClick={() => dispatch(removeFromCart(item.article.id))}
          >
            <i className="fas fa-times"></i>
          </a>
        </div>
      </div>
    </>
  );
}
