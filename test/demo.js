const instance= artifacts.require('demo.sol');
contract('demo', () => {
    it('should update data', async()=>{
        const demo1 = await instance.new(10);
        await demo1.updateNum(20);
        const res = await demo1.getNum();
        console.log(res.toString());
        assert(res.toString() === '20', "assert error");
        // assert(res.toString() === '10');
    })
})