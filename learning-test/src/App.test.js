import { create } from 'react-test-renderer';
import App from './App';

let component = undefined;
let header = undefined;

describe('Grupo de test de <App/>', () => {
  //ejecutar antes de todos los casos de pruebas de
  beforeAll(() => {
    component = create(<App />);
    header = component.root.findByType('header');
  });

  //1- unit testing
  it('se renderiza correctamente', () => {
    //evaluando que el componente este definido
    expect(component).toBeDefined();
  });

  //2- unit testing
  it('se renderiza correctamente el header', () => {
    expect(header.props.className).toEqual('App-header');
  });

  //3- unit testing
  it('se renderiza correctamente un texto, link y una imagen', () => {
    const img = header.findByType('img');
    const a = header.findByType('a');
    const p = header.findByType('p');

    expect(img).toBeDefined();
    expect(img.props.src).toEqual('logo.svg');

    expect(a).toBeDefined();
    expect(a.props.href).toBe('https://reactjs.org');

    expect(p).toBeDefined();
    expect(p.findByType('code')).toBeDefined();
  });
});
