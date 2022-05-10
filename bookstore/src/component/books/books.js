import React from "react";
import "./books.css";
import ItemCard from "../itemCard/item";
import ItemCard1 from "../itemCard/item1";
import ItemCard2 from "../itemCard/item2";
import ItemCard3 from "../itemCard/item3";
import ItemCard4 from "../itemCard/item4";
import ItemCard5 from "../itemCard/item5";
import ItemCard6 from "../itemCard/item6";
import ItemCard7 from "../itemCard/item7";
import ItemCard8 from "../itemCard/item8";
import ItemCard9 from "../itemCard/item9";
import ItemCard10 from "../itemCard/item10";
import ItemCard11 from "../itemCard/item11";

export default function BookList(){
    return(
        <div className="main-content">
            <div className="body-header">
                <div className="title-text">
                    <div className="page-title">Books</div>
                    <div className="items-count">(128 Items)</div>
                </div>
                <div className="sort-container">
                    <select className="sort-options" name="city" id="city" value="summa" >
                        <option hidden defaultValue="Sort by relevance">Sort by relevance</option>
                        <option value="Price : Low to High">Price : Low to High</option>
                        <option value="Price : High to Low">Price : High to Low</option>
                        <option value="Newest Arrival">Newest Arrival</option>
                    </select>
                </div>
            </div>
            <div className="body-list">
                <ItemCard />
                <ItemCard1 />
                <ItemCard2 />
                <ItemCard3 />
                <ItemCard4 />
                <ItemCard5 />
                <ItemCard6 />
                <ItemCard7 />
                <ItemCard8 />
                <ItemCard9 />
                <ItemCard10 />
                <ItemCard11 />
                
               
            </div>
            <div className="page-numbers">
            <div>
                   
                </div>
                <div className="number">
                    1
                </div>
                <div className="number">
                    2
                </div>
                <div className="number">
                    3
                </div>
                <div className="number">
                    4
                </div>
                <div className="numbers">
                    5
                </div>
                <div className="number">
                    6
                </div>
                <div className="number">
                    7
                </div>
                <div className="number">
                    8
                </div>
                <div className="number">
                    ..
                </div>
                <div className="number">
                    18
                </div>
                <div>
                   
                </div>
            </div>
        </div>
    );
}