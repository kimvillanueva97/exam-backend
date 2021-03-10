import { createSandbox, SinonSandbox, SinonSpy } from 'sinon';
import { Service } from '../../lib/service';
import { expect } from 'chai';


describe('service.ts', () => {
    let service: Service, sandbox: SinonSandbox;

    before(() => {
        sandbox = createSandbox();
    });

    beforeEach(() => {
        service = new Service();
    });

    describe('hello', () => {
        let worldSpy: SinonSpy;
        beforeEach(() => {
            worldSpy = sandbox.spy(service, 'world');
        });

        it('should return hello world', () => {
            const result = service.hello();

            expect(worldSpy.calledOnce).to.be.true;
            expect(result).to.be.equal(`Hello ${worldSpy.getCall(0).returnValue}`);
        });
    });

    describe('world', () => {
        it('should return world', () => {
            const world = service.world();

            expect(world).to.be.equal('World');
        })
    });
});