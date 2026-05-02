import React from 'react';
import './Cards.css';

function Cards() {

const data = [
  {
    img: "src/assets/marbelimgs/Anti-Skid_Granites.jpg",
    title: "Anti-Skid Granites",
    desc: "Engineered for safety with a textured finish, perfect for wet and outdoor areas."
  },
  {
    img: "src/assets/marbelimgs/Cell_white.jpg",
    title: "Cell White",
    desc: "Crisp white granite that enhances modern and minimalist interiors."
  },
  {
    img: "src/assets/marbelimgs/Coffee_Brown.jpg",
    title: "Coffee Brown",
    desc: "Rich brown tones that bring warmth and sophistication to any space."
  },
  {
    img: "src/assets/marbelimgs/Green_Black.jpg",
    title: "Green Black",
    desc: "Elegant black granite with subtle green undertones for a unique look."
  },
  {
    img: "src/assets/marbelimgs/Leather_Polish.jpg",
    title: "Leather Polish",
    desc: "Soft textured finish that blends style with durability and grip."
  },
  {
    img: "src/assets/marbelimgs/Lapotra.jpg",
    title: "Lapotra Granite",
    desc: "Fine-textured anti-skid surface offering both elegance and safety."
  },
  {
    img: "src/assets/marbelimgs/Cat's_Eye.jpg",
    title: "Cat's Eye Granite",
    desc: "Distinctive patterns with a natural shimmer for standout designs."
  },
  {
    img: "src/assets/marbelimgs/Green_Black.jpg",
    title: "Green Black",
    desc: "Premium dark granite with a refined and contemporary finish."
  },
  {
    img: "src/assets/marbelimgs/Flaming.jpg",
    title: "Flaming Finish",
    desc: "Rough textured surface designed for superior slip resistance."
  },
  {
    img: "src/assets/marbelimgs/Khammam_Black.jpg",
    title: "Khammam Black",
    desc: "Deep black premium granite ideal for luxurious interiors and exteriors."
  },
  {
    img: "src/assets/marbelimgs/Leather_Polished_Slabs.jpg",
    title: "Leather Polished Slabs",
    desc: "Perfect for balconies, parking areas, and bathrooms with a stylish matte finish."
  },
  {
    img: "src/assets/marbelimgs/Mudgal_Greyz.jpg",
    title: "Mudgal Grey",
    desc: "Subtle grey tones that create a sleek and modern aesthetic."
  },
  {
    img: "src/assets/marbelimgs/Tan_Blue.jpg",
    title: "Tan Blue",
    desc: "Unique blend of blue and earthy tones for bold, eye-catching spaces."
  },
  {
    img: "src/assets/marbelimgs/Tan_Brown.jpg",
    title: "Tan Brown",
    desc: "A perfect mix of brown and black shades for warm and inviting interiors."
  },
  {
    img: "src/assets/marbelimgs/Tandoor_Stones.jpg",
    title: "Tandoor Stones",
    desc: "Available in rough, polished, and leather finishes for versatile applications."
  },
  {
    img: "src/assets/marbelimgs/Zed_Black.jpg",
    title: "Zed Black",
    desc: "Deep, rich black granite that delivers a timeless and premium look."
  }
];

  return (
    <div className="cards-container">
      <h1 style={{color:"teal", marginBottom:"40px"}}>Our Collections</h1>

      <div className="cards-grid">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt="stone" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;