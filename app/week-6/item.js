const Item = ({ name, quantity, category }) => {
  return (
    <main>
        <li className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm mb-2">
            <div className="flex flex-col">
                <span className="font-semibold text-lg text-black">{name}</span>
                <span className="text-sm text-black">{category}</span>
            </div>
            <span className="text-black">{quantity}</span>
        </li>
    </main>
  );
};

export default Item;
