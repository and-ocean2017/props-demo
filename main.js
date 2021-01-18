const CourseComplexity = function ({ courseComplexityType }) {
  const studentTypeClass = ["badge", "badge-pill"];

  if (courseComplexityType === "Beginner") studentTypeClass.push("badge-primary");
  else if (courseComplexityType === "Intermediate")
    studentTypeClass.push(" badge-warning");

  return (
    <span className={studentTypeClass.join(" ")}>{courseComplexityType}</span>
  );
};

const CourseCardHeader = function ({ headerText, courseComplexityType }) {
  return (
    <div className="card-header d-flex justify-content-between align-items-center m-0">
      <h5>{headerText}</h5>
      <CourseComplexity courseComplexityType={courseComplexityType} />
    </div>
  );
};

const BuyButtonComponent = function () {
    return (
      <a href="#" className="btn btn-primary">
        Buy
      </a>
    );
}

const CourseCardBody = function ({ courseDescription, children }) {
  return (
    <div className="card-body">
          <p className="card-text">{courseDescription}</p>
          { children }
    </div>
  );
};

const CardComponent = function ({
  headerText,
  courseComplexityType,
  courseDescription,
}) {
  return (
    <div className="card m-4">
      <CourseCardHeader
        headerText={headerText}
        courseComplexityType={courseComplexityType}
      />
        <CourseCardBody courseDescription={courseDescription}>
            <BuyButtonComponent />
        </CourseCardBody>
    </div>
  );
};

const App = function () {
  return (
    <div>
      <h4 className="mt-4 text-center">Course Library</h4>
      <CardComponent
        headerText="React.js"
        courseComplexityType="Beginner"
        courseDescription="A beginner friendly course of React.js Library"
      />
      <CardComponent
        headerText="JavaScript.js"
        courseComplexityType="Intermediate"
        courseDescription="Vanilla JavaScript course for professionals."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));