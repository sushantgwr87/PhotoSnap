import React, { useState } from 'react';
import Card from '../src/components/card';
import card_Image from '../public/assets/pricing.jpg';
import useBreakpoints from '../src/customHook/useBreakpoints';

const pricingCardData = {
    head: "Pricing",
    body: "Create your own story, photosnap offers a platform for all photographers and visual storytellers. It's a simple way to create and share your amazing stories."
}

const monthlyPrice = [
    {
        type: "Basic",
        body: "Includes basic usage of out platform. Recommended for now and aspiring photographers.",
        price: 19,
    },
    {
        type: "Pro",
        body: "More advanced features available. Recommended for photography veterans and professionals.",
        price: 39,
    },
    {
        type: "Business",
        body: "All enterprise features are provided to you. Best recommended for business photographers and companies.",
        price: 99,
    }
]

const yearlyPrice = [
    {
        type: "Classic",
        body: "All advanced features with image toolkits for filters and pre-sets are available.",
        price: 1140,
    },
    {
        type: "V.I.P",
        body: "Enterprise services and features with pre-sets and toolkits for advance editing services are provided.",
        price: 1340,
        // (number).toFixed(2); for decimal points in number
    },
]

const Pricing = () => {

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    }

    const { isXs } = useBreakpoints();

    return (
        <>
            <section>
                <Card
                    imagePath={card_Image}
                    cardHead={pricingCardData.head}
                    cardBody={pricingCardData.body}
                    isdark={true}
                    isbutton={false}
                />
            </section>
            <section className='pricing'>
                <label className="label">
                    <div className={`label-text left ${!check && "dark"}`}>monthly</div>
                    <div className="toggle">
                        <input className="toggle-state" type="checkbox" name="check" value={check} onChange={handleCheck} />
                        <div className="indicator"></div>
                    </div>
                    <div className={`label-text right ${check && "dark"}`}>yearly</div>
                </label>
                <div className="pricing_cards">
                    {(check ? yearlyPrice : monthlyPrice).map((value, index) => (
                        <div className='pricing_card' key={index}>
                            <div className="pricing_card___content">
                                <h3>{value.type}</h3>
                                <p>{value.body}</p>
                            </div>
                            <div className="pricing_card___value">
                                <h3>&#x24;{(value.price).toFixed(2)}</h3>
                                <span>{check ? "per year":"per month"}</span>
                            </div>
                            <button>Price Plans</button>
                        </div>
                    ))
                    }
                </div>
            </section>
        </>
    );
};

export default Pricing;
