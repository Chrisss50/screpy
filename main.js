/**
 * Created by Chriz on 21/11/16.
 */
module.exports.loop = function () {
    for (let c in Game.creeps) {
        const creep = Game.creeps[c];
        if (!creep.memory.hasOwnProperty("WORKING")) {
            creep.memory.WORKING = true
        }
        if (creep.memory.WORKING && creep.carry.energy == creep.carryCapacity) {
            creep.memory.WORKING = false
        }
        if (!creep.memory.WORKING && creep.carry.energy == 0) {
            creep.memory.WORKING = true
        }
        if (!creep.memory.WORKING && creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns["Spawn1"])
        }
        if (creep.memory.WORKING) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source)
            }
        }
        if (creep.body.findIndex(checkCreepAttack) != -1) {
            const enemyBase = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            console.log("hi");
            creep.moveTo(enemyBase)
        }
    }

    if (Game.spawns["Spawn1"].energy > 200 && getCreepCount() < 5) {
        Game.spawns["Spawn1"].createCreep(["move", "work", "carry"])
    }
    else if (Game.spawns["Spawn1"].energy > 210) {
        Game.spawns["Spawn1"].createCreep(["move", "attack", "attack"])
    }
}

function getCreepCount() {
    let total = 0;
    for (let name in Game.creeps) {
        total++
    }
    console.log("Creeps alive: " + total)
    return total
}

function checkCreepAttack(bodyPart) {
    return bodyPart.type == "attack"
}

function checkCreepWork(bodyPart) {
    return bodyPart.type == "work"
}