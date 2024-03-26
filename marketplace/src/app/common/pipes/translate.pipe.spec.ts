import { Translate } from './translate.pipe';

describe('TranslatePipe', () => {

  it('create an instance', () => {
    const pipe = new Translate();
    expect(pipe).toBeTruthy();
  });

  it('should choose correct translation', () => {
    const pipe = new Translate();
    expect(pipe.transform('de', 'german', 'english')).toEqual('german');
    expect(pipe.transform('en', 'german', 'english')).toEqual('english');
  });

  it('should choose german as standard translation', () => {
    const pipe = new Translate();
    expect(pipe.transform('', 'german', 'english')).toEqual('german');
    expect(pipe.transform('ff', 'german', 'english')).toEqual('german');
  });

  it('should handle empty strings', () => {
    const pipe = new Translate();
    expect(pipe.transform('', '', '')).toEqual('');
    expect(pipe.transform('de', '', '')).toEqual('');
    expect(pipe.transform('de', 'german', '')).toEqual('german');
    expect(pipe.transform('', 'german', '')).toEqual('german');
    expect(pipe.transform('', 'german', 'english')).toEqual('german');
    expect(pipe.transform('de', '', 'english')).toEqual('');
  });
});
