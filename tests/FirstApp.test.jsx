import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => { 

    // test('Evaluar cambios en el componente', () => { 
        
    //     const title = 'Soy una prueba';
    //     const { container } = render( <FirstApp title={ title }/> );

    //     expect( container ).toMatchSnapshot();
    //  });

    test('Evalua el titulo del componente', () => { 

        const title = 'Soy una prueba';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> );

        expect( getByText (title) ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toBe( title );

        // const span = container.querySelector('span');
        // expect(span.innerHTML).toBe( title );
    });

    test('Evalua el subtitulo enviado por props', () => {

        const title = 'Soy una prueba';
        const subtitle = 1234;
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subtitle={ subtitle }
            />
        );

        expect( getAllByText( subtitle ).length ).toBe(3);
    });
 });