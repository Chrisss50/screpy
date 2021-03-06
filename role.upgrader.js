var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.carryCapacity == creep.carry.energy) {
            creep.memory.upgrading = true;
        }
        if (creep.carry.energy == 0) {
            creep.memory.upgrading = false;
        }
	    if(!creep.memory.upgrading) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else {
            if(creep.memory.upgrading && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
	}
};

module.exports = roleUpgrader;