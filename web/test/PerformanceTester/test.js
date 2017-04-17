/**
 * Created by mxu on 12/30/16.
 */


const tester = require('./index');
const logger = require('../../modules/Logger');

// tester.runCommand('perf.cpuclock');
// tester.runCommand('cpu.top');


tester.runCommandRepeatedly('cpu.status', 10, function(stat) {
    console.log(stat);
});
//
// tester.runAllSupportedCommandsOneByOne(function(stat) {
//     logger.debug(stat);
// });

// tester.runCommandsOneByOne(['cpu.avgload', 'cpu.status', 'cpu.top', 'cpu.count']);