const AbstractSeeder = require('./AbstractSeeder');



class HoodSeeder extends AbstractSeeder {
    constructor() {
        super({ table: 'hood', truncate: true });
    }

    run() {
        const hoods = [
            {
                hood_name: 'Reze',
                city: true,
                suburbs: false
            },
            {
                hood_name: 'Olivettes',
                city: false,
                suburbs: false
            },
            {
                hood_name: 'Republique',
                city: true,
                suburbs: false
            },
        ];

        hoods.forEach((hood) => {
            this.insert(hood);
        });
    }
}

module.exports = HoodSeeder;
