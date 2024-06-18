const AbstractSeeder = require('./AbstractSeeder');


class HoodSeeder extends AbstractSeeder {
    constructor() {
        super({ table: 'hood', truncate: true });
    }

    run() {
        const hood = [
            {
                hood_name: 'Rezé',
                city: false,
                suburbs: true,
            },

            {
                hood_name: 'Doulon',
                city: true,
                suburbs: false,
            },

            {
                hood_name: 'Olivettes',
                city: true,
                suburbs: false,
            },
        ];

        // eslint-disable-next-line no-shadow
        hood.forEach((hood) => {
            this.insert(hood);
        });

    }
}
module.exports = HoodSeeder;