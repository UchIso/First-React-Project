function Products({Name,Price,Tag}){
    
    return(
        <>
            <h2>Product Name: {Name}</h2>
            <h2>Product Price: {Price}</h2>
            <h2>Product Tag: #{Tag}</h2>
        </>
    )
}

export default Products