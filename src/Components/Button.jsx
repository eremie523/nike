const Button = ({textWithin, imgdir, bg_color, text_color, border_color, fullWidth}) => {
    if(imgdir !== ""){
        return(
            <button className={`px-7 py-4 rounded-full border-2 shadow-md ring-offset-red-400 ring-opacity-75 flex justify-center items-center gap-2 text-lg leading-none font-montserrat hover:border-red-800 ${border_color !== ""? border_color +` focus:`+border_color : `border-red-800 focus:border-red-400`} ${bg_color !== ""? bg_color +` focus:`+bg_color : `bg-red-600  focus:bg-red-400 hover:bg-red-700`} ${text_color !== ""? text_color : `text-white`}`} type="submit">
                {textWithin}
                
                <img src={imgdir} alt={imgdir} className="ml-2 rounded-full w-5 h-5"/>
            </button>
        )
    }else{
        return(
            <button className={`px-7 py-4 rounded-full border-2 shadow-md ring-offset-red-400 ring-opacity-75 flex justify-center items-center gap-2 text-lg leading-none font-montserrat hover:border-red-800 ${border_color !== ""? border_color +` focus:`+border_color : `border-red-800 focus:border-red-400`} ${bg_color !== ""? bg_color +` focus:`+bg_color : `bg-red-600  focus:bg-red-400 hover:bg-red-700`} ${text_color !== ""? text_color : `text-white`} ${fullWidth && `w-full`}`} type="submit">
                {textWithin}
            </button>
        )
    }
    
}

export {
    Button
} 