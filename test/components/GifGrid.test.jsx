import { GifGrid } from "../../src/components";
import { render } from "@testing-library/react";

describe(' <GifGrid/> component test', () => {

    const catogory = 'one-punch'

    test('should show loading at first', () => {
        
        render( <GifGrid catogory={catogory} /> );

        

    })
    

})
