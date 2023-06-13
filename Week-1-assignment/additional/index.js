const { Worker } = require("worker_threads");

const startTime = new Date().getTime();

startSingleThreading();
// startMultiThreading();

function startSingleThreading() {
  let data = 0;
  for (let i = 0; i < 10_000_000_000; i++) {
    data++;
  }
  console.log({ data });
  logTimeTaken();
}

function logTimeTaken() {
  const endTime = new Date().getTime();
  const timeTaken = endTime - startTime;
  console.log("Time taken: " + timeTaken);
}

function createWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./eight-workers.js", {
      workerData: { thread_count: 8 },
    });

    worker.on("message", (data) => {
      resolve(data);
    });

    worker.on("error", (error) => reject(`An error occured ${error}`));
  });
}

async function distributeWork() {
  const workerPromises = [];
  for (let i = 0; i < 8; i++) {
    workerPromises.push(createWorker());
  }
  const threadResults = await Promise.all(workerPromises);
  let total = 0;
  for (let i = 0; i < 8; i++) {
    total += threadResults[i];
  }
  console.log(total);
  logTimeTaken();
}

function startMultiThreading() {
  distributeWork();
}
