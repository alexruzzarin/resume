import fs from "fs";
import resumeSchema from "resume-schema";

const resumeObject = JSON.parse(fs.readFileSync("resume.json", "utf8"));

resumeSchema.validate(resumeObject, function (err, report) {
  if (err) {
    console.error("The resume was invalid:", err);
    return;
  }
  console.log("Resume validated successfully:", report);
});
