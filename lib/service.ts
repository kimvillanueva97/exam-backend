export class Service {
    world() {
        return 'World'
    }

    hello() {
        return `Hello ${this.world()}`
    }
}
