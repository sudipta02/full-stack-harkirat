const { parentPort, workerData } = require("worker_threads");

let data = 0;
for (let i = 0; i < 10_000_000_000 / workerData.thread_count; i++) {
  data++;
}
parentPort.postMessage(data);
