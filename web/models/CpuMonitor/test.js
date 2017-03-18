/**
 * Created by mxu on 12/30/16.
 */

var cpuMonitor = require('./index');
var util = require('../Utility');
var unitTester = require('../UnitTester');

var server = 'www.linuxxueyuan.com';

// unitTester.test(cpuMonitor.GetProcCpuinfo, './tests/GetProcCpuinfo.json', function(results) {
//
// });
//
// cpuMonitor.GetCmdTop({server: server,
//     mockData: '  PID USER     PRI  NI    VSZ   RSS S %CPU %MEM     TIME CMD\n    1 0         19   0  33488  3152 S  0.0  0.3 00:00:28 /sbin/init\n    2 0         19   0      0     0 S  0.0  0.0 00:00:00 kthreadd\n    3 0         19   0      0     0 S  0.0  0.0 00:00:00 ksoftirqd/0\n    5 0         39 -20      0     0 S  0.0  0.0 00:00:00 kworker/0:0H\n    7 0         19   0      0     0 S  0.0  0.0 00:01:27 rcu_sched\n    8 0         19   0      0     0 S  0.0  0.0 00:00:00 rcu_bh\n    9 0         19   0      0     0 S  0.0  0.0 00:00:29 rcuos/0\n   10 0         19   0      0     0 S  0.0  0.0 00:00:00 rcuob/0\n   11 0        139   -      0     0 S  0.0  0.0 00:00:04 migration/0\n   12 0        139   -      0     0 S  0.0  0.0 00:00:03 watchdog/0\n   13 0        139   -      0     0 S  0.0  0.0 00:00:03 watchdog/1\n   14 0        139   -      0     0 S  0.0  0.0 00:00:04 migration/1\n   15 0         19   0      0     0 S  0.0  0.0 00:00:01 ksoftirqd/1\n   17 0         39 -20      0     0 S  0.0  0.0 00:00:00 kworker/1:0H\n   18 0         19   0      0     0 R  0.0  0.0 00:00:44 rcuos/1\n   19 0         19   0      0     0 S  0.0  0.0 00:00:00 rcuob/1\n   20 0         39 -20      0     0 S  0.0  0.0 00:00:00 khelper\n   21 0         19   0      0     0 S  0.0  0.0 00:00:00 kdevtmpfs\n   22 0         39 -20      0     0 S  0.0  0.0 00:00:00 netns\n   23 0         39 -20      0     0 S  0.0  0.0 00:00:00 perf\n   24 0         19   0      0     0 S  0.0  0.0 00:00:01 khungtaskd\n   25 0         39 -20      0     0 S  0.0  0.0 00:00:00 writeback\n   26 0         14   5      0     0 S  0.0  0.0 00:00:00 ksmd\n   27 0          0  19      0     0 S  0.0  0.0 00:00:05 khugepaged\n   28 0         39 -20      0     0 S  0.0  0.0 00:00:00 crypto\n   29 0         39 -20      0     0 S  0.0  0.0 00:00:00 kintegrityd\n   30 0         39 -20      0     0 S  0.0  0.0 00:00:00 bioset\n   31 0         39 -20      0     0 S  0.0  0.0 00:00:00 kblockd\n   32 0         39 -20      0     0 S  0.0  0.0 00:00:00 ata_sff\n   33 0         39 -20      0     0 S  0.0  0.0 00:00:00 md\n   34 0         39 -20      0     0 S  0.0  0.0 00:00:00 devfreq_wq\n   38 0         19   0      0     0 S  0.0  0.0 00:00:00 kswapd0\n   39 0         39 -20      0     0 S  0.0  0.0 00:00:00 vmstat\n   40 0         19   0      0     0 S  0.0  0.0 00:00:00 fsnotify_mark\n   41 0         19   0      0     0 S  0.0  0.0 00:00:00 ecryptfs-kthrea\n   52 0         39 -20      0     0 S  0.0  0.0 00:00:00 kthrotld\n   53 0         39 -20      0     0 S  0.0  0.0 00:00:00 acpi_thermal_pm\n   54 0         19   0      0     0 S  0.0  0.0 00:00:54 vballoon\n   55 0         19   0      0     0 S  0.0  0.0 00:00:00 scsi_eh_0\n   56 0         39 -20      0     0 S  0.0  0.0 00:00:00 scsi_tmf_0\n   57 0         19   0      0     0 S  0.0  0.0 00:00:00 scsi_eh_1\n   58 0         39 -20      0     0 S  0.0  0.0 00:00:00 scsi_tmf_1\n   64 0         39 -20      0     0 S  0.0  0.0 00:00:00 ipv6_addrconf\n   83 0         39 -20      0     0 S  0.0  0.0 00:00:00 deferwq\n   84 0         39 -20      0     0 S  0.0  0.0 00:00:00 charger_manager\n  133 0         39 -20      0     0 S  0.0  0.0 00:00:00 kpsmoused\n  144 0         39 -20      0     0 S  0.0  0.0 00:00:03 kworker/1:1H\n  145 0         19   0      0     0 S  0.0  0.0 00:00:31 jbd2/vda1-8\n  146 0         39 -20      0     0 S  0.0  0.0 00:00:00 ext4-rsv-conver\n  148 0         39 -20      0     0 S  0.0  0.0 00:00:01 kworker/0:1H\nlepdendstring',
//     debug: true}, function(resultData) {
//     util.printJson(resultData);
// });


cpuMonitor.getProcessorCount({server: server, debug: true}, function(resultData) {
    util.printJson(resultData);
});
//
// cpuMonitor.GetProcCpuinfo({server: server, debug: true}, function(resultData) {
//     util.printJson(resultData);
// });
//
// cpuMonitor.GetAverageLoad({server: server, debug: true}, function(resultData) {
//     util.printJson(resultData);
// });
//
// cpuMonitor.GetConfig({server: server, debug: true}, function(resultData) {
//     util.printJson(resultData);
// });
//
// cpuMonitor.GetCmdTop({server: server, debug: true}, function(resultData) {
//     util.printJson(resultData);
// });
//
// cpuMonitor.GetCmdMpstat({server: server, debug: true}, function(resultData) {
//     util.printJson(resultData);
// });