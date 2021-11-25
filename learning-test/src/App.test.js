import { create } from 'react-test-renderer';
import App from './App';

const component = create(<App />);
const header = component.root.findByType('header');

describe('Grupo de test de <App/>', () => {
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
