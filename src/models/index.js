import Vasern from 'vasern';
import Texto from './Texto';
import Expressao from './Expressao';

const VasernDB = new Vasern({
  schemas: [Expressao, Texto],
  version: 1,
});

const { Textos, Expressoes } = VasernDB;

export default VasernDB;

export { Textos, Expressoes };
