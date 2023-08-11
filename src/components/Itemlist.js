import { cloud_img } from "../utilities/constants";
const Itemlist = ({ info }) => {
  console.log(info);
  const { name, description, price, imageId, isVeg, category } = info;
  return (
    <>
      <div className=" justify-center w-full      flex  p-2 m-2   text-left ">
        <div className=" flex justify-around w-8/12 h-13   border-b-2 items-center      ">
          <div className=" py-1 w-6/12 flex flex-col   ">
            <span>{name}</span>
            <span> - ₹{price / 100} </span>{" "}
            <p className="text-xs ">{description}</p>
            </div>
        <div className=" w-6/12 p-4">
          <div className=" flex flex-col items-center ">
            
            <div className="w-[100px]">
              <img src={cloud_img + imageId} className="w-full  " />
            </div>
            <button className=" p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
              Add +
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Itemlist;
