import React from 'react';
import './Cards.css';
import antiSkid from '../assets/marbelimgs/Anti-Skid_Granites.jpg';
import cellWhite from '../assets/marbelimgs/Cell_white.jpg';
import coffeeBrown from '../assets/marbelimgs/Coffee_Brown.jpg';
import greenBlack from '../assets/marbelimgs/Green_Black.jpg';
import leatherPolish from '../assets/marbelimgs/Leather_Polish.jpg';
import lapotra from '../assets/marbelimgs/Lapotra.jpg';
import catsEye from '../assets/marbelimgs/Cats_Eye.jpg'; // ✅ renamed file (no ')
import flaming from '../assets/marbelimgs/Flaming.jpg';
import khammamBlack from '../assets/marbelimgs/Khammam_Black.jpg';
import leatherSlabs from '../assets/marbelimgs/Leather_Polished_Slabs.jpg';
import mudgalGrey from '../assets/marbelimgs/Mudgal_Greyz.jpg';
import tanBlue from '../assets/marbelimgs/Tan_Blue.jpg';
import tanBrown from '../assets/marbelimgs/Tan_Brown.jpg';
import tandoor from '../assets/marbelimgs/Tandoor_Stones.jpg';
import zedBlack from '../assets/marbelimgs/Zed_Black.jpg';

function Cards() {

  const data = [
    {
      img: antiSkid,
      title: "Anti-Skid Granites",
      desc: "Engineered for safety with a textured finish, perfect for wet and outdoor areas."
    },
    {
      img: cellWhite,
      title: "Cell White",
      desc: "Crisp white granite that enhances modern and minimalist interiors."
    },
    {
      img: coffeeBrown,
      title: "Coffee Brown",
      desc: "Rich brown tones that bring warmth and sophistication to any space."
    },
    {
      img: greenBlack,
      title: "Green Black",
      desc: "Elegant black granite with subtle green undertones for a unique look."
    },
    {
      img: leatherPolish,
      title: "Leather Polish",
      desc: "Soft textured finish that blends style with durability and grip."
    },
    {
      img: lapotra,
      title: "Lapotra Granite",
      desc: "Fine-textured anti-skid surface offering both elegance and safety."
    },
    {
      img: catsEye,
      title: "Cat's Eye Granite",
      desc: "Distinctive patterns with a natural shimmer for standout designs."
    },
    {
      img: flaming,
      title: "Flaming Finish",
      desc: "Rough textured surface designed for superior slip resistance."
    },
    {
      img: khammamBlack,
      title: "Khammam Black",
      desc: "Deep black premium granite ideal for luxurious interiors and exteriors."
    },
    {
      img: leatherSlabs,
      title: "Leather Polished Slabs",
      desc: "Perfect for balconies, parking areas, and bathrooms with a stylish matte finish."
    },
    {
      img: mudgalGrey,
      title: "Mudgal Grey",
      desc: "Subtle grey tones that create a sleek and modern aesthetic."
    },
    {
      img: tanBlue,
      title: "Tan Blue",
      desc: "Unique blend of blue and earthy tones for bold, eye-catching spaces."
    },
    {
      img: tanBrown,
      title: "Tan Brown",
      desc: "A perfect mix of brown and black shades for warm and inviting interiors."
    },
    {
      img: tandoor,
      title: "Tandoor Stones",
      desc: "Available in rough, polished, and leather finishes for versatile applications."
    },
    {
      img: zedBlack,
      title: "Zed Black",
      desc: "Deep, rich black granite that delivers a timeless and premium look."
    }
  ];

  return (
    <div className="cards-container">
      <h1 style={{ color: "teal", marginBottom: "40px" }}>
        Our Collections
      </h1>

      <div className="cards-grid">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;