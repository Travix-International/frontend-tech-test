/* 
 * Saga builder is a custom class created to allow generators
 * to work a Sagas to perform multiple async operations in the
 * models with a cleaner look than the common promises pattern
 */
class Saga {

    static saga_builder (GENERATOR) {
        let args = [];

        for (let key in arguments) {
            if (key != 0) {
                args.push(arguments[key]);
            }
        }

        //Pass arguments to generator
        let generator = GENERATOR.apply(this, args);

        const handle = result => {

            if (result.done) {
                return Promise.resolve(result.value);
            }

            return Promise.resolve(result.value).then(res => {
                return handle(generator.next(res));
            }, err => {
                return handle(generator.throw(err));
            });
        }

        try {
            return handle(generator.next());
        } catch (ex) {
            return Promise.reject(ex);
        }

    }

}

export default Saga