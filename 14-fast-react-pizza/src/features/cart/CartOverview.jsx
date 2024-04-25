import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartQuantity, getTotalCartPrice } from './cartSlice';

function CartOverview() {
  const cartQuantity = useSelector(getCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!cartQuantity) return null;

  return (
    <div
      className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase 
    text-stone-200 sm:px-6"
    >
      <p
        className="space-x-4 text-sm 
      font-semibold text-stone-300 sm:space-x-6 md:text-base"
      >
        <span>{cartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
