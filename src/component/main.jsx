import React from 'react';
import firstImage from './image/first.png';

const Main = () => {
    return (
        <main className="bg-cover">
            <div
                className="bg-cover bg-center flex flex-col items-center justify-center bg-no-repeat h-screen"
                style={{ backgroundImage: `url(${firstImage})` }}
            >
                <h2 className="text-3xl xl:text-7xl text-white text-center mb-4 p-4 rounded-md font-bold uppercase">
                    Transformer les Visions en <br className="xl:block hidden" /> Réalité
                </h2>
                <span className="bg-lime-700 rounded-sm text-white text-center p-2 lowercase text-xs">
                    Offrir des solutions de construction innovantes et durables pour des infrastructures modernes.
                </span>
                <button className="mt-10 bg-white text-black-500 font-bold py-2 px-6 rounded-md hover:bg-lime-700 hover:text-white transition duration-300">
                    Contactez-nous Aujourd'hui
                </button>
            </div>
        </main>
    );
};

export default Main;

