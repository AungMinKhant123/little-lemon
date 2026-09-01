import DeliveryIcon from "./DeliveryIcon";
const SpecialCard = ({ item }) => {
  return (
    <article className="overflow-hidden bg-[#e7e7e7] shadow-sm">
      <div className="h-43.75 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-h-59.25 px-4 py-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-[14px] font-medium text-[#202020]">
            {item.name}
          </h3>

          <span className="text-[11px] text-[#b96135]">{item.price}</span>
        </div>

        <p className="mt-7 text-[11px] leading-[1.35] tracking-[0.06em] text-[#555]">
          {item.description}
        </p>

        <button className="mt-10 flex items-center text-[11px] font-medium tracking-wide text-[#1b1b1b] hover:text-primary-green">
          Order a delivery
          <DeliveryIcon />
        </button>
      </div>
    </article>
  );
};

export default SpecialCard;
