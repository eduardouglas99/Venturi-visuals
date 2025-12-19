"use client"

import React from "react";

export default function NotFound() {
  return (
 <section
      className="flex justify-center lg:justify-start items-center h-[696px] md:h-[calc(100vh-32px)] bg-cover bg-center lg:px-24">
      <div className=" flex flex-col max-w-[calc(80%-32px)] w-full py-12 gap-12 md:py-16 md:gap-8">
        <div className="flex flex-col gap-8  md:gap-16 ">
          <div className="flex flex-col gap-6 ">
            <header className="flex flex-col gap-3 ">
              <span className="font-semibold text-base tracking-tight">Não encontrado</span>
              <h1 className="text-6xl md:text-8xl mb-8 tracking-tight">Não conseguimos encontrar a página.</h1>
            </header>
            <p className="text-xl text-gray-600 max-w-3xl  leading-relaxed">Desculpe, a página que você está procurando não existe ou foi movida.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
