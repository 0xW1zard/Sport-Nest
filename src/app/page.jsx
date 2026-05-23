'use client'
import FacilityCard from "@/components/FacilityCard";
import Footer from "@/components/Footer";
import Hero from "@/components/homeComponents/Hero";
import SeamlessBooking from "@/components/homeComponents/SeamlessBooking";
import SportCategories from "@/components/homeComponents/SportCategories";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [facilities, setFacilities] = useState([])

  useEffect(() => {
    const fetchFacilities = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allFacilitate`);
      const data = await response.json();
      setFacilities(data);
    };
    fetchFacilities();
  }, []);

  console.log(facilities)

  const SixFacilities = facilities.slice(0, 6);
  return (
    <>
      <div className="container mx-auto">
        <Hero></Hero>
        <SportCategories></SportCategories>
        <div className="container mx-auto my-6">
          <h1 className="text-3xl text-center font-bold">Featured Venues</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {SixFacilities.map((facility) => (
              <FacilityCard key={facility._id} facilities={facility} />
            ))}
          </div>
        </div>
        <SeamlessBooking></SeamlessBooking>
      </div>
      <Footer></Footer>
    </>

  );
}
