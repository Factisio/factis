var Core= require('factis-core');
var Group = require('factis-store-group');
var Hexastore = require('factis-store-hexastore');
var Identity = require('factis-store-identity');
var _ = require('lodash');

function Factis() {
  this.hexastore = new Hexastore();
  this.store = new Group([
    this.hexastore,
    new Identity()
  ]);
}

Factis.prototype.add = function(element) {
  if(_.isArray(element)){
    _.forEach(element,function(x){this.hexastore.add(x.a);});
  } else {
    if(element.x == "fact")
      this.hexastore.add(element.a);
  }
};

Factis.prototype.remove = function(element) {
  if(_.isArray(element)){
    _.forEach(element,function(x){this.hexastore.remove(x.a);});
  } else {
    if(element.x == "fact")
      this.hexastore.remove(element.a);
  }
};

Factis.prototype.query = function(query) {
  return Core.query(query,this.store);
};


Factis.prototype.fact = Core.fact;
Factis.prototype.the = Core.the;
Factis.prototype.and = Core.and;
Factis.prototype.or = Core.or;
Factis.prototype.not = Core.not;
Factis.prototype.implies = Core.implies;
Factis.prototype.equivalent = Core.equivalent;





module.exports = Factis;
