import React from 'react';
import Resale from './Resale';

const Resales = () => {
    const resalesData = [
        {
            id: 1,
            name: 'Harry Potter ',
            description: `Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harrys second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.`,
            img: 'https://i.ibb.co/CHBP7zv/cartoon-wizard-boy-with-magic-wand-29190-6936.webp'
        },
        {
            id: 2,
            name: 'A Tale of Two Cities',
            description: `A Tale of Two Cities is an historical novel published in 1859 by Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris, and his release to live in London with his daughter Lucie whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror.`,
            img: 'https://i.ibb.co/YcvCZnC/book-with-scene-dragon-knight-1308-96282.webp'
        },
        {
            id: 3,
            name: 'The Little Prince',
            description: `The Little Prince (French: Le Petit Prince, pronounced [lә p(ә)ti pᴚἕS]) is a novella by French aristocrat, writer, and military aviator Antoine de Saint-Exupéry. It was first published in English and French in the United States by Reynal & Hitchcock in April 1943 and was published posthumously in France following liberation; Saint-Exupéry's works had been banned by the Vichy Regime`,
            img: 'https://i.ibb.co/yN7W759/cute-happy-young-king-throne-cartoon-coloring-book-page-kids-727710-258.webp'
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Success</h3>
                <h2 className='text-3xl font-bold'>Highest Resales Book</h2>
            </div>
            <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    resalesData.map(resale => <Resale
                        key={resale.id}
                        resale={resale}
                    ></Resale>)
                }
            </div>

        </div>
    );
};

export default Resales;