const db = require('./connection');
const { User, Car } = require('../models');
// import car pics
import img1 from '../../moto-mern/src/assets/Cars/ac-cobra.jpg';
import img2 from '../../moto-mern/src/assets/Cars/austin-healey.jpg';
import img3 from '../../moto-mern/src/assets/Cars/bmw-e30.jpg';
import img4 from '../../moto-mern/src/assets/Cars/cadillac-deville.jpg';
import img5 from '../../moto-mern/src/assets/Cars/chevrolet-c10.jpg';
import img6 from '../../moto-mern/src/assets/Cars/ferrari-250gto.jpg';
import img7 from '../../moto-mern/src/assets/Cars/ford-bronco1.jpg';
import img8 from '../../moto-mern/src/assets/Cars/ford-f100-red.jpg';
import img9 from '../../moto-mern/src/assets/Cars/ford-f100.jpg';
import img10 from '../../moto-mern/src/assets/Cars/ford-mustang.jpg';
import img11 from '../../moto-mern/src/assets/Cars/jaguar-etype.jpg';
import img12 from '../../moto-mern/src/assets/Cars/Lancia-Fulvia.jpg';
import img13 from '../../moto-mern/src/assets/Cars/land-rover-def.jpg';
import img14 from '../../moto-mern/src/assets/Cars/mercedes-230sl.jpg';
import img15 from '../../moto-mern/src/assets/Cars/mercedes-300cd.jpg';
import img16 from '../../moto-mern/src/assets/Cars/mercedes-300sl.jpg';
import img17 from '../../moto-mern/src/assets/Cars/mercedes-500sl.jpg';
import img18 from '../../moto-mern/src/assets/Cars/mini-cooper.jpg';
import img19 from '../../moto-mern/src/assets/Cars/pontiac-gto.jpg';
import img20 from '../../moto-mern/src/assets/Cars/porsche-911-back.jpg';
import img21 from '../../moto-mern/src/assets/Cars/porsche-911.jpg';
import img22 from '../../moto-mern/src/assets/Cars/shelby-cobra.jpg';
import img23 from '../../moto-mern/src/assets/Cars/triumph-tr6.jpg';
import img24 from '../../moto-mern/src/assets/Cars/vw-beetle-or.jpg';
import img25 from '../../moto-mern/src/assets/Cars/vw-beetle-red.jpg';
import img26 from '../../moto-mern/src/assets/Cars/toyota-fj40.jpg';

db.once('open', async () => {
    await Car.deleteMany();

    const cars = await Car.insertMany([
        {
            year: '1962',
            make: 'AC',
            model: 'Cobra',
            image: img1
        },
        {
            year: '1964',
            make: 'Austin-Healey',
            model: '3000',
            image: img2
        },
        {
            year: '0000',
            make: 'BMW',
            model: 'e30',
            image: img3
        },
        {
            year: '0000',
            make: 'Cadillac',
            model: 'DeVille',
            image: img4
        },
        {
            year: '0000',
            make: 'Chevrolet',
            model: 'C-10',
            image: img5
        },
        {
            year: '0000',
            make: 'Ferrari',
            model: '250-GTO',
            image: img6
        },
        {
            year: '0000',
            make: 'Ford',
            model: 'Bronco',
            image: img7
        },
        {
            year: '0000',
            make: 'Ford',
            model: 'F100',
            image: img8
        },
        {
            year: '0000',
            make: 'Ford',
            model: 'F100',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
        {
            year: '0000',
            make: '',
            model: '',
            image: img 
        },
    ])
})