
export function ColorBox(){
    const boxvalue=[
        {
            color:"#4e73df",
            name:"Primary",
            text1:"#eeeeee",
            text2:"#bdbdbd",
        },
        
        {
            name:"Success",
            color:"#1cc88a",
            text1:"#f5f5f5",
            text2:"#bdbdbd",
            
        },
        {
            
            color:"#36b9cc",
            name:"Info",
            text1:"#f5f5f5",
            text2:"#bdbdbd",
        },
        {
            color:" #f6c23e",
            name:"Warning",
            text1:"#f5f5f5",
            text2:"#bdbdbd",
        },
        {
            
            color:"#e74a3b",
            name:"Danger",
            text1:"#f5f5f5",
            text2:"#bdbdbd",
        },
        
        {
            
            color:"#858796",
            name:"Secondary",
            text1:"#f5f5f5",
            text2:"#bdbdbd",
        },
        {
            
            color:"#f8f9fc",
            name:"Light",
            text1:"#757575",
            text2:"#757575",
        },
        {
            color:"#5a5c69",
            name:"Dark",
            text1:"#f5f5f5",
            text2:"#bdbdbd",
        },
    ]

    return(
        <div className="color-box">
        
            {
                boxvalue.map((v)=>(
                    <div className="Box" style={{backgroundColor:v.color}}>
                    <p className="color-name" style={{color:v.text1}}>{v.name}</p>
                    <p className="color-code" style={{color:v.text2}}>{v.color}</p>
                    </div>
                ))
            }

        </div>

    )
        

    
}

