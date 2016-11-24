var roleVoyager = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var dest = "W7S68";
        if(creep.room.name != dest) {
            creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(dest)));
        }
    }
};

module.exports = roleVoyager;/**
 * Created by Chriz on 24.11.2016.
 */
