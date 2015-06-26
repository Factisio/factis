var Core = require('factis-core');
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
  if (_.isArray(element)) {
    var hexastore = this.hexastore;
    _.forEach(element, function(x) {
      hexastore.add(x.a);
    });
  } else {
    if (element.x == "fact") {
      this.hexastore.add(element.a);
    } else {
      throw new Error('Hexastore can only add facts or arrays of facts');
    }
  }
};

Factis.prototype.remove = function(element) {
  if (_.isArray(element)) {
    var hexastore = this.hexastore;
    _.forEach(element, function(x) {
      hexastore.remove(x.a);
    });
  } else {
    if (element.x == "fact") {
      this.hexastore.remove(element.a);
    } else {
      throw new Error('Hexastore can only remove facts or arrays of facts');
    }
  }
};

Factis.prototype.query = function(query) {
  return Core.query(query, this.store);
};


Factis.prototype.fact = Core.fact;
Factis.prototype.the = Core.the;
Factis.prototype.and = Core.and;
Factis.prototype.or = Core.or;
Factis.prototype.not = Core.not;
Factis.prototype.implies = Core.implies;
Factis.prototype.equivalent = Core.equivalent;





module.exports = Factis;
