jest.autoMockOff();

var Factis = require('factis');

describe('factis',function(){
  it('identity',function(){
    var f = new Factis();
    expect(f.query(
      f.fact("x","not equals","y")
    ).length).toEqual(1);

    expect(f.query(
      f.fact("x","equals","y")
    ).length).toEqual(0);

    expect(f.query(
      f.fact("x","not equals","x")
    ).length).toEqual(0);

    expect(f.query(
      f.fact("x","equals","x")
    ).length).toEqual(1);
  });

  it('hexastore',function(){
    var f = new Factis();
    expect(f.query(
      f.fact("x","y","z")
    ).length).toEqual(0);

    f.add(f.fact("x","y","z"));

    expect(f.query(
      f.fact("x","y","z")
    ).length).toEqual(1);

    f.remove(f.fact("x","y","z"));

    expect(f.query(
      f.fact("x","y","z")
    ).length).toEqual(0);
  });
});
