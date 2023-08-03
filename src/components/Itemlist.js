const Itemlist = ({info}) =>{

    const { name, description, price, imageId, isVeg, category } = info;
    return(<> <div className="p-2 m-2 border border-black">
        <span>{name}</span>
        <span>{price}</span>
    </div>
    <p>{description}</p>
</>
    )
}
export default Itemlist;