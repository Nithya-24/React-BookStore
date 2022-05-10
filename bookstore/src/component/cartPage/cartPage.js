import React from "react";
import "./cartPage.css";
import itemImage from "../../assets/images/Image 11.png";

export default function CartPage() {
    return (
        <>
            <div className="cart-items">
            <div className="cart-item">
                <div className="cart-items-header">My cart(2)</div>

                <div className="cart-item-container">
                    <div><img className="item-image-container" src={itemImage} alt="item"/></div>
                    <div className="item-details">
                        <div className="item-title">
                            Don't Make Me Think
                        </div>
                        <div className="item-author">
                            by Steve Krug
                        </div>
                        <div className="item-price">
                            Rs. 1500
                        </div>
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <input type="text" defaultValue="1" />
                    <img src="" alt="" />
                    <button>Remove</button>
                    <button>PLACE ORDER</button>
                </div>
        </div>
            </div>
            <div className="box">
            <div className="customer-details"> Customer Details
            </div>
            </div>
            <div className="order-summary">

            </div>
        </>
    )
}