import Link from "next/link";
import React from "react";

export default function ServicesPage() {
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
      _id: "srv-003",
      title: "Real-Time Tracking",
      description: "Track your parcel live via website or mobile app.",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
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

  return (
    <div>
      <p>Service</p>
      <div className="flex items-center gap-5 m-5">
        {serviceData.map((d) => (
          <div key={d._id}>
            <Link href={`/services/${d._id}`}>
              <img className="h-56" src={d.image} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
