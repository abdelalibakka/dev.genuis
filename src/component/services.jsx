import React from 'react';

function Service() {
  return (
    <div> 
             <div className="m-12"> {/* Moves 40px down and 40px left */}
                 <h1 className='text-base capitalize'>Nos Services Complets</h1>
                 <h1 className='text-4xl capitalize font-bold mt-5'>Catégories de Services</h1>
             <div className="w- h-0.5 bg-black mt-2"></div>



        <div className=" mx-auto p-4">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
               

             {/* First Card */}
             <div className="bg-white p-6 border border-black text-center flex flex-col justify-between items-center ">
             <svg  xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
             </svg>
             

            <h2 className="text-xl font-semibold mb-2">Gros œuvre</h2>
            <p className="text-gray-600 mb-4">La phase de gros œuvre est une étape essentielle dans la construction d'une villa de qualité. Notre équipe de professionnels expérimentés supervise toutes les étapes du processus, depuis les fondations jusqu'à
             l'achèvement de la structure principale. Nous veillons à l'utilisation de matériaux ...</p>
            <button className="bg-black text-white py-2 px-4 ">voure plus</button>
          </div>

          {/* Second Card */}
            <div className="bg-lime-700 p-6 border-black text-center flex flex-col justify-between items-center ">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
          </svg>

          <h2 className="text-xl font-semibold mb-2">Commercialisation</h2>
          <p className="text-white mb-4">La commercialisation de la construction de villas prend une nouvelle dimension avec notre approche intégrée. En proposant des services de location gérés par une conciergerie professionnelle, 
            nous offrons une solution complète. De la conception à la construction, en passant par ...</p>
          <button className="bg-white text-black py-2 px-4 ">voure plus</button>
        </div>

        {/* Third Card */}
        <div className="bg-blue-800 text-white p-6 border border-black text-center flex flex-col justify-between items-center ">
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg>

          <h2 className="text-xl font-semibold mb-2">Second œuvre</h2>
          <p className=" mb-4">Une fois le gros œuvre terminé, notre attention se tourne vers la seconde œuvre, 
            qui comprend les travaux de finition et d'aménagement intérieur. Nous nous occupons à votre disposition d'une équipe spécialisée dans les métiers de la seconde œuvre,
             tels que l'électricité, la plomberie, la menuiserie, ...</p>
             <button className="bg-white text-black py-2 px-4 p-3 ">voure plus</button>
        </div>

        {/* Fourth Card */}
        <div className="bg-lime-700 p-6 border border-black text-center flex flex-col justify-between items-center ">
        <svg className="w-40" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
</svg>


          <h2 className="text-xl font-semibold mb-2">Title 4</h2>
          <p className="text-white mb-4">Une fois le gros œuvre terminé, notre attention se tourne vers la seconde œuvre, 
            qui comprend les travaux de finition et d'aménagement intérieur. Nous nous occupons à votre disposition d'une équipe spécialisée dans les métiers de la seconde œuvre,
             tels que l'électricité, la plomberie, la menuise</p>
             <button className="bg-white text-black py-2 px-4 ">voure plus</button>
        </div>

        {/* Fifth Card */}
        <div className="bg-blue-900 text-white p-6 border border-black  text-center flex flex-col justify-between items-center ">
        <svg className="w-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
         <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>

          <h2 className="  text-xl font-semibold mb-2">TArchitecture et Ingénierie</h2>
          <p className=" mb-4">La décoration et l'ameublement sont les touches finales qui donnent à votre villa son caractère unique. Notre équipe de designers d'intérieur talentueux vous accompagne dans le choix des matériaux,
             des couleurs, des textures et des éléments décoratifs pour créer l'ambiance souhaitée. ...</p>
             <button className="bg-white text-black py-2 px-4 ">voure plus</button>
        </div>

        {/* Sixth Card */}
        <div className="bg-white p-6  text-center border border-black flex flex-col justify-between items-center ">
          <svg className="w-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
</svg>

          <h2 className="text-xl font-semibold mb-2">Finition</h2>
          <p className="#07245A mb-4">Notre équipe de rédacteurs expérimentés comprend l'importance cruciale d'un plan d'architecture
             solide pour la construction d'une villa. Nous travaillons en étroite collaboration avec des architectes talentueux pour concevoir des plans qui répondent aux besoins spécifiques ...</p>
             <button className="bg-black text-white py-2 px-4 ">voure plus</button>
            
          </div>
           </div>
            </div>
              </div>

              <div className='m-12'>
                 <h1 className='text-base capitalize'>À Propos </h1>
                 <h1 className='text-4xl capitalize font-bold mt-5'>Développement Innovant et 
                 Infrastructure Durable</h1>
             <div className="w- h-0.5 bg-black mt-2"></div>
             <img 
src="https://s3-alpha-sig.figma.com/img/0474/981a/eac41b41c2efc414385319583c8c465e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oub1N16xzQ29KikV8MRlSdUZ-ClqFtXx6UHMIdy5rumkSwah2XWWKzZkbvITd0cCZKtr1bE7HQWZ1STEDwstWH6sei4MPfLGTSlI0iqmzyr6T9mDmuj5CXWqSZwAfous9P0VOLBH3St4U92hpCB8IpOQ07y71ltbB-8UKIouLy7-R5vaZZQd0yAHe5szksRIAAS42HlXMyi4eUSxmDKuY8CGIEI6jJ0A29vu~tKwlEY2TgrfHdOz20yhCVYaZHE7DebtVtUrsE3HzSs19b18Dx~P0tvAh1XN5aCOjNSLz6b3~NqqD5yxkWP3RAy50Bcf937jExlBuAiviSd~VV3QIg__" 
     alt="placeholder" 
     className="w-full h-auto mt-4"
      
    />
    <p className=" text-xl mt-4">
    Chez SOCIETE EL HABRI CONCEPT , nous sommes passionnés par la création d’infrastructures modernes et durables. Forts de plus de 11 ans d'expérience, nous nous engageons à offrir des solutions de construction innovantes, alliant performance, qualité et respect de l'environnement. Notre objectif est de transformer vos idées en réalité,
     en veillant à la satisfaction totale de nos clients à chaque étape du projet.
   </p>

   


             </div>
             
            <div className="bg-lime-700 w-full">
            <p className="text-center text-white p-4 uppercase">
                Un court paragraphe sur votre engagement envers la construction durable et la satisfaction des clients.
            </p>
                
                <div className=' text-white flex sm:flex-row flex-col justify-between items-center container uppercase'>
                   <div className=' flex flex-col gap-6 justify-center items-center'>
                    <div>400+</div>
                    <div>Projets Réalisés</div>

                </div>
                   <div className=' flex flex-col gap-6 justify-center items-center'>
                    <div>400+</div>
                    <div>Projets Réalisés</div>

                   </div>
                   <div className=' flex flex-col gap-6 justify-center items-center'>
                    <div>400+</div>
                    <div>Projets Réalisés</div>

                   </div>
                   <div className=' flex flex-col gap-6 justify-center items-center'>
                    <div>400+</div>
                    <div>Projets Réalisés</div>
                    <img src="" alt=""></img>

                   </div>
                </div>
            </div>
    </div>
  );
}

export default Service;

