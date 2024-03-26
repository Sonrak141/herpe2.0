"use client";
import { db } from "@/firebase/client";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import ProductsCta from "@/components/molecules/ProductsCta";
import ProductCard from "@/components/molecules/ProductCard";

const fetchDataFb = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

const page = (props: {}) => {
  const [productsData, setProductsData] = useState<any>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await fetchDataFb();
      setProductsData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ProductsCta />
      <div className="w-[80%] mx-auto mt-[5rem]">
        <b className=" font-extrabold text-[2rem]">Nuestros productos</b>
        <div className=" flex md:flex-row mt-10 flex-wrap">
          {productsData.map((product: any) => (

            <ProductCard key={product.id} name={product.name} image={product.image} category={product.category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
