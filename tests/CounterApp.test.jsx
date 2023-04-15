import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => { 

    const value = 100;

    test('Evalua cambios en el componente', () => { 
        
        const { container } = render (
            <CounterApp
                value={ value }
            />
        );

        expect( container ).toMatchSnapshot();
    });

    test('Evalua valor inicial de 100', () => { 

        render (
            <CounterApp
                value={ value }
            />
        );

        expect( screen.getByRole( 'heading' , { level: 2 }).innerHTML ).toBe( value.toString() );
    });

    test('Evalua evento click de +1', () => { 

        render (
            <CounterApp
                value={ value }
            />
        );

        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByRole( 'heading' , { level: 2 }).innerHTML ).toBe( (value + 1).toString() );
    });

    test('Evalua evento click de -1', () => { 

        render (
            <CounterApp
                value={ value }
            />
        );

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByRole('heading' , { level: 2 }).innerHTML ).toBe( (value - 1).toString() );
    });

    test('Evalua evento click de reset', () => { 

        render (
            <CounterApp
                value={ value }
            />
        );

        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );

        expect( screen.getByRole( 'heading' , { level: 2 }).innerHTML ).toBe( (value).toString() );
    });
 });