"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {

  const router =useRouter()
  const isLoggin =true;
  const handleNavigate =()=>{
    if(isLoggin){
      router.push('/about/address')
    }
    else{
      router.push('/')
    }
    
  }
  return (
    <div>
      <p>AboutPage</p>
      <p><Link href="about/address">AddressPage</Link></p>
      <button onClick={handleNavigate} type="button">AddressPage</button>
    </div>
  );
}
