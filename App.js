/*

<div id="parent">
<div id="child">
<h1>hello this is react</h1>
</div>
</div>


*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "nothing" }, "hello this is react"),
    React.createElement("h1", { id: "nothing1" }, "hello this is react2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "nothing" }, "hello this is react"),
    React.createElement("h1", { id: "nothing1" }, "hello this is react2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);

console.log(heading); // its an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // render is a method of ReactDOM which is responsible for conveitng react element(object) to DOM element(h1 tag)
