import React from "react";

export default function ServicesDetail({ params }) {
  const id = params.id;
  const serviceData = [
    {
      _id: "srv-001",
      title: "Fast Delivery",
      description:
        "Get your products delivered quickly and safely all over Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=800&q=80",
    },
    {
      _id: "srv-002",
      title: "Secure Packaging",
      description:
        "We package your items securely to avoid any damage during transit.",
      image:
        "https://images.unsplash.com/photo-1518349619113-ebb92d7c5ce9?auto=format&fit=crop&w=800&q=80",
    },
    {
      _id: "srv-003",
      title: "Real-Time Tracking",
      description: "Track your parcel live via website or mobile app.",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
    },
    {
      _id: "srv-004",
      title: "24/7 Support",
      description:
        "Customer support available round the clock for your assistance.",
      image:
        "https://images.unsplash.com/photo-1521790365268-5e2b8c2a1a6c?auto=format&fit=crop&w=800&q=80",
    },
    {
      _id: "srv-005",
      title: "Affordable Pricing",
      description:
        "Competitive and transparent pricing for all delivery needs.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    },
    {
      _id: "srv-006",
      title: "Nationwide Coverage",
      description: "We deliver to all 64 districts across Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const data =serviceData.find(d=>d._id == id)
  return (
    <div>
      <h1>Services details</h1>
      <p>id:{id}</p>
      <h1>{data.title}</h1>
      <img src={data.image}></img>
    </div>
  );
}
