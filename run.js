const { spawn } = require("child_process");

const concurrency = 100;

console.log("bulding with concurrency " + concurrency);

for (let i = 0; i < concurrency; i++) {
  let output = "";
  const ls = spawn("elm", ["make", "src/Main.elm"]);

  ls.stderr.on("data", data => (output += data));

  ls.on(
    "close",
    code =>
      output &&
      output.indexOf("not enough bytes") != -1 &&
      console.log(
        `child process (${i}) exited with code ${code} \n\n ${output}`
      )
  );
}
