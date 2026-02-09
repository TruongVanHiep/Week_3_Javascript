import React, { useMemo, useState } from "react";

function Product() {

    const generateProducts = (count = 5000) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            name: `Product${i}`,
            price: Math.floor(Math.random() * 1000) + 1
        }))
    }

    const [products] = useState(generateProducts());
    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    console.time("filter");
    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            return (
                p.name.toLowerCase().includes(search.toLowerCase()) && p.price >= minPrice && p.price <= maxPrice
            )
        })
    }, [products, search, minPrice, maxPrice]);

    const total = useMemo(() => {
        return filteredProducts.reduce((sum, p) => sum + p.price, 0);
    }, [filteredProducts])
    console.timeEnd("filter");

    return (
        <div>
            <h2>Total: {total}</h2>
            <input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <input
                type="number"
                placeholder="Min"
                onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Max"
                onChange={(e) => setMaxPrice(Number(e.target.value))}
            />

            <p>Found: {filteredProducts.length} products</p>
        </div>
    )
}
export default Product