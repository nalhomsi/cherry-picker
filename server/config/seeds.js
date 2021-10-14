const db = require('./connection');
const { User, Product, Category } = require('../models');
db.once('open', async () => {
	//await Category.deleteMany();
	const categories = await Category.insertMany([
		{ name: 'Austin Healey' },
		{ name: 'BMW' },
		{ name: 'Cadillac' },
		{ name: 'Chevrolet' },
		{ name: 'Cobra' },
		{ name: 'Ferrari' },
		{ name: 'Ford' },
		{ name: 'Jaguar' },
		{ name: 'Lancia' },
		{ name: 'Land Rover' },
		{ name: 'Mercedes' },
		{ name: 'Mini Cooper' },
		{ name: 'Pontiac' },
		{ name: 'Porsche' },
		{ name: 'Toyota' },
		{ name: 'Triumph' },
		{ name: 'VW' },
	]);
	console.log('categories seeded');
	//await Product.deleteMany();
	const products = await Product.insertMany([
		{
			name: 'AC Cobra',
			description:
				'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			image: 'cobra.jpg',
			category: categories[0]._id,
			price: 25000.0,
			quantity: 1,
		},
		{
			name: 'Austin Healey',
			description:
				'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
			image: 'austin-healey.jpg',
			category: categories[0]._id,
			price: 30000.0,
			quantity: 3,
		},
		{
			name: 'BMW e21',
			category: categories[1]._id,
			description:
				'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
			image: 'bmw-e21.jfif',
			price: 15000.0,
			quantity: 2,
		},
		{
			name: 'BMW e30',
			category: categories[1]._id,
			description:
				'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
			image: 'bmw-e30.jpg',
			price: 40000.0,
			quantity: 3,
		},
		{
			name: 'Cadillac DeVille',
			category: categories[1]._id,
			description:
				'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
			image: 'cadillac-deville.jpg',
			price: 60000.0,
			quantity: 4,
		},
		{
			name: 'Chevrolet C10',
			category: categories[2]._id,
			description:
				'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
			image: 'chevrolet-c10.jpg',
			price: 39000.0,
			quantity: 2,
		},
		{
			name: 'Ferrari 250 GTO',
			category: categories[2]._id,
			description:
				'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
			image: 'ferrari-250gto.jpg',
			price: 100000.0,
			quantity: 1,
		},
		{
			name: 'Ford Bronco',
			category: categories[3]._id,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
			image: 'ford-bronco1.jpg',
			price: 10000.0,
			quantity: 6,
		},
		{
			name: 'Red Ford F100',
			category: categories[4]._id,
			description:
				'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
			image: 'ford-f100-red.jpg',
			price: 12000.0,
			quantity: 3,
		},
		{
			name: 'Ford F100',
			category: categories[4]._id,
			description:
				'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
			image: 'ford-f100.jpg',
			price: 29000.0,
			quantity: 3,
		},
		{
			name: 'Ford Mustang',
			category: categories[4]._id,
			description:
				'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
			image: 'ford-mustang.jpg',
			price: 25000.0,
			quantity: 2,
		},
		{
			name: 'Jaguar eType',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'jaguar-etype.jpg',
			price: 75000.0,
			quantity: 1,
		},
		{
			name: 'Lancia Fulvia',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'Lancia-Fulvia.jpg',
			price: 20000.0,
			quantity: 1,
		},
		{
			name: 'Land Rover',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'land-rover-def.jpg',
			price: 60000.0,
			quantity: 1,
		},
		{
			name: 'Mercedes 230 SL',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'mercedes-230sl.jpg',
			price: 55000.0,
			quantity: 3,
		},
		{
			name: 'Mercedes 300 CD',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'mercedes-300cd.jpg',
			price: 15000.0,
			quantity: 1,
		},
		{
			name: 'Mercedes 300 SL',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'mercedes-300sl.jpg',
			price: 20000.0,
			quantity: 1,
		},
		{
			name: 'Mercedes 500 SL',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'mercedes-500sl.jpg',
			price: 30000.0,
			quantity: 1,
		},
		{
			name: 'Mini Cooper',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'mini-cooper.jpg',
			price: 25000.0,
			quantity: 6,
		},
		{
			name: 'Pontoac GTO',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'pontiac-gto.jpg',
			price: 50000.0,
			quantity: 1,
		},
		{
			name: 'Porsche 911',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'porsche-911-back.jpg',
			price: 75000.0,
			quantity: 1,
		},
		{
			name: 'Porsche 911',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'porsche-911.jpg',
			price: 75000.0,
			quantity: 1,
		},
		{
			name: 'Ford Shelby Cobra',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'shelby-cobra.jpg',
			price: 35000.0,
			quantity: 2,
		},
		{
			name: 'Toyota Fj40',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'toyota-fj40.jpg',
			price: 20000.0,
			quantity: 1,
		},
		{
			name: 'Triumph tr6',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'triumph-tr6.jpg',
			price: 15000.0,
			quantity: 1,
		},
		{
			name: 'Orange VW Beetle',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'vw-beetle-or.jpg',
			price: 15000.0,
			quantity: 2,
		},
		{
			name: 'Red VW Beetle',
			category: categories[4]._id,
			description:
				'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
			image: 'vw-beetle-red.jpg',
			price: 15000.0,
			quantity: 5,
		},
	]);
	console.log('products seeded');
	//await User.deleteMany();
	await User.create({
		firstName: 'Pamela',
		lastName: 'Washington',
		email: 'pamela@testmail.com',
		password: 'password12345',
		orders: [
			{
				products: [products[0]._id, products[0]._id, products[1]._id],
			},
		],
	});
	await User.create({
		firstName: 'Elijah',
		lastName: 'Holt',
		email: 'eholt@testmail.com',
		password: 'password12345',
	});
	console.log('users seeded');
	process.exit();
});
