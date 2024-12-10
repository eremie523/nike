import { bigShoeBackground } from "../assets/images";

const ShoeCard = ({imgUrl, changeBigShoeImg, bigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImg(imgUrl.bigShoe)
        }
    };
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe ? `border-red-600` : `border-none`} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
        <div className="flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 relative overflow-hidden ">
            <img src={bigShoeBackground} alt="" className="w-full h-full absolute rounded-xl"/>
            <img src={imgUrl.thumbnail} alt="shoeCollection" width={127} height={103} className="object-contain z-10"/>
        </div>
    </div>
  )
}

export default ShoeCard