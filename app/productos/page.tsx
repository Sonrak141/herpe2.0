"use client";
import { db } from "@/firebase/client";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import ProductsCta from "@/components/molecules/ProductsCta";
import ProductCard from "@/components/molecules/ProductCard";
import Footer from "@/components/organisms/Footer";

const fetchDataFb = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data: any = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

const Page = (props: {}) => {
  const [productsData, setProductsData] = useState<any>([]);
  const [filter, setFilter] = useState<any>('terminales')

  const navigation = [
    { name: 'Terminales', href: '#', value: 'terminales' },
    { name: 'Cables', href: '#', value: 'terminal cable' },
    { name: 'Armamento', href: '#', value: 'armamento' },

  ]
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')

  }
  const fetchData = async () => {
    const data: any = await fetchDataFb();
    let dataFilter: any[] = []
    data.map((product: any) => {
      if (product.category === filter) {
        dataFilter.push(product)
      }
    })
    setProductsData(dataFilter);
  };

  const changeTab = async (value: string) => {
    setFilter(value)
    await fetchData()
  }

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await fetchDataFb();
      let dataFilter: any[] = []
      data.map((product: any) => {
        if (product.category === filter) {
          dataFilter.push(product)
        }
      })
      setProductsData(dataFilter);
    };

    fetchData();

  }, [filter]);

  return (
    <div>
      <ProductsCta />
      <div className="w-[80%] mx-auto mt-[5rem]">
        <b className=" font-extrabold text-[2rem]">Nuestros productos</b>
        <div className="block">
          <div className="ml-10 mt-10 flex items-baseline space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setFilter(item.value)}
                className={classNames(
                  item.value === filter
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
                aria-current={item.value === filter ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className=" flex md:flex-row mt-10 flex-wrap">
          {productsData.map((product: any) => (

            <ProductCard key={product.id} name={product.name} image={product.image} category={product.category} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
