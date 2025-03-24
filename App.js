const parents = React.createElement("div", { id: "parents" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am H1 tag"),
        React.createElement("h2", {}, "I am H2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am H3 tag"),
        React.createElement("h2", {}, "I am H4 tag"),
    ]),
]);

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!"
);



console.log(parents);
console.log(heading);
const container = React.createElement(React.Fragment, {}, [parents, heading]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
