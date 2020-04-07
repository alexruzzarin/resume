const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const dateFormat = require("dateformat");

Handlebars.registerHelper("breaklines", function (text) {
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, "<br/>");
  return new Handlebars.SafeString(text);
});

Handlebars.registerHelper("paragraphSplit", function (text) {
  const lines = Handlebars.Utils.escapeExpression(text).split(/\r\n|\r|\n/g);
  const output = lines
    .map((l) => {
      return `<p>${l}</p>`;
    })
    .join('');
  return new Handlebars.SafeString(output);
});

function render(resumeObject) {
  const css = fs.readFileSync(__dirname + "/style.css", "utf-8");
  const tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
  const partialsDir = path.join(__dirname, "partials");
  const filenames = fs.readdirSync(partialsDir);

  if (resumeObject.basics.profiles) {
    if (resumeObject.basics.profiles[0].network) {
      resumeObject.basics.profiles.forEach(function (w) {
        w.network = w.network.toLowerCase();
        if (w.network == "twitter" && w.url == "" && w.username != "") {
          w.url = "https://twitter.com/" + w.username;
        }
        if (w.network == "facebook" && w.url == "" && w.username != "") {
          w.url = "https://facebook.com/" + w.username;
        }
        if (w.network == "linkedin" && w.url == "" && w.username != "") {
          w.url = "https://linkedin.com/in/" + w.username;
        }
        if (w.network == "github" && w.url == "" && w.username != "") {
          w.url = "https://github.com/" + w.username;
        }
      });
    }
  }

  if (resumeObject.work) {
    if (resumeObject.work[0].company) {
      resumeObject.work.forEach(function (w) {
        if (w.startDate) {
          w.startDate = dateFormat(new Date(w.startDate), "yyyy-mmm");
        }
        if (w.endDate) {
          w.endDate = dateFormat(new Date(w.endDate), "yyyy-mmm");
        }
      });
    }
  }

  if (resumeObject.education) {
    if (resumeObject.education[0].institution) {
      resumeObject.education.forEach(function (e) {
        if (e.startDate) {
          e.startDate = dateFormat(new Date(e.startDate), "yyyy-mmm");
        }
        if (e.endDate) {
          e.endDate = dateFormat(new Date(e.endDate), "yyyy-mmm");
        }
      });
    }
  }

  if (resumeObject.awards) {
    if (resumeObject.awards[0].title) {
      resumeObject.awardsBool = true;
      resumeObject.awards.forEach(function (a) {
        if (a.date) a.date = dateFormat(new Date(a.date), "yyyy-mmm");
      });
    }
  }

  if (resumeObject.publications) {
    if (resumeObject.publications[0].name) {
      resumeObject.publications.forEach(function (a) {
        if (a.date) a.date = dateFormat(new Date(a.date), "yyyy-mmm");
      });
    }
  }

  if (resumeObject.volunteer) {
    if (resumeObject.volunteer[0].position) {
      resumeObject.volunteer.forEach(function (v) {
        if (v.startDate) {
          v.startDate = dateFormat(new Date(v.startDate), "yyyy-mmm");
        }
        if (v.endDate) {
          v.endDate = dateFormat(new Date(v.endDate), "yyyy-mmm");
        }
      });
    }
  }

  filenames.forEach(function (filename) {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    const name = matches[1];
    const filepath = path.join(partialsDir, filename);
    const template = fs.readFileSync(filepath, "utf8");

    Handlebars.registerPartial(name, template);
  });
  return Handlebars.compile(tpl)({
    css: css,
    resume: resumeObject,
  });
}

module.exports = {
  render: render,
};
