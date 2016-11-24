/**
 * Created by Chriz on 21/11/16.
 */
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
    if(harvesters.length < 1) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "carry", "move"], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    if(builders.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "work", "carry", "carry", "move"], undefined, {role: 'builder'});
        console.log('Spawning new harvester: ' + newName);
    }
    if(upgrader.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "work", "carry", "carry", "move"], undefined, {role: 'upgrader'});
        console.log('Spawning new harvester: ' + newName);
    }
};