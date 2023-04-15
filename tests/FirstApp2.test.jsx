import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => { 

  const title = 'Soy una titulo prueba';
  const subtitle = 1234;

    test('Evaluar cambios en el componente', () => { 
        
        const { container } = render (
          <FirstApp 
            title = { title }
          />
        );

        expect( container ).toMatchSnapshot();
    });

    test('Evalua el titulo del componente', () => { 

      render (
        <FirstApp 
          title = { title }
        />
      );

      expect( screen.getByText( title ) ).toBeTruthy();
    });


    test('Evalua el titulo en una h1', () => { 

      render (
        <FirstApp 
          title = { title }
        />
      );

      expect( screen.getByRole( 'heading' , { level: 1 }).innerHTML ).toContain( title );
    });

    test('Evalua el subtitulo enviado por props', () => {

      render (
        <FirstApp 
          title = { title }
          subtitle={ subtitle }
        />
      );

      expect( screen.getAllByText( subtitle ).length ).toBe(3);
    });
 });