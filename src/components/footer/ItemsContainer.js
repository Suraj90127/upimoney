import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-5">
      <Item Links={SUPPORT} title="Company" />
      <Item Links={RESOURCES} title="Our Services" />
      <Item Links={COMPANY} title="Quick Links" />
      <Item Links={PRODUCTS} title="Support" />
    </div>
  );
};

export default ItemsContainer;
