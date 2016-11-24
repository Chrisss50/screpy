/**
 * Created by Chriz on 21/11/16.
 */
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleVoyager = require('role.voyager');

module.exports.loop = function () {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var buildersLeft = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.workingRoom == "W7S68");
    var buildersRight = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.workingRoom == "W6S68");
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
        if(creep.memory.role == 'voyager') {
            roleVoyager.run(creep);
        }
    }
    if(harvesters.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "carry", "move"], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "work", "carry", "carry", "move", "move"], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    if(buildersLeft.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "work", "carry", "carry", "move", "move"], undefined, {role: 'builder', workingRoom: "W7S68"});
        console.log('Spawning new builder: ' + newName);
    }
    if(buildersRight.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "work", "carry", "carry", "move", "move"], undefined, {role: 'builder', workingRoom: "W6S68"});
        console.log('Spawning new builder: ' + newName);
    }
    if(upgrader.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep(["work", "work", "carry", "carry", "move", "move"], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }
};